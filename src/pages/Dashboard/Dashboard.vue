<template>
  <div class="row">
     <metamask/>
     <Fund v-if="this.$store.state.web3.coinbase"/>

    <!-- Stats Cards -->
    <div class="col-lg-3 col-md-6" v-for="card in statsCards" :key="card.title">
      <stats-card
        :title="card.title"
        :sub-title="card.subTitle"
        :type="card.type"
        :icon="card.icon"
        :claimButtonShow="card.claimButtonShow"
        :claimButtonDisable="card.claimButtonDisable"
        :buyToken="card.buyToken"
      > 
        <div slot="footer" v-html="card.footer"></div>
      </stats-card>

    </div>
<!--
               <button class="btn btn-primary btn-round">Buy Tokens</button>
               <button class="btn btn-primary btn-round">Not connected</button> -->


    <!-- Big Chart -->
    <div class="col-12">
      <card type="chart">
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            ref="bigChart"
            :chart-data="bigLineChart.chartData"
            :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops"
            :extra-options="bigLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>
    
    


    
    <div class="col-md-12">
      <card class="card" :header-classes="{ 'text-right': isRTL }">
        <div class=""><user-table></user-table></div>
        <!-- <h5 slot="header" class="card-title">Purchase log</h5> -->
      </card>
    </div>
    <!-- <div class="col-lg-12"><country-map-card></country-map-card></div> -->
  </div>
</template>
<script>
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import * as chartConfigs from '@/components/Charts/config';
import TaskList from './TaskList';
import UserTable from './UserTable';
import CountryMapCard from './CountryMapCard';
import StatsCard from 'src/components/Cards/StatsCard';
import config from '@/config';
import Metamask from '@/components/metamask'
import Fund from '@/components/Fund'



let bigChartData = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]//,
  //[80, 120, 156, 222, 286, 380, 421, 409, 321, 231, 180, 133, 99]
]


let bigChartLabels = [[]]
let dtPrimary = new Date()

for (let i=11; i>=0; i--){
let dt = new Date()
dt.setMonth(dtPrimary.getMonth()-i)
bigChartLabels[0].push(dt.toLocaleString('default', { month: 'short' }))
}
/*let bigChartLabels = [
  ['J2N', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
 // ["January '19", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', "January '20"],
  /* ['a','b','c','d','e','f','g','h','i','k','l','m','n'] 
]*/

let bigChartDatasetOptions = {
  fill: true,
  borderColor: config.colors.primary,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.primary,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
}

export default {
  components: {
    LineChart,
    BarChart,
    StatsCard,
    TaskList,
    CountryMapCard,
    UserTable,
    Metamask,
    Fund
  },
  data() {
    return {
      bigLineChart: {
        activeIndex: 0,
        chartData: {
          datasets: [{
            ...bigChartDatasetOptions,
            data: bigChartData[0]
          }],
          labels: bigChartLabels
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      }
    };
  },
  computed: {
    receidClaimsDateArray(){
        return this.$store.state.userDetails.receidClaimsDateArray;
    },
    statsCards() {
      
      
      return [
        {
          title: Number(this.$store.state.userDetails.tokenAmount).toFixed(2) + ' SIP',
          subTitle: 'Token',
          type: 'primary',
          icon: 'tim-icons icon-coins',
          //footer: '<i class="tim-icons icon-chart-bar-32"></i> Progression'
        },
        {
          title: Number(this.$store.state.userDetails.earnings).toFixed(2) + ' $',
          subTitle: 'Earning',
          type: 'warning',
          icon: 'tim-icons icon-bank',
          //footer: '<i class="tim-icons icon-notes"></i> Earning history',
          //claimButtonShow: true,
          //claimButtonDisable: Boolean(Number(this.$store.state.userDetails.claimableAmount))
        },
        {
          title: Number(this.$store.state.userDetails.claimableAmount).toFixed(2)+ ' $',
          subTitle: 'Claimable',
          type: 'warning',
          icon: 'tim-icons icon-bank',
          //footer: '<i class="tim-icons icon-notes"></i> Earning history',
          claimButtonShow: true,
          claimButtonDisable: Boolean(Number(this.$store.state.userDetails.claimableAmount))
        },
        {
          title: '2478 kWh',
          subTitle: 'Your generated Energy',
          type: 'info',
          icon: 'tim-icons icon-bulb-63',
          //footer: '<i class="tim-icons icon-satisfied"></i> Impact'
        }/*,
        {
          title: 'Buy Token',
          subTitle: 'Invest',
          type: 'danger',
          icon: 'tim-icons icon-cart',
          buyToken: true
          //footer: '<i class="tim-icons icon-wallet-43"></i> Purchase history'
        }*/
      ]
    },
          
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return [
        { name: 'Earning (€)', icon: 'tim-icons icon-bank' }, 
        { name: 'Energy (kwh)', icon: 'tim-icons icon-light-3' }
      ];
    }
  },
  methods: {

    claim(){
        this.$store.state.contractInstance().methods.withdrawAmount().send({from: this.$store.state.web3.coinbase}).then((result) => {console.log(result)})
    },

    updateChart(){
this.$store.state.userDetails.receidClaimsDateArray.forEach((element, index) => {
  bigChartData[0][index] = parseInt(this.$store.state.web3.web3Instance().utils.fromWei(element.claimableAmountUSD.toString()))

})
    

      this.bigLineChart = {
        activeIndex: 0,
        chartData: {
          datasets: [{
            ...bigChartDatasetOptions,
            data: bigChartData[0]
          }],
          labels: bigChartLabels
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      }
      this.initBigChart(0);

    },
    
    initBigChart(index) {
      let chartData = {
        datasets: [{
          ...bigChartDatasetOptions,
          data: bigChartData[index]
        }],
        labels: bigChartLabels[index],
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
      
      /* console.log(index); */
    }
  },
  watch:{
    receidClaimsDateArray (newVal, oldVal) {
      this.updateChart()
    }

  },
  mounted() {/*
    console.log("test")
console.log(this.$store.state.userDetails.receidClaimsDateArray)
this.$store.state.userDetails.receidClaimsDateArray.forEach((element) => {
console.log(element)


})
bigChartData = [
  [50, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,],
  [50, 100000000000, 156, 222, 286, 380, 421, 409, 321, 231, 180, 133, 99]/* ,
  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130, 22] 
]*/
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = 'ar';
      this.$rtl.enableRTL();
    }
    this.initBigChart(0);
  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = 'en';
      this.$rtl.disableRTL();
    }
  }
};
</script>

<style>

</style>
