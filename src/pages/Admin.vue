<template>

  <div class="extended-forms col-md-12">
  
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form-horizontal" @submit.prevent="handleSubmit(submit)">
        <card>
          <h4 slot="header" class="card-title">Investment order</h4>
          <div class="cold-md-9 offset-md-2">


            <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Invest infos here'>Invest
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
              </div>
              <div class="col-md-5">
                <!-- <h4 class="card-title">Choose currency</h4> -->
                <div class="row">
                  <div class="col-md-5">
                    <el-select
                      class="select-primary"
                      size="large"
                      placeholder="Currency"
                      v-model="selects.currency"
                    >
                      <el-option
                        required
                        v-for="option in selects.currencies"
                        class="select-primary"
                        :value="option.value"
                        :label="option.label"
                        :key="option.label"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              
            </div>

           

          
          </div>

         
          
          <div class="text-center">
            <card>
              <div class="text-center">
                <p class="card-text">Check your input before submitting</p>
                <base-button
                  type="primary"
                  @click.native="submit('success-message')"
                  >Buy now!</base-button
                >
              </div>
            </card>
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

import swal from 'sweetalert2';

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
    CollapseItem
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
    submit(type) {
      //calculate eth amount to pay with 5% addition
      let amountToPay = this.$store.state.DAIPrice*this.number*3 // @Todo: fix (security) of this calculation; not important since user gets left coins back
      let amountToPayWei = this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(amountToPay), 'ether'))

      let daiAmount = this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(this.number), 'ether'))
                     
      console.log(amountToPayWei.toString())
      console.log(daiAmount.toString())

      //this.$store.state.contractInstance().methods.buyTokens(this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(100), 'ether'))).send( {from: this.$store.state.web3.coinbase, value: this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(0.47941561331302246), 'ether'))})

      this.$store.state.contractInstance().methods.buyTokens(daiAmount).send({value: amountToPayWei, from: this.$store.state.web3.coinbase}).then((result) => {console.log(result)})
     
      if(this.number > 0 & this.selects.currency!='') {
        if (type === 'success-message') {
          console.log(this.selects.currency);
          swal.fire({
            title: `Good job!`,
            text: 'Our team is now proccessing your investment order',
            buttonsStyling: false,
            customClass: {
              confirmButton: 'btn btn-success btn-fill'
            },
            icon: 'success'
          });
        } 
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
