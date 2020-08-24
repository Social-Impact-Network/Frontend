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
          <div class="col-md-6">
            <h4 class="card-title">Progress Bars</h4>
            <base-progress label="Default" value-position="right" :value="25" />
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
  </div>
</template>
<script>
import { TimeSelect, DatePicker, Select, Option } from 'element-ui';
import {
  BaseProgress,
  BaseSwitch,
  Slider
} from 'src/components/index';

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
      enabledRadio: '2',
      disabledRadio: '2',
      switches: {
        defaultOn: true,
        defaultOff: false,
        plainOn: true,
        plainOff: false,
        withIconsOn: true,
        withIconsOff: false
      },
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
