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
        },
        transferReceived:{
            timestamp: 0,
            amountToken: 0
        },
        transferSent:{
            timestamp: 0,
            amountToken: 0
        },
        tokenClaimed:{
            timestamp: 0,
            amountToken: 0
        },
        receivedClaims:{
            timestamp: 0,
            amountToken:0,
            claimableAmountUSD: 0,
            beneficiaryPayoutTotalUSD: 0
        },
        receidClaimsDateArray:{
            timestamp:0,
            claimableAmountUSD: 0
        }
    },
    beneficiaryPayout:{
        timestamp: 0,
        amountUSD: 0
    },
    projectsGeneral:{
        projectAmount: 0,
        energyGeneratedMTotal:0,
        energyGeneratedMonthly: [],
        co2AvoidedTotal: 0,
        co2AvoidedMonthly: [],
        dividendPayoutsMonthly:[],
        apyMonthly: [],
        averageApy: 0
    },
    projects:[],
    tokenSupplyTotal: 0,
    tokenSupplyTotalWei: 0,
    tokenHolderTotal:0,
    DAIPrice: 0,
    contractInstance: null
  }
  export default state
  