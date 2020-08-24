<template>
  <div class="extended-forms">
    <div class="row">
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Datetimepicker</h4>
          <base-input>
            <el-date-picker
              type="datetime"
              placeholder="Date Time Picker"
              v-model="dateTimePicker"
            >
            </el-date-picker>
          </base-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Date Picker</h4>
          <base-input>
            <el-date-picker
              type="date"
              placeholder="Date Picker"
              v-model="datePicker"
            >
            </el-date-picker>
          </base-input>
        </card>
      </div>
      <div class="col-md-4">
        <card>
          <h4 slot="header" class="card-title">Time Picker</h4>
          <base-input>
            <el-time-select placeholder="Time Picker" v-model="timePicker">
            </el-time-select>
          </base-input>
        </card>
      </div>
    </div>
    <card>
      <div class="col-12">
        <div class="row">
          
          <div class="col-md-6">
            <!-- <h4 class="card-title">Choose currency</h4> -->
            <div class="row">
              <div class="col-md-6">
                <el-select
                  class="select-primary"
                  size="large"
                  placeholder="Choose currency"
                  v-model="selects.simple"
                >
                  <el-option
                    v-for="option in selects.countries"
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
        
        <div class="row">
          <div class="col-md-6 offset-md-2">
            <h4 class="card-title">Progress Bar</h4>
            <base-progress label="Default" value-position="right" :value="67" />
            <!-- <base-progress
              label="Primary"
              :value="60"
              value-position="right"
              type="primary"
            /> -->
          </div>
          
          
        </div>
        
      </div>
    </card>
    <!-- end card -->

      <ValidationObserver v-slot="{ handleSubmit }">
  <form class="form-horizontal" @submit.prevent="handleSubmit(submit)">
    <card>
      <h4 slot="header" class="card-title">Type Validation</h4>
      <div>
        <div class="row">
          <label class="col-sm-2 col-form-label">Requred Text</label>
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
          <label class="col-sm-3 label-on-right"
            ><code>required="true"</code></label
          >
        </div>

        <div class="row">
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
          <label class="col-sm-3 label-on-right"
            ><code>email="true"</code></label
          >
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Number</label>
          <div class="col-sm-7">
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
          <label class="col-sm-3 label-on-right"
            ><code>numeric="true"</code></label
          >
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Url</label>
          <div class="col-sm-7">
            <ValidationProvider
              name="url"
              :rules="{
                required: true,
                regex: /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/g
              }"
              v-slot="{ passed, failed, errors }"
            >
            <base-input
              v-model="url"
              type="text"
              :error="errors[0]"
              :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
            </base-input>
           </ValidationProvider>
          </div>
          <label class="col-sm-3 label-on-right"><code>url="true"</code></label>
        </div>

        <div class="row">
          <label class="col-sm-2 col-form-label">Url</label>
          <div class="col-sm-3">
            <ValidationProvider
            name="equal"
            rules="required|confirmed:confirmation"
            v-slot="{ passed, failed, errors }"
            >
            <base-input
              v-model="equal"
              type="text"
              :error="errors[0]"
              :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
            </base-input>
           </ValidationProvider>
          </div>
          <div class="col-sm-3">
            <ValidationProvider
            name="equalTo"
            rules="required"
            vid="confirmation"
            v-slot="{ passed, failed, errors }"
            >
            <base-input
              v-model="equalTo"
              type="text"
              :error="errors[0]"
              :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
            </base-input>
           </ValidationProvider>
          </div>

          <label class="col-sm-4 label-on-right"
            ><code>confirmed="equalToSource"</code></label
          >
        </div>
      </div>
      <div class="text-center">
        <base-button
          native-type="submit"
          type="primary"
          >Validate inputs</base-button
        >
      </div>
    </card>
  </form>
</ValidationObserver>
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
    Slider
  },
  data() {
    return {
      required: "",
      email: "",
      number: "",
      url: "",
      equal: "",
      equalTo: "",
      
      selects: {
        simple: '',
        countries: [
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
    submit() {
      alert("Form has been submitted!");
    }
  }
};
</script>
<style>
.extended-forms .el-select {
  width: 100%;
  margin-bottom: 30px;
}

.extended-forms .progress {
  margin-bottom: 30px;
}
</style>
