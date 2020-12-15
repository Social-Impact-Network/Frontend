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





  //return blockData.timestamp
        /**
         * Add tokenpurchased (if buyer == coinbase) -> Add to event log (purchase los)
         * Calculate token added (beneficary payout * (meine token/tokenfull amount)) für jeden Zeitpunkt individuell berehcnen
         * 
         */


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

