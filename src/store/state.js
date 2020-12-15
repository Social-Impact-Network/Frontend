let state = {
    web3: {
      isInjected: false,
      web3Instance: null,
      networkId: null,
      coinbase: null,
      balance: null,
      error: null
    },
    userDetails: {
        tokenAmount: 0,
        tokenAmountWei: 0,
        claimableAmount: 0,
        claimableAmountWei: 0,
        earnings: 0,
        earningsWei: 0,
        tokenPurchased: {
            timestamp: 0,
            amountToken: 0,
            valueUSD: 0
        }
    },
    contractInstance: null
  }
  export default state
  