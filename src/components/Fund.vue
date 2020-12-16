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

    

        //New claimable amount received

        // 1. get token supply (fix)
        // 1.1 Get all events last 12 months
        // 1.2 Calculate Claimable amount before 12 months
        // 1.3 calculate claimable amount each month
      let today = new Date();
      let tsLastYear = new Date(today.getFullYear()-1 , today.getMonth(), today.getDate()).getTime()/1000;
      
      let dateArray=[]
      for (let i=11; i >= 0; i--) {
	      let dt = new Date();
	      dt.setMonth(dt.getMonth()-i);
	      dt.setDate(1);
	      dt.setHours(0, 0, 0);
	      dt.setMilliseconds(0);
        dateArray.push(dt)
      }
      
      

      //balances[12] = [];
      //console.log("events:\r\n received")
      //console.log(this.$store.state.userDetails.transferReceived)
      //console.log("sent")
      //console.log(this.$store.state.userDetails.transferSent)
      
      //Calculating how balance has been 12 months ago
      let initBalance = 0 
      this.$store.state.userDetails.transferReceived.forEach((received) => {if (received.timestamp<(dateArray[0].getTime()/1000)){initBalance += received.amount} })
      this.$store.state.userDetails.transferReceived.forEach((received) => {if (received.timestamp<(dateArray[0].getTime()/1000)){initBalance -= received.amount} })
      console.log(initBalance)
      

  


    }


    catch (error){
        console.log("error: " + error)
    }
     /*this.$store.dispatch('getContractInstance').then(result =>   {
        this.pending = true
        this.$store.state.contractInstance().methods.balanceOf(this.$store.state.web3.coinbase).call( (err, result) => {
            if (err) {
            this.pending = false
            console.log("Error while retrieving Balance")
            } else {
            this.$store.dispatch('getUserTokenAmount', result).then(result => {
            this.balance = result //@Todo: irgendwie über die ganze APP sharen (hier stehen geblieben.. vuex) und in Dashboard anzeigen lassen
            console.log(this.balance)
            console.log("new")
            console.log(this.$store.state.userDetails.tokenAmount)
            this.pending = false

            })
        
            }
        })})*/
   
}
}
</script>

