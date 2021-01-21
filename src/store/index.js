import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'
import getContract from '../util/getContract'

Vue.use(Vuex)


export const store = new Vuex.Store({
  strict: true,
  state,
  mutations: {
    registerWeb3Instance (state, payload) {
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
      state.web3 = web3Copy
    },
    registerContractInstance (state, payload) {
      state.contractInstance = () => payload[0]
      state.contractInstanceDai = () => payload[1]
    },
    registerUserTokenAmount (state, payload) {
      state.userDetails.tokenAmountWei = payload['wei']
      state.userDetails.tokenAmount = payload['eth']
    },
    registerUserClaimableAmount (state, payload) {
      state.userDetails.claimableAmount = payload['eth']
      state.userDetails.claimableAmountWei = payload['wei']
    },
    registerEarnings (state, payload) {
      state.userDetails.earningsWei = payload['wei']
      state.userDetails.earnings = payload['eth']
    },
    registerPurchasedEvents (state, payload) {
      state.userDetails.tokenPurchased = payload
    },
    registerTransferSentEvents (state, payload) {
      state.userDetails.transferSent = payload
    },
    registerTransferReceivedEvents (state, payload) {
      state.userDetails.transferReceived = payload
    },
    registerTokenClaimedEvents (state, payload) {
      state.userDetails.tokenClaimed = payload
    },
    registerBeneficiaryPayoutEvents (state, payload) {
      state.beneficiaryPayout = payload
    },
    registerTokenSupply (state, payload) {
      state.tokenSupplyTotalWei = payload['wei']
      state.tokenSupplyTotal = payload['eth']
    },
    registerTokenHolder (state, payload) {
      state.tokenHolderTotal = payload
    },
    registerReceivedClaims (state, payload) {
      state.userDetails.receivedClaims = payload
    },
    registerReceivedClaimsDateArray (state, payload) {
      state.userDetails.receidClaimsDateArray = payload
    },
    registerDAIPrice(state, payload){
      state.DAIPrice = payload
    },
    registerProjects(state, payload){
      state.projects = payload
    },
    registerNumberOfProjects(state, payload){
      state.numberOfProjects = payload
    },
    registerTotalEnergyGenerated(state, payload){
      state.totalEnergyGenerated = payload
    },
    registerTotalCO2Avoided(state, payload){
      state.totalCO2Avoided = payload
    },
    registerAPY(state, payload){
      state.apy = payload
    },
    registerPendingProject(state, payload){
      state.pendingProject = payload
    },
    registerCapLimit(state, payload){
      state.capLimitWei = payload['wei']
      state.capLimit = payload['eth']
    },
    registerConnection(state, payload){
      state.connection = payload
    }
  },
  
  actions: {
    registerWeb3 ({commit}) {
      getWeb3.then(result => {
        commit('registerWeb3Instance', result)
      }).catch(e => {
        console.log('error in action registerWeb3', e)
      })
    },
    getContractInstance ({commit}) {
      getContract.then(result => {
        commit('registerContractInstance', result)
      }).catch(e => console.log(e)) 
    },
    getUserTokenAmount ({commit}, payload) {
      try {
            let payloadWithEth = {
                wei: payload,
                eth: state.web3.web3Instance().utils.fromWei(payload)
            }
            commit('registerUserTokenAmount', payloadWithEth)
      }
        catch(e){console.log(e)}
    },
    getTokenHolderTotal ({commit}, payload) {
      try {
            commit('registerTokenHolder', payload)
      }
        catch(e){console.log(e)}
    },
    getClaimableAmount ({commit}, payload) {
      try {
            let payloadWithEth = {
              wei: payload,
              eth: state.web3.web3Instance().utils.fromWei(payload)
            }
            commit('registerUserClaimableAmount', payloadWithEth)
      }
          catch(e){console.log(e)}
    },
    getEarnings ({commit}, payload) {
      try {
            let payloadWithEth = {
              wei: payload,
              eth: state.web3.web3Instance().utils.fromWei(payload)
            }
            commit('registerEarnings', payloadWithEth)
      }
          catch(e){console.log(e)}
    },
    getPurchasedEvents ({commit}, payload) {
      try {
            commit('registerPurchasedEvents', payload)
      }
        catch(e){console.log(e)}
    },
    getTransferSentEvents ({commit}, payload) {
      try {
            commit('registerTransferSentEvents', payload)
      }
        catch(e){console.log(e)}
    },
    getTransferReceivedEvents ({commit}, payload) {
      try {
            commit('registerTransferReceivedEvents', payload)
      }
        catch(e){console.log(e)}
    },
    getTokenClaimedEvents ({commit}, payload) {
      try {
        commit('registerTokenClaimedEvents', payload)
      }
        catch(e){console.log(e)}
    },
    setTokenSupplyTotal ({commit}, payload) {
      try {
            let payloadWithEth = {
              wei: payload,
              eth: state.web3.web3Instance().utils.fromWei(payload)
            }
        commit('registerTokenSupply', payloadWithEth)
      }
        catch(e){console.log(e)}
    },
    getReceivedClaims ({commit}, payload) {
      try {
      
        commit('registerReceivedClaims', payload)
      }
        catch(e){console.log(e)}
    },
    setDAIPrice ({commit}, payload) {
      try {
        commit('registerDAIPrice', payload)
      }
        catch(e){console.log(e)}
    },
    getReceivedClaimsDateArray ({commit}, payload) {
      try {
        commit('registerReceivedClaimsDateArray', payload)
      }
        catch(e){console.log(e)}
    },
    beneficiaryPayoutEvents ({commit}, payload) {
      try {
        commit('registerBeneficiaryPayoutEvents', payload)
      }
        catch(e){console.log(e)}
    },
    addProjects ({commit}, payload) {
      try {
        commit('registerProjects', payload)
      }
        catch(e){console.log(e)}
    },
    addNumberOfProjects ({commit}, payload) {
      try {
        commit('registerNumberOfProjects', payload)
      }
        catch(e){console.log(e)}
    },
    addTotalEnergyGenerated ({commit}, payload) {
      try {
        commit('registerTotalEnergyGenerated', payload)
      }
        catch(e){console.log(e)}
    },
    addTotalCO2Avoided({commit}, payload) {
      try {
        commit('registerTotalCO2Avoided', payload)
      }
        catch(e){console.log(e)}
    },
    addAPY({commit}, payload) {
      try { 
        commit('registerAPY', payload)
      }
        catch(e){console.log(e)}
    },
    setPendingProject({commit}, payload) {
      try {
        commit('registerPendingProject', payload)
      }
        catch(e){console.log(e)}
    },
    setCapLimit({commit}, payload) {
      try {
            let payloadWithEth = {
              wei: payload,
              eth: state.web3.web3Instance().utils.fromWei(payload)
            }
        commit('registerCapLimit', payloadWithEth)
      }
        catch(e){console.log(e)}
    },
    setConnectionState({commit}, payload) {
      try {
      commit('registerConnection', payload)
      }
        catch(e){console.log(e)}
    }
  }

})
