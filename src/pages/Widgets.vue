<template>

  <div class="extended-forms col-md-12">
     <metamask/>  

    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form-horizontal" @submit.prevent="handleSubmit(submit)">
        <card v-if="fundOpen">
          <h4 slot="header" class="card-title">Investment order</h4>
          <div class="cold-md-9 offset-md-2">


            <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Invest infos here'>Invest
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-2">
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
             
              
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Reward infos here'>Invest in
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-1"
                >
                  <el-select
                      class="select-primary"
                      size="small"
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

          <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Energy infos here'>Rate
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>
                  <p  class="form-control-static" v-if="selects.currency=='DAI'">1</p>
                  <p  class="form-control-static" v-else>{{ rate }}</p>

                </base-input>
              </div>
              <label class="col-sm-3 label-on-right" 
                >{{selects.currency}}/USD</label
              >
               
            </div>
            
            <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Income return infos here'>Amount to pay
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>

                   <p  class="form-control-static" v-if="selects.currency=='DAI'">{{number}}</p>
                  <p class="form-control-static" v-else>{{ number*rate }}</p>
                </base-input>
              </div>
              <label class="col-sm-3 label-on-right" v-if="selects.currency=='DAI'"
                >USD</label
              >
              <label class="col-sm-3 label-on-right" v-else
                >ETH</label
              >
            </div>
           <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Income return infos here'>Reward
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>
                  <p class="form-control-static">{{number}}</p>
                </base-input>
              </div>

              <label class="col-sm-3 label-on-right"
                >SI Token</label
              >
            
            </div>
           <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Income return infos here'>Energy
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>
                  <p class="form-control-static">{{ number*11.24 }}</p>
                </base-input>
              </div>
              <label class="col-sm-3 label-on-right"
                >kwh per month</label>
            </div>
           <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Income return infos here'>APY
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>
                  <p class="form-control-static">6.5</p>
                </base-input>
              </div>
              <label class="col-sm-3 label-on-right" 
                >%</label>
            </div>
          </div>
          
          <div class="text-center">
            <card>
              <div class="text-center">
      
                <base-checkbox>Please read <a :href="'https://google.com'" target="_blank">this</a> </base-checkbox>
                <p class="card-text">Check your input before submitting</p>
                <base-button
                  type="primary"
                  @click.native="submit('approve')"
                  >Approve</base-button
                >

                <base-button
                  type="primary"
                  @click.native="submit('buyNow')"
                  >Buy now!</base-button
                >

                
              </div>
            </card>
          </div>

        </card>
      <card v-else>
          <h4 slot="header" class="card-title">Funding Closed</h4>
          <div class="cold-md-9 offset-md-2">
      </div>
          
          <div class="text-center">
            <card>
              <div class="text-center">
                <p class="card-text">Funding closed</p>
                
              </div>
            </card>
          </div>

       



      </card>


      </form>
    </ValidationObserver>
    

    <card>
      <div class="col-md-12 col-sm-4">
        <div class="row">
          <h4 slot="header" class="card-title">Pending Project</h4>
          <div class="col-md-7 offset-md-2">
            <h3 class="card-title">{{card.title}}</h3>
            <div class="a">
              <p>{{card.tokenSupplyTotal}} / {{card.capLimit}} USD</p>
            </div>
            <!-- <base-progress label="Default" value-position="right" :value="67" /> -->
            <base-progress
              label="2020, June 15th"
              :value="card.alreadyFunded"
              value-position="right"
              type="primary"
            />
          </div>


          <div class="col-md-9 offset-md-2">
            <card>
              <template slot="header">
                <!-- <h3 class="card-title">Project #4</h3> -->
              </template>
              <tabs
                type="primary"
                tabNavWrapperClasses="col-lg-3 col-md-6"
                tabContentClasses="col-md-8"
                vertical
                square
                class="row"
              >
                

               <tab-pane>
							<span slot="label">
								<i class="tim-icons icon-globe-2"></i>Description
							</span>
							<img src="img/Solar.jpg"/>
							<br>
							<br>
							{{card.description}}
					</tab-pane>
					<tab-pane>
							<span slot="label">
								<i class="tim-icons icon-globe-2"></i>News
							</span>
							<img src="img/Solar.jpg"/>
							<br>
							<br>
							{{card.news}}
					</tab-pane>
						<tab-pane>
							<span slot="label">
								<i class="tim-icons icon-notes"></i>Details
							</span> 
							
							{{card.details}}
									
              					<table style="width:100%">
								<br>
								<tr>
									<td>
										<div title= 'project costs infos here'>
											Location <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
										</div>
									</td>
									<td>{{card.location}}</td>
								</tr>
								<tr>
									<td>
										<div title= 'project costs infos here'>
											Estimated energy per year <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
										</div>
									</td>
									<td>{{card.energyEstimation}} kwH</td>
								</tr>

								<tr>
									<td>
										<div title= 'Estimated energy per year infos here'>
											Project costs <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
										</div>
									</td>
									<td>{{card.costs}} $</td>
								</tr>

								<tr>
									<div title= 'price per kWh infos here'>
											System power <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
									</div>
									<td>{{card.power}} kwp</td>
								</tr>

								<tr>
									<div title= 'service fees infos here'>
											Expected lifetime <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
									</div>
									<td>{{card.expectedLifetime}} years</td>
								</tr>
								<tr>
									<div title= 'service fees infos here'>
											Price per kwH <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
									</div>
									<td>{{card.pricePerKwH}} $</td>
								</tr>
								<tr>
									<div title= 'service fees infos here'>
											APY <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
									</div>
									<td>{{card.apy}} %</td>
								</tr>

							</table>
						</tab-pane>
              </tabs>
            </card>  
          </div>
        </div>
      </div>
    </card>
  </div>  
</template>

<script>
import Metamask from '@/components/metamask'

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
    CollapseItem,
    Metamask
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
      fundOpen: true,
      rate: 0,
      selects: {
        currency: 'DAI',
        currencies: [
          { value: 'DAI', label: 'DAI' },
          { value: 'ETH', label: 'ETH' }
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
    fundOpen: true,
    capLimit: this.$store.state.capLimit,
    tokenSupplyTotal: this.$store.state.tokenSupplyTotal,
    alreadyFunded: (parseInt(this.$store.state.tokenSupplyTotal)/parseInt(this.$store.state.capLimit))*100
        };
        
 
      return pendingProject
    
		}
  },

    async mounted() {


  if(this.$store.state.capLimit == this.$store.state.tokenSupplyTotal && this.$store.state.capLimit > 0){
              this.fundOpen = true;
        }
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
  this.rate = res.data.data.token.derivedETH;
})
.catch((error) => {
  console.error(error)
})



  },
  watch: {
  '$store.state.web3.coinbase': async function() {
    let tokenSupply = 0;
    let capLimit = 0;
        if(this.$store.state.tokenSupplyTotal == 0){
          tokenSupply = await this.$store.state.contractInstance().methods.totalSupply().call()
          this.$store.dispatch('setTokenSupplyTotal', tokenSupply)
        }

        if(this.$store.state.capLimit == 0){
            capLimit = await this.$store.state.contractInstance().methods.cap().call()
            this.$store.dispatch('setCapLimit', capLimit)
        }
      
        if(tokenSupply == capLimit){
              this.fundOpen = false;
        } else {
          this.fundOpen = true;
        }

        
  
    }
  },
  methods: {
    submit(type) {
      let amountToPayWei = 0
      amountToPayWei = this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(this.number), 'ether'))

      //@todo: Error-Handling /  Return value handling has to be added
       if(type=='approve') {
          this.$store.state.contractInstanceDai().methods.approve(address,amountToPayWei).send({from: this.$store.state.web3.coinbase}).then((result) => {
             swal.fire({
                    title: `Approved!`,
            text: 'Your approval request has been confirmed.',
            buttonsStyling: false,
            customClass: {
              confirmButton: 'btn btn-success btn-fill'
            },
            icon: 'success'
          });
                        
            }).catch(function(err) {
                  swal.fire({
                    title: `Error!`,
                    text: 'Please try again later',
                    buttonsStyling: false,
                    customClass: {
                      confirmButton: 'btn btn-error btn-fill'
                    },
                    icon: 'error'
                  });                        // will show "foo"
              });
      } else {
        
          if(this.selects.currency=='DAI' && amountToPayWei >0){
            this.$store.state.contractInstance().methods.buyTokens(amountToPayWei).send({from: this.$store.state.web3.coinbase}).then((result) => {
                        console.log(result)
                         swal.fire({
                    title: `Good job!`,
            text: 'Your investment has been processed',
            buttonsStyling: false,
            customClass: {
              confirmButton: 'btn btn-success btn-fill'
            },
            icon: 'success'
          });
                        }).catch(function(err) {
                  swal.fire({
                    title: `Error!`,
                    text: 'Please try again later',
                    buttonsStyling: false,
                    customClass: {
                      confirmButton: 'btn btn-error btn-fill'
                    },
                    icon: 'error'
                  });                        // will show "foo"
              });
          } else {
            let slippage = 3 //@todo: fix, slippage really high...
            let amountToPay = this.$store.state.DAIPrice*this.number*slippage
            let amountToPayWei = this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(amountToPay), 'ether'))
            let daiAmount = this.$store.state.web3.web3Instance().utils.toBN(this.$store.state.web3.web3Instance().utils.toWei(String(this.number), 'ether'))

            this.$store.state.contractInstance().methods.buyTokens(daiAmount).send({value: amountToPayWei, from: this.$store.state.web3.coinbase}).then((result) => {
              console.log(result)

               swal.fire({
                    title: `Good job!`,
            text: 'Your investment has been processed',
            buttonsStyling: false,
            customClass: {
              confirmButton: 'btn btn-success btn-fill'
            },
            icon: 'success'
          });
          })
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
