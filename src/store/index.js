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
      console.log('registerWeb3instance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
      state.web3 = web3Copy
      //pollWeb3()
    },/*
    pollWeb3Instance (state, payload) {
      console.log('pollWeb3Instance mutation being executed', payload)
      state.web3.coinbase = payload.coinbase
      state.web3.balance = parseInt(payload.balance, 10)
    },*/
    registerContractInstance (state, payload) {
      console.log('Fund contract instance: ', payload)
      state.contractInstance = () => payload
    },
    registerUserTokenAmount (state, payload) {
        console.log('User Token Amount: ', payload)
        state.userDetails.tokenAmountWei = payload['wei']
        state.userDetails.tokenAmount = payload['eth']

      },
    registerUserClaimableAmount (state, payload) {
        console.log('User Claimable Amount: ', payload)
        state.userDetails.claimableAmount = payload
        console.log("test22_ " + state.userDetails.claimableAmount)
        //state.userDetails.tokenAmount = payload['eth']

      },
      registerEarnings (state, payload) {
        console.log('User Earnings: ', payload)
        state.userDetails.earningsWei = payload['wei']
        state.userDetails.earnings = payload['eth']
  
        }
  },
  actions: {
    registerWeb3 ({commit}) {
      console.log('registerWeb3 Action being executed')
      getWeb3.then(result => {
        console.log('committing result to registerWeb3Instance mutation')
        commit('registerWeb3Instance', result)
      }).catch(e => {
        console.log('error in action registerWeb3', e)
      })
    },/*,
    pollWeb3 ({commit}, payload) {
      console.log('pollWeb3 action being executed')
      commit('pollWeb3Instance', payload)
    },*/
    getContractInstance ({commit}) {
        console.log("getContractInstance")
        getContract.then(result => {
            commit('registerContractInstance', result)
        }).catch(e => console.log(e)) 
    },
    getUserTokenAmount ({commit}, payload) {
        console.log("getUserTokenAmount")
        try {
            let payloadWithEth = {
                wei: payload,
                eth: state.web3.web3Instance().utils.fromWei(payload)
            }
            commit('registerUserTokenAmount', payloadWithEth)
        }
        catch(e){console.log(e)}
    },
    getClaimableAmount ({commit}, payload) {
        console.log("getClaimableAmount")
        try {
           
            commit('registerUserClaimableAmount', payload)
        }
        catch(e){console.log(e)}
    },
    getEarnings ({commit}, payload) {
        console.log("getEarnings")
        try {
            let payloadWithEth = {
                wei: payload,
                eth: state.web3.web3Instance().utils.fromWei(payload)
            }
            commit('registerEarnings', payloadWithEth)
        }
        catch(e){console.log(e)}
    }
  }
})
