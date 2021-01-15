import Web3 from 'web3'
import {address, ABI} from './constants/fundContract'
import {address2, ABI2} from './constants/daiContract'


let getContract = new Promise(async function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let fundContractInstance = await new web3.eth.Contract(ABI, address)
  let daiContractInstance = await new web3.eth.Contract(ABI2, address2)

  resolve ([fundContractInstance, daiContractInstance])
  
})

export default getContract
