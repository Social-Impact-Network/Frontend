<template>

  <div class="extended-forms col-md-12">
    <metamask/>

    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form-horizontal" @submit.prevent="handleSubmit(submit)">
        <card>
          <h4 slot="header" class="card-title">Claim Tokens</h4>
          
          <div class="text-center">
            <card v-if="claimable">
              <div class="text-center">
                <p class="card-text">Claim your tokens</p>
                <base-button
                  type="primary"
                  @click.native="submit('claim')"
                  >Claim</base-button>
              </div>
            </card>
            
            <card v-else>
            <div class="text-center">
                <p class="card-text">Funding still open or tokens already claimed</p>
              </div>
            </card>
          </div>
        </card>
          <card>
          <h4 slot="header" class="card-title">Payout</h4>
          <div class="cold-md-9 offset-md-3">
            <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Invest infos here'>Payout amount    

                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-4">
                <ValidationProvider
                  name="number"
                  rules="required|numeric"
                  v-slot="{ passed, failed, errors }"
                >
                <base-input
                  required
                  v-model="number"
                  :error="errors[0]"
                  :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
                </base-input>
              </ValidationProvider>
            <div class="text-center">
              <div class="text-center">
                <base-button
                  type="primary"
                  @click.native="submit('approve')"
                  >Approve</base-button>
                <base-button
                v-if="Number(allowance) > 0 && Number(allowance) >=  Number(number) && Number(number) > 0"
                  type="primary"
                  @click.native="submit('payout')"
                  >Payout</base-button>
            </div>
            </div>
              </div>
              
            </div>
          </div>
        </card>
      </form>
    </ValidationObserver>

 
    <!-- end card -->
  </div>  
</template>

<script>
import { TimeSelect, DatePicker, Select, Option } from 'element-ui';
import {
  BaseProgress,
  BaseSwitch,
  Slider
} from 'src/components/index';

import { extend } from "vee-validate";
import { required, numeric, regex, confirmed } from "vee-validate/dist/rules";

import { TabPane, Tabs, Collapse, CollapseItem } from 'src/components';

import {address} from '../util/constants/fundContract'
import Metamask from '@/components/metamask'

extend("required", required);
extend("numeric", numeric);
extend("regex", regex);
extend("confirmed", confirmed);

  
export default {

  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Option.name]: Option,
    [Select.name]: Select,
    BaseSwitch,
    BaseProgress,
    Slider,
    TabPane,
    Tabs,
    Collapse,
    CollapseItem,
    Metamask,

  },
  data() {
    return {
      activeName: 'first',
      required: "",
      email: "",
      number: '',
      url: "",
      equal: "",
      equalTo: "",
      claimable: true,
      allowance: 0,
      
      selects: {
        currency: '',
        currencies: [
          { value: 'USD', label: 'USD $' },
          { value: 'EUR', label: 'EUR €' },
          { value: 'BTC', label: 'BTC ₿' }
        ],
        multiple: 'ARS'
      },
      datePicker: '',
      dateTimePicker: '',
      timePicker: ''
    };
  },

  computed:{
card() {
  let pendingProject = {
          title: 'to add ',
        news: 'to add ',
		description: 'to add',
		details: 'to add',
		costs: 'to add ',
		expectedLifetime: 'to add',
		pricePerKwH: 'to add ',
		power:'to add ',
		energyEstimation: 'to add ',
		apy: 'to add',
    location: 'to add ',
    capLimit: this.$store.state.capLimit,
    tokenSupplyTotal: this.$store.state.tokenSupplyTotal,
    alreadyFunded: parseInt(this.$store.state.tokenSupplyTotal/this.$store.state.capLimit)*100
        };

      return pendingProject
    
		}
  },
    
      watch: {
  '$store.state.web3.coinbase': function() {
   
       this.$store.state.contractInstance().methods.isFundingReleased().call().then((result) => {
        if (result === true){
          this.claimable = false
        } else {
              this.$store.state.contractInstance().methods.tokensale_open().call().then((result) => {
                if(result === true){
                  this.claimable = false
                }
              })
          }   
        })
      this.$store.state.contractInstanceDai().methods.allowance(this.$store.state.web3.coinbase,address).call().then((result) => {this.allowance = this.$store.state.web3.web3Instance().utils.fromWei(result, 'ether');})

  
    },
  },
    mounted() {
 
     
      const axios = require('axios')

axios.post('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', {
  query: `
  {
    token(id: "0x6b175474e89094c44da98b954eedeac495271d0f") {
      derivedETH
    }
  }
   
  `
})
.then((res) => {
  this.$store.dispatch('setDAIPrice', res.data.data.token.derivedETH)
  
})
.catch((error) => {
  console.error(error)
})
  },
  methods: {
    async checkAllowanceInterval(startBlock, amountToPayWei){
    let interval = 2000;
    let counter = 0
    
    let interValObj = window.setInterval(async () => {
     

       let ret = await this.$store.state.contractInstanceDai().getPastEvents("Approval",{
            filter: {owner: this.$store.state.web3.coinbase, spender:address},
            fromBlock: startBlock+1
            })
      if(ret.length> 0){
         this.allowance = this.$store.state.web3.web3Instance().utils.fromWei(ret[ret.length - 1].returnValues.value, 'ether');
       
      }

        counter++;
        if(counter > 70 || ret.length>0){
          clearInterval(interValObj);

        }
      }, interval)
      return interValObj;
    
    },
    async submit(type) {
      let amountToPayWei = 0
      //@todo: Error-Handling /  Return value handling has to be added
      if(type=='claim'){
        this.$store.state.contractInstance().methods.releaseFunds().send({from: this.$store.state.web3.coinbase}).then((result) => {console.log(result)})

      } else if(type=='approve') {
        let latestBlockNr = await this.$store.state.web3.web3Instance().eth.getBlockNumber();
        amountToPayWei = this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(this.number), 'ether'))

        let allowanceCheck = this.checkAllowanceInterval(latestBlockNr, amountToPayWei)

          this.$store.state.contractInstanceDai().methods.approve(address,amountToPayWei).send({from: this.$store.state.web3.coinbase}).then((result) => {
            console.log(this.$store.state.contractInstanceDai())
            clearInterval(allowanceCheck);
            this.allowance = this.number;
            }).catch(function(err) {
            clearInterval(allowanceCheck);
                console.log(err)
              });
      } else {
          amountToPayWei = this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(this.number), 'ether'))
          this.$store.state.contractInstance().methods.receivePayment(amountToPayWei).send({from: this.$store.state.web3.coinbase}).then((result) => {console.log(result)})
      }
     
    }
  }
};
</script>
<style lang="scss">
.extended-forms .el-select {
  width: 100%;
  margin-bottom: 30px;
}

.extended-forms .progress {
  margin-bottom: 30px;
}
div.a {
  text-align: right;
} 

div.b {
  text-align: left;
} 
</style>
