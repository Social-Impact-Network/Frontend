<template>

  <div class="extended-forms col-md-12">
  
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form-horizontal" @submit.prevent="handleSubmit(submit)">
        <card>
          <h4 slot="header" class="card-title">Investment order</h4>
          <div class="cold-md-9 offset-md-2">
            <!-- <div class="row">
              <label class="col-sm-2 col-form-label">Required Text</label>
              <div class="col-sm-7">
                <ValidationProvider
                  name="required"
                  rules="required"
                  v-slot="{ passed, failed, errors }"
                >
                <base-input
                  required
                  v-model="required"
                  :error="errors[0]"
                  :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
                </base-input>
              </ValidationProvider>
              </div>
            </div> -->

            <!-- <div class="row">
              <label class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-7">
                <ValidationProvider
                  name="email"
                  rules="required|email"
                  v-slot="{ passed, failed, errors }"
                >
                <base-input
                  required
                  v-model="email"
                  type="email"
                  :error="errors[0]"
                  :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
                </base-input>
              </ValidationProvider>
              </div>
            </div> -->

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
                      v-model="selects.simple"
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
              <!-- <label class="col-sm-3 label-on-right"
                ><code>numeric="true"</code></label
              > -->
            </div>

            <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Reward infos here'>Reward
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>
                  <p class="form-control-static">{{ number*20/100 }}</p>
                </base-input>
              </div>

              <label class="col-sm-3 label-on-right"
                >SI Token</label
              >
            </div>

          <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Energy infos here'>Energy
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>
                  <p class="form-control-static">{{ number*15/100 }}</p>
                </base-input>
              </div>

              <label class="col-sm-3 label-on-right"
                >kWh/month</label
              >
            </div>
            
            <div class="row">
              <label class="col-sm-2 col-form-label">
                <div title= 'Income return infos here' class="b">Income return
                  <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                </div>
              </label>
              <div class="col-sm-5">
                <base-input>
                  <p class="form-control-static">{{ number*5/100 }}</p>
                </base-input>
              </div>

              <label class="col-sm-3 label-on-right" v-if="selects.simple"
                >{{ selects.simple }}/month</label
              >
              <label class="col-sm-3 label-on-right" v-if="!selects.simple"
                >Please select currency</label
              >
            </div>
          </div>

          <!-- <div class="text-center">
            <base-button
              native-type="submit"
              type="primary"
              >Buy</base-button
            >
          </div> -->
          
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
    

    <card>
      <div class="col-md-12 col-sm-4">
        <div class="row">
          <h4 slot="header" class="card-title">Pending Project</h4>
          <div class="col-md-7 offset-md-2">
            <h3 class="card-title">UNDP Country Office (Proposed)</h3>
            <div class="a">
              <p>600k / 1M USD</p>
            </div>
            <!-- <base-progress label="Default" value-position="right" :value="67" /> -->
            <base-progress
              label="2020, June 15th"
              :value="60"
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
                    <i class="tim-icons icon-globe-2"></i>Lebanon
                  </span>
                  <img src="img/Solar.jpg"/>
                  <br>
                  <br>
                  Collaboratively administrate empowered markets via plug-and-play
                  networks. Dynamically procrastinate B2C users after installed base
                  benefits.
						    </tab-pane>

                <tab-pane>
                  <span slot="label">
                    <i class="tim-icons icon-notes"></i>Details
                  </span>
                  <table style="width:100%">
                    <br>
                    <tr>
                      <td>
                        <div title= 'project costs infos here'>
                          Project Cost <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                        </div>
                      </td>
                      <td>1 Mio EUR</td>
                    </tr>

                    <tr>
                      <td>
                        <div title= 'Estimated energy per year infos here'>
                          Estimated energy per year <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                        </div>
                      </td>
                      <td>139,43 MWh</td>
                    </tr>

                    <tr>
                      <div title= 'price per kWh infos here'>
                          Price per kWh <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                      </div>
                      <td>0.15 USD</td>
                    </tr>

                    <tr>
                      <div title= 'service fees infos here'>
                          Service fee <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                      </div>
                      <td>20%</td>
                    </tr>

                    <tr>
                      <div title= 'reinvest rate infos here'>
                          Reinvest rate <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                      </div>
                      <td>20%</td>
                    </tr>


                    <tr>
                      <div title= 'Network dividends infos here'>
                        Network dividends <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                      </div>
                      <td>60%</td>
                    </tr>

                    <tr>
                      <div title= 'Expected Lifetime infos here'>
                        Expected Lifetime <sup><i class="tim-icons icon-alert-circle-exc"></i></sup>
                      </div>
                      <td>20 years</td>
                    </tr>
                  </table>
                </tab-pane>
              </tabs>
            </card>  
          </div>
        </div>
      </div>
    </card>
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
        simple: '',
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
  methods: {
    /* submit() {
      alert("Form has been submitted!");
    }, */
    submit(type) {
      if(this.number > 0 & this.selects.simple!='') {
        if (type === 'success-message') {
          console.log(this.selects.simple);
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
