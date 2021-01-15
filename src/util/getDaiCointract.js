import Web3 from 'web3'
import {address2, ABI2} from './constants/daiContract'


let getDaiContract = new Promise(async function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let fundContractInstance = await new web3.eth.Contract(ABI2, address2)
  resolve (fundContractInstance)
})

export default getDaiContract
