import Web3 from 'web3'
import {address, ABI} from './constants/fundContract'

let getContract = new Promise(async function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let fundContractInstance = await new web3.eth.Contract(ABI, address)
  resolve (fundContractInstance)
})

export default getContract
