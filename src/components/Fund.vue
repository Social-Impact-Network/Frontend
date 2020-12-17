<template>
  <div>
      
</div>
</template>

<script>
export default {
  name: 'Fund',
  data () {
    return {
      amount: null,
      pending: false,
    }
  },
 
  methods: {
    /* clickNumber (event) {
      //this.winEvent = null
      this.pending = true    
      this.$store.state.contractInstance().methods.balanceOf(this.$store.state.web3.coinbase).call( (err, result) => {
        if (err) {
          this.pending = false
          console.log("Error while retrieving Balance")
        } else {
          this.balance = result;
          this.pending = false;
        }
      })

    } */
  },
 async mounted () {
    
    console.log('dispatching getContractInstance')
    try{ //@todo: improvement: check dependencies and concurrencies to fasten it up.. 
        await this.$store.dispatch('getContractInstance')
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
      
      let dateArray=[] // Setting array with [0] => timestamp of beginning of 12 months ago, [1] => timestamo of beginning of month 11 months ago, ..
      for (let i=11; i >= 0; i--) {
	      let dt = new Date();
	      dt.setMonth(dt.getMonth()-i);
	      dt.setDate(1);
	      dt.setHours(0, 0, 0);
	      dt.setMilliseconds(0);
        dateArray.push(dt)
      }
      
      const tokenSupply = 1000000000000000000 // fix maximum tokensupply
        this.$store.dispatch('setTokenSupplyTotal', tokenSupply)
        console.log(this.$store.state.tokenSupplyTotal)


      //Copying store for editing
      let tranferReceivedTest = this.$store.state.userDetails.transferReceived.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountToken":"100","timestamp":1574121600},{"amountToken":"150","timestamp":1576108800},{"amountToken":"50","timestamp":1572912000},{"amountToken":"50","timestamp":1577836800}]')
      let transferSentTest =  this.$store.state.userDetails.transferSent.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountToken":"10","timestamp":1576108800},{"amountToken":"10","timestamp":1575504000},{"amountToken":"10","timestamp":1573084800}]')
      let claimedTest = this.$store.state.userDetails.tokenClaimed.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountUSD":"10000000000000000000","timestamp":1607965360},{"amountUSD":"8699999999999999999","timestamp":1607967920},{"amountUSD":"8775674653587905446","timestamp":1607968413},{"amountUSD":"7898107188229114901","timestamp":1608048329}]')
      let beneficiaryPayoutTest = this.$store.state.beneficiaryPayout.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountUSD":"100","timestamp":1572998400},{"amountUSD":"100","timestamp":1575936000},{"amountUSD":"100","timestamp":1578182400}]')
      //sorting each store based on timestamp
      function sortingTimestamps(a, b) {
        if (a.timestamp === b.timestamp) {
        return 0;
          }
          else {
          return (a.timestamp < b.timestamp) ? -1 : 1;
          }
      }

      tranferReceivedTest.sort(sortingTimestamps)
      transferSentTest.sort(sortingTimestamps)
      claimedTest.sort(sortingTimestamps)
      beneficiaryPayoutTest.sort(sortingTimestamps)

			let tokenBalancePayout = 0
      let claimableAmountPayout = 0
      let claimableAmountTotalPayout = 0
      let receivedClaim = []
      beneficiaryPayoutTest.forEach( // For each Payout calculate how much tokens the user has at the given moment
        (payout) => {

          tranferReceivedTest.every(function(element, index) {
              
              if (element.timestamp > payout.timestamp) return false // if timestamp of payout is later than timestemp of transferreceived event -> breal
              
              else {
              			if(element.used !== true){ //check that element is not multiple times used for calculation
              				tokenBalancePayout += parseInt(element.amountToken) // add to tokenbalance
              				element.used = true;
             					}
             	return true
             	}
         })

          transferSentTest.every(function(element, index) {
              if (element.timestamp > payout.timestamp) return false
              else {
              			if(element.used !== true){
                          tokenBalancePayout -= parseInt(element.amountToken) //substract from token balance
                          element.used = true
                    			}

              			return true
              
              		} 
              })

            claimableAmountPayout = payout.amountUSD*(tokenBalancePayout/this.$store.state.tokenSupplyTotal) // calculate which porportion the user receives of payout (based on token amount, token supply amount of payout)
            console.log("Tokenamount" + tokenBalancePayout + " Total Supply: " + tokenSupply + " Payout:" + claimableAmountPayout)
            claimableAmountTotalPayout += claimableAmountPayout
          receivedClaim.push({
            timestamp: payout.timestamp,
            amountToken: tokenBalancePayout,
            claimableAmountUSD: claimableAmountPayout,
            beneficiaryPayoutTotalUSD: payout.amountUSD
          })
      

          }
        
        )
   
       this.$store.dispatch('getReceivedClaims', receivedClaim)




    }


    catch (error){
        console.log("error: " + error)
    }
     
   
}
}
</script>

