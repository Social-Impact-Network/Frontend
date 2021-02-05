<template>
  <div class="row">
     <metamask/>
    <!-- Stats Cards -->
    <div class="col-lg-4" v-for="card in statsCards" :key="card.title">
      <stats-card
        :title="card.title"
        :sub-title="card.subTitle"
        :type="card.type"
        :icon="card.icon"
      >
        <!--<div slot="footer" v-html="card.footer"></div>-->
      </stats-card>
    </div>


    <!-- Small charts -->
<div class="col-lg-4" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h3 class="card-title">Energy generated (kwH)</h3>
          <!--<h3 class="card-title">
            <i class="tim-icons icon-light-3"></i> 563,165
          </h3>-->
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
			ref="enegeryGeneratedChart"
            :chart-data="enegeryGeneratedChart.chartData"
            :gradient-colors="enegeryGeneratedChart.gradientColors"
            :gradient-stops="enegeryGeneratedChart.gradientStops"
            :extra-options="enegeryGeneratedChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>


    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h3 class="card-title">Payouts (USD)</h3>
          <!--<h3 class="card-title">
            <i class="tim-icons icon-light-3"></i> 563,165
          </h3>-->
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
			ref="earningsChart"
            :chart-data="earningsChart.chartData"
            :gradient-colors="earningsChart.gradientColors"
            :gradient-stops="earningsChart.gradientStops"
            :extra-options="earningsChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>

    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h3 class="card-title">Performance (APY)</h3>
          <!--<h3 class="card-title">
            <i class="tim-icons icon-money-coins"></i> 23,890
          </h3>-->
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
			ref="performanceChart"
            :chart-data="performanceChart.chartData"
            :gradient-stops="performanceChart.gradientStops"
            :extra-options="performanceChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div> 

    <div class="row">
			<!-- Big quadratic tabs with icons -->
			<!--<div class="col-md-6">v-for="card in statsCards" :key="card.title"-->
<div class="col-md-6" v-for="card in projectCards" :key="card.title">
	<card>
			<template slot="header">
				<h3 class="card-title">{{card.title}}</h3>
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




		<div class="col-md-6 ml-auto mr-auto">
			<div class="width: 100%">
				<base-button type="primary" class="btn btn-block" @click="toggleText">{{ text }}</base-button>
			</div>
		</div>
    
  </div>
</template>
<script>
import LineChart from 'src/components/Charts/LineChart.js';
import * as chartConfigs from 'src/components/Charts/config.js';
import TaskList from 'src/pages/Dashboard/TaskList.vue';
import UserTable from 'src/pages/Dashboard/UserTable.vue';
import CountryMapCard from 'src/pages/Dashboard/CountryMapCard.vue';
import StatsCard from 'src/components/Cards/StatsCard';
import config from '@/config';
import { TabPane, Tabs, Collapse, CollapseItem } from 'src/components';
import axios from 'axios'
import {address} from '../../util/constants/fundContract'
import Metamask from '@/components/metamask'

let chartLabels = []
let dtPrimary = new Date()

for (let i=5; i>=0; i--){
let dt = new Date()
dt.setMonth(dtPrimary.getMonth()-i)
chartLabels.push(dt.toLocaleString('default', { month: 'short' }))
}


export default {
	show: false,
	text: 'Show more projects',
  components: {
    LineChart,
    StatsCard,
    TaskList,
    CountryMapCard,
    UserTable,
    TabPane,
    Tabs,
    Collapse,
	CollapseItem,
	Metamask,

  },
  data() {
    return {
    	text: 'Show more projects',
    	showMore: false,
    enegeryGeneratedChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: chartLabels,
          datasets: [
            {
              label: 'kWh generated up to this month by all projects',
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
              data: [0, 0, 0, 0, 0, 0]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
	  },
	  earningsChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: chartLabels,
          datasets: [
            {
              label: 'kWh generated up to this month by all projects',
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
              data: [0, 0, 0, 0, 0, 0]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
	  },
      performanceChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: chartLabels,
          datasets: [
            {
              label: 'Amount of € generated up to this month',
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.danger,
              data: [7, 7, 6, 7, 7, 7]
			},
			
          ]
        },
        gradientColors: [
          'rgba(66,134,121,0.15)',
          'rgba(66,134,121,0.0)',
          'rgba(66,134,121,0)'
        ],
        gradientStops: [1, 0.4, 0]
      }
    };
  },
  computed: {

projectCards(){

let projectCard = []
console.log("cards")
console.log(this.$store.state.projects)

this.$store.state.projects.forEach((project) => {
	projectCard.push({
		title: project.name.toString(),
    news: 'to add',
		description: project.details,
		costs: String(project.hardwareCosts + project.installationCosts + project.planningCosts),
		expectedLifetime: project.predictedLifetime,
		pricePerKwH: String(project.priceKwh),
		power: String(project.power),
		energyEstimation: String(project.outcomePredictionSum),
		apy: project.apy,
		location: String(project.location)

	})
})

return projectCard
},
statsCards() {
	
      return [
		{
          title: this.$store.state.apy.toString(),
          subTitle: 'Average APY ',
          type: 'warning',
          icon: 'tim-icons icon-single-02',
        },
        {
          title: this.$store.state.tokenSupplyTotal.toString()+' USD',
          subTitle: 'Total Fund Size',
          type: 'info',
          icon: 'tim-icons icon-bulb-63',
        },
        {
          title: this.$store.state.tokenHolderTotal.toString(),
          subTitle: 'Investors',
          type: 'primary',
          icon: 'tim-icons icon-user-run',
        },
        {
          title: this.$store.state.numberOfProjects.toString(),
          subTitle: 'Total Solar Projects',
          type: 'danger',
          icon: 'tim-icons icon-spaceship',
        },
        {
          title: this.$store.state.totalEnergyGenerated.toString() + ' kwh',
          subTitle: 'Total Energy Generated',
          type: 'success',
          icon: 'tim-icons icon-trophy',
        },
        {
          title: this.$store.state.totalCO2Avoided.toString() + ' kg',
          subTitle: 'Total Co2',
          type: 'warning',
          icon: 'tim-icons icon-watch-time',
        }
		]
		},

    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {
	  
    
	  
    
		toggleText() {
			if (this.text == 'Show more projects') {
				this.text = 'Show fewer projects';
				this.showMore = true;
			} else {
				this.text = 'Show more projects'
				this.showMore = false;
			}
		}
  },
   async mounted() {


    
	  

let response = (await axios
    .get('https://ropsten.etherscan.io/token/generic-tokenholders2?a='+ address)).data
let tokenHolderTotal = Number(response.match(/(?<=A total of \s*).*?(?=\s*token holder)/gs)[0])

  this.$store.dispatch('getTokenHolderTotal', tokenHolderTotal)

	let projects = []

let projectAssetIDs = (await axios
    .get('https://acren.org/listProjectAssetIds.php')).data.metadata
let project;
let totalEnergyGenerated = 0
let energyTabData = [0,0,0,0,0,0]

function mod(n, m) {
  		return ((n % m) + m) % m;
	}
  await Promise.all(projectAssetIDs.projects.map(async (projectID) => {
    try {

	  let projetDetails = (await axios.get('https://acren.org/project_details.php')).data[0].asset.data //@todo: add projectID here


		project = {
		'assetID': projectID,
		'name': projetDetails.project_name,
		'beneficiary': projetDetails.beneficiary_id,
		'location': projetDetails.location,
		'planningCosts': projetDetails.planning_cost_in_USD,
		'hardwareCosts': projetDetails.hardware_cost_in_USD,
		'installationCosts': projetDetails.installation_cost_in_USD,
		'maintenanceCostsAnnually': projetDetails.annual_maintenance_cost_in_USD,
		'outcomePredictionFull': projetDetails.predicted_outcome_table,
		'power': projetDetails.system_power_in_kwp,
		'outcomePredictionSum': projetDetails.predicted_outcome_per_year_in_kwh,
		'priceKwh': projetDetails.fair_price_start_per_kwh_in_USD,
		'predictedLifetime': projetDetails.expected_lifetime_in_years,
		'apy': projetDetails.annual_percentage_yield,
		'details': projetDetails.details,
	}

	
	
  let lastTx = (await axios.get('https://acren.org/measurements.php')).data[0]//.metadata.summary.kwh_total //@todo: add projectID here
  totalEnergyGenerated += lastTx.metadata.summary.kwh_total 
	let kwhStatisticYear = lastTx.metadata.summary.kwh_by_year
	const yearToday = new Date().getUTCFullYear()
	const monthToday = new Date().getMonth()
	kwhStatisticYear.forEach((el)=>{
		
		if(el.year == yearToday){
			//@todo: create for-loop for this calculaions
			for(let i=0; i<6; i++){
				energyTabData[i] += el.kwh_by_month[mod((monthToday-(5-i)), el.kwh_by_month.length)].kwh

			}

		}
	})
		projects.push(project)
    } catch (error) {
      console.log('error'+ error);
    }
  }))



	this.$store.dispatch('addProjects', projects)

	
/**
 * @todo: These values should be gathered through projectlist and through iterating through list
 
*/
const apy = "6.17"
const totalCO2Avoided = (totalEnergyGenerated*0.6).toFixed(2)
	this.$store.dispatch('addNumberOfProjects', projects.length)
	this.$store.dispatch('addTotalEnergyGenerated', totalEnergyGenerated)
	this.$store.dispatch('addTotalCO2Avoided', totalCO2Avoided)
	this.$store.dispatch('addAPY', apy)


	this.$store.dispatch('setPendingProject', project)
	console.log(this.$store.state.pendingProject)

		  this.enegeryGeneratedChart.chartData = {
          labels: chartLabels,
          datasets: [
            {
              label: 'kWh generated up to this month by all projects',
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
              data: energyTabData
            }
		  ]}
		  


	 let dateArray=[] // Setting array with [0] => timestamp of beginning of 12 months ago, [1] => timestamo of beginning of month 11 months ago, ..
      for (let i=5; i >= 0; i--) {
	      let dt = new Date();
	      dt.setMonth(dt.getMonth()-i);
	      dt.setDate(1);
	      dt.setHours(0, 0, 0);
	      dt.setMilliseconds(0);
        dateArray.push({timestamp: dt, payouts:0})
    }

	if(this.$store.state.tokenSupplyTotal == 0){

 		const tokenSupply =  await this.$store.state.contractInstance().methods.totalSupply().call(); 
    	this.$store.dispatch('setTokenSupplyTotal', tokenSupply)
	}




	if(this.$store.state.beneficiaryPayout[0] == undefined){
		console.log("hier")
		let resultBeneficiaryPayout = await this.$store.state.contractInstance().getPastEvents("PaymentReceived",{
            	fromBlock: 1})
            	console.log("beneficiracy...")
                    console.log(resultBeneficiaryPayout)

    	let beneficiaryPayoutPayload = []
        	for await (let  beneficiaryPayoutEvent of resultBeneficiaryPayout) { //@todo: test with multiple purchasedEvents committed
        	beneficiaryPayoutPayload.push( {
                amountUSD: beneficiaryPayoutEvent.returnValues.amount, //@todo: has to be changed to new FundContract
                timestamp: (await this.$store.state.web3.web3Instance().eth.getBlock(beneficiaryPayoutEvent.blockNumber)).timestamp //@todo: improvement: check if ts could be added to contract to save alot of time here..
            })
		}
	  	this.$store.dispatch('beneficiaryPayoutEvents', beneficiaryPayoutPayload)
	}
	

console.log(9)

	let payouts = this.$store.state.beneficiaryPayout.map((b, idx) => Object.assign({ index: idx }, b));//JSON.parse('[{"amountUSD":"100","timestamp":1572998400},{"amountUSD":"100","timestamp":1575936000},{"amountUSD":"100","timestamp":1578182400}]')


	payouts.forEach((element, index) => {
		console.log(element.timestamp)
		console.log(dateArray[5].timestamp.getTime()/1000)
		switch(true){
            case (dateArray[0].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[1].timestamp.getTime()/1000): {dateArray[0].payouts += parseInt(element.amountUSD); break;}
            case (dateArray[1].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[2].timestamp.getTime()/1000): {dateArray[1].payouts += parseInt(element.amountUSD); break;}
            case (dateArray[2].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[3].timestamp.getTime()/1000): {dateArray[2].payouts += parseInt(element.amountUSD); break;}
            case (dateArray[3].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[4].timestamp.getTime()/1000): {dateArray[3].payouts += parseInt(element.amountUSD); break;}
            case (dateArray[4].timestamp.getTime()/1000 <= element.timestamp && element.timestamp< dateArray[5].timestamp.getTime()/1000): {dateArray[4].payouts += parseInt(element.amountUSD); break;}
                    case (element.timestamp > dateArray[5].timestamp.getTime()/1000): {dateArray[5].payouts += parseInt(element.amountUSD); break;}
		}

	})
	let payoutChart = [0,0,0,0,0,0]
	for(let i=0; i<6; i++){
		payoutChart[i] = this.$store.state.web3.web3Instance().utils.fromWei(dateArray[i].payouts.toString())
	}



	this.earningsChart.chartData ={
          labels: chartLabels,
          datasets: [
            {
              label: 'kWh generated up to this month by all projects',
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
              data: payoutChart
            }
          ]
        
	  },
	

	
  
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = 'ar';
      this.$rtl.enableRTL();
    }
    
  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = 'en';
      this.$rtl.disableRTL();
    }
  }
};
</script>

<style lang="scss">

</style>
