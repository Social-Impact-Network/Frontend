<template>
  <div>
      
</div>
</template>

<script>


export default {

  name: 'PendingProject',
  data () {
    return {
      amount: null,
      pending: false,
    }
  },
 
  methods: {
    
  },
 async mounted () {
    
    try{ //@todo: improvement: check dependencies and concurrencies to fasten it up.. 
        //await this.$store.dispatch('getContractInstance')
        let tokenAmount = await this.$store.state.contractInstance().methods.balanceOf(this.$store.state.web3.coinbase).call()
        let claimableAmount = await this.$store.state.contractInstance().methods.claimableAmountOf(this.$store.state.web3.coinbase).call()
        
        this.$store.dispatch('getUserTokenAmount', tokenAmount)
        this.$store.dispatch('getClaimableAmount', claimableAmount)
        let resultAmountPaidOut = await this.$store.state.contractInstance().getPastEvents("AmountPaidOut",{
            filter: {tokenholder: this.$store.state.web3.coinbase},
            fromBlock: 1})
       
        var BN = this.$store.state.web3.web3Instance().utils.BN;
        let earnings = new BN(0)
        resultAmountPaidOut.forEach((amount) => { 
            earnings = earnings.add(new BN(amount.returnValues.amount))
        })
        this.$store.dispatch('getEarnings', earnings)

        //Event: Token purchased
        let resultTokensPurchase = await this.$store.state.contractInstance().getPastEvents("TokensPurchased",{
            filter: {buyer: this.$store.state.web3.coinbase},
            fromBlock: 1})
            console.log("tokens purchased")
        let purchasedEventPayload = []
        
        for await (let purchasedEvent of resultTokensPurchase) { //@todo: test with multiple purchasedEvents committed
        purchasedEventPayload.push( {
                amountToken: purchasedEvent.returnValues.amount, //@todo: has to be changed to new FundContract
                valueUSD: purchasedEvent.returnValues.value,
                timestamp: (await this.$store.state.web3.web3Instance().eth.getBlock(purchasedEvent.blockNumber)).timestamp //@todo: improvement: check if ts could be added to contract to save alot of time here..
            })
        }
        this.$store.dispatch('getPurchasedEvents', purchasedEventPayload)
        //Event: Token sent (transfer)
        let resultTokenSent = await this.$store.state.contractInstance().getPastEvents("Transfer",{
            filter: {from: this.$store.state.web3.coinbase},
            fromBlock: 1})

        let tokenSentEventPayload = []
        for await (let tokenSentEvent of resultTokenSent) { //@todo: test with multiple purchasedEvents committed
        tokenSentEventPayload.push( {
                amountToken: tokenSentEvent.returnValues.value, //@todo: has to be changed to new FundContract
                timestamp: (await this.$store.state.web3.web3Instance().eth.getBlock(tokenSentEvent.blockNumber)).timestamp //@todo: improvement: check if ts could be added to contract to save alot of time here..
            })
        }
        this.$store.dispatch('getTransferSentEvents', tokenSentEventPayload)



        //Event: Token received (transfer)
        let resultTokenReceived = await this.$store.state.contractInstance().getPastEvents("Transfer",{
            filter: {to: this.$store.state.web3.coinbase},
            fromBlock: 1})

        let tokenReceivedEventPayload = []
        for await (let tokenReceivedEvent of resultTokenReceived) { //@todo: test with multiple purchasedEvents committed
        tokenReceivedEventPayload.push( {
                amountToken: tokenReceivedEvent.returnValues.value, //@todo: has to be changed to new FundContract
                timestamp: (await this.$store.state.web3.web3Instance().eth.getBlock(tokenReceivedEvent.blockNumber)).timestamp //@todo: improvement: check if ts could be added to contract to save alot of time here..
            })
        }
        console.log("received")
        console.log(tokenReceivedEventPayload)
        this.$store.dispatch('getTransferReceivedEvents', tokenReceivedEventPayload)
    
    
        //Event: Token claimed
        let resultTokenClaimed = await this.$store.state.contractInstance().getPastEvents("AmountPaidOut",{
            filter: {tokenholder: this.$store.state.web3.coinbase},
            fromBlock: 1})
        console.log(resultTokenClaimed)
        let tokenClaimedEventPayload = []
        for await (let tokenClaimedEvent of resultTokenClaimed) { //@todo: test with multiple purchasedEvents committed
        tokenClaimedEventPayload.push( {
                amountUSD: tokenClaimedEvent.returnValues.amount, //@todo: has to be changed to new FundContract
                timestamp: (await this.$store.state.web3.web3Instance().eth.getBlock(tokenClaimedEvent.blockNumber)).timestamp //@todo: improvement: check if ts could be added to contract to save alot of time here..
            })
        }
        this.$store.dispatch('getTokenClaimedEvents', tokenClaimedEventPayload)

      //Event: BeneficiaryPayout
      
       let resultBeneficiaryPayout = await this.$store.state.contractInstance().getPastEvents("PaymentReceived",{
            fromBlock: 1})
            console.log("beneficiracy...")
                    console.log(resultBeneficiaryPayout)

      let beneficiaryPayoutPayload = []
        for await (let  beneficiaryPayoutEvent of resultBeneficiaryPayout) { //@todo: test with multiple purchasedEvents committed
        beneficiaryPayoutPayload.push( {
                amountUSD: beneficiaryPayoutEvent.returnValues.amount, //@todo: has to be changed to new FundContract
                timestamp: (await this.$store.state.web3.web3Instance().eth.getBlock(beneficiaryPayoutEvent.blockNumber)).timestamp //@todo: improvement: check if ts could be added to contract to save alot of time here..
            })
        }
      this.$store.dispatch('beneficiaryPayoutEvents', beneficiaryPayoutPayload)



       // Calculate how much of beneficary payout user receives
      let today = new Date();
      let tsLastYear = new Date(today.getFullYear()-1 , today.getMonth(), today.getDate()).getTime()/1000; // Graph will show last year
      
      
      
      const tokenSupply =  await this.$store.state.contractInstance().methods.totalSupply().call(); //1000000000000000000 // tokensupply
        this.$store.dispatch('setTokenSupplyTotal', tokenSupply)
      const capLimit = await this.$store.state.contractInstance().methods.cap().call();
        this.$store.dispatch('setCapLimit', capLimit)
        
      //Copying store for editing
      let tranferReceived = this.$store.state.userDetails.transferReceived.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountToken":"100","timestamp":1574121600},{"amountToken":"150","timestamp":1576108800},{"amountToken":"50","timestamp":1572912000},{"amountToken":"50","timestamp":1577836800}]')
      let transferSent =  this.$store.state.userDetails.transferSent.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountToken":"10","timestamp":1576108800},{"amountToken":"10","timestamp":1575504000},{"amountToken":"10","timestamp":1573084800}]')
      let claimed = this.$store.state.userDetails.tokenClaimed.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountUSD":"10000000000000000000","timestamp":1607965360},{"amountUSD":"8699999999999999999","timestamp":1607967920},{"amountUSD":"8775674653587905446","timestamp":1607968413},{"amountUSD":"7898107188229114901","timestamp":1608048329}]')
      let beneficiaryPayout = this.$store.state.beneficiaryPayout.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountUSD":"100","timestamp":1572998400},{"amountUSD":"100","timestamp":1575936000},{"amountUSD":"100","timestamp":1578182400}]')
      //sorting each store based on timestamp
      function sortingTimestamps(a, b) {
        if (a.timestamp === b.timestamp) {
        return 0;
          }
          else {
          return (a.timestamp < b.timestamp) ? -1 : 1;
          }
      }

      tranferReceived.sort(sortingTimestamps)
      transferSent.sort(sortingTimestamps)
      claimed.sort(sortingTimestamps)
      beneficiaryPayout.sort(sortingTimestamps)

			let tokenBalancePayout = 0
      let claimableAmountPayout = 0
      let claimableAmountTotalPayout = 0
      let receivedClaims = []
      beneficiaryPayout.forEach( // For each Payout calculate how much tokens the user has at the given moment
        (payout) => {

          tranferReceived.every(function(element, index) {
              
              if (element.timestamp > payout.timestamp) return false // if timestamp of payout is later than timestemp of transferreceived event -> breal
              
              else {
              			if(element.used !== true){ //check that element is not multiple times used for calculation
              				tokenBalancePayout += parseInt(element.amountToken) // add to tokenbalance
              				element.used = true;
             					}
             	return true
             	}
         })

          transferSent.every(function(element, index) {
              if (element.timestamp > payout.timestamp) return false
              else {
              			if(element.used !== true){
                          tokenBalancePayout -= parseInt(element.amountToken) //substract from token balance
                          element.used = true
                    			}

              			return true
              
              		} 
              })

            console.log("amountUSD: " + payout.amountUSD)
            console.log("tokenBalancePayout: " + tokenBalancePayout)
            console.log("totalsupply: " + this.$store.state.tokenSupplyTotalWei)
            console.log(payout)

            claimableAmountPayout = parseInt(payout.amountUSD*(tokenBalancePayout/this.$store.state.tokenSupplyTotalWei)) // calculate which porportion the user receives of payout (based on token amount, token supply amount of payout)
            console.log("Tokenamount" + tokenBalancePayout + " Total Supply: " + tokenSupply + " Payout:" + claimableAmountPayout)
            claimableAmountTotalPayout += claimableAmountPayout
           
            receivedClaims.push({
            timestamp: payout.timestamp,
            amountToken: tokenBalancePayout,
            claimableAmountUSD: claimableAmountPayout,
            beneficiaryPayout: payout.amountUSD
            })
      

          }
        
        )
      receivedClaims.sort(sortingTimestamps)

       this.$store.dispatch('getReceivedClaims', receivedClaims)


       let dateArray=[{
        timestamp: 0,
        claimableAmountUSD: 0
      }] // Setting array with [0] => timestamp of beginning of 12 months ago, [1] => timestamo of beginning of month 11 months ago, ..
      for (let i=10; i >= 0; i--) {
	      let dt = new Date();
	      dt.setMonth(dt.getMonth()-i);
	      dt.setDate(1);
	      dt.setHours(0, 0, 0);
	      dt.setMilliseconds(0);
        dateArray.push({timestamp: dt, claimableAmountUSD:0})
      }

      receivedClaims.forEach(function(element, index){
          //@todo: change to loop    
          switch(true){

            case (element.timestamp < dateArray[1].timestamp.getTime()/1000): {dateArray[0].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[1].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[2].timestamp.getTime()/1000): {dateArray[1].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[2].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[3].timestamp.getTime()/1000): {dateArray[2].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[3].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[4].timestamp.getTime()/1000): {dateArray[3].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[4].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[5].timestamp.getTime()/1000): {dateArray[4].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[5].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[6].timestamp.getTime()/1000): {dateArray[5].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[6].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[7].timestamp.getTime()/1000): {dateArray[6].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[7].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[8].timestamp.getTime()/1000): {dateArray[7].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[8].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[9].timestamp.getTime()/1000): {dateArray[8].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[9].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[10].timestamp.getTime()/1000): {dateArray[9].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[10].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[11].timestamp.getTime()/1000): {dateArray[10].claimableAmountUSD += element.claimableAmountUSD; break;}
            case (dateArray[11].timestamp.getTime()/1000 <= element.timestamp ): {dateArray[11].claimableAmountUSD += element.claimableAmountUSD; break;}
          }

      })

       this.$store.dispatch('getReceivedClaimsDateArray', dateArray)

    }


    catch (error){
        console.log("error: " + error)
    }
     
   
}
}
</script>

