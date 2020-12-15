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
    try{
        await this.$store.dispatch('getContractInstance')
        let tokenAmount = await this.$store.state.contractInstance().methods.balanceOf(this.$store.state.web3.coinbase).call()
        let claimableAmount = await this.$store.state.contractInstance().methods.claimableAmountOf(this.$store.state.web3.coinbase).call()
        this.$store.dispatch('getUserTokenAmount', tokenAmount)
        this.$store.dispatch('getClaimableAmount', claimableAmount)
        let result = await this.$store.state.contractInstance().getPastEvents("AmountPaidOut",{
            filter: {tokenholder: this.$store.state.web3.coinbase},
            fromBlock: 1})
       
       var BN = this.$store.state.web3.web3Instance().utils.BN;
        let earnings = new BN(0)
        result.forEach((amount) => { 
            earnings = earnings.add(new BN(amount.returnValues.amount))
        })
        this.$store.dispatch('getEarnings', earnings)
    
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

