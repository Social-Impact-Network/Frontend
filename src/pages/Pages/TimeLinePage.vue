<template>
  <div class="row">

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
          <h3 class="card-title">Earnings (USD)</h3>
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
      <!--<stats-card
        :title="card.title"
        :sub-title="card.subTitle"
        :type="card.type"
        :icon="card.icon"
        :claimButtonShow="card.claimButtonShow"
        :claimButtonDisable="card.claimButtonDisable"
        :buyToken="card.buyToken"
      > 
      </stats-card>-->
    
				
				<!--<card>
					<template slot="header">
						<h3 class="card-title">CAHL - Armenian Elderly Home (Active)</h3>
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
							Collaboratively administrate empowered markets via plug-and-play
							networks. Dynamically procrastinate B2C users after installed base
							benefits.
						</tab-pane>
						<tab-pane>
							<span slot="label">
								<i class="tim-icons icon-globe-2"></i>News
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
							Collaboratively administrate empowered markets via plug-and-play
							networks. Dynamically procrastinate B2C users after installed base
							benefits.

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
				</card>-->
			</div>

			 <!-- Big quadratic tabs with icons 
			<div class="col-md-6">
				<card>
					<template slot="header">
						<h3 class="card-title">UNDP Country Office (Proposed)</h3>
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
							Collaboratively administrate empowered markets via plug-and-play
							networks. Dynamically procrastinate B2C users after installed base
							benefits.

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
			</div>--->

		</div>



			<!--
			<div v-if="showMore">
				<div class="row">
			<div class="col-md-6">
				<card>
					<template slot="header">
						<h3 class="card-title">Project #3</h3>
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
								<i class="tim-icons icon-globe-2"></i>Home
							</span>
							Collaboratively administrate empowered markets via plug-and-play
							networks. Dynamically procrastinate B2C users after installed base
							benefits.
						</tab-pane>

						<tab-pane>
							<span slot="label">
								<i class="tim-icons icon-notes"></i>Details
							</span>
							Collaboratively administrate empowered markets via plug-and-play
							networks. Dynamically procrastinate B2C users after installed base
							benefits.
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

				<div class="col-md-6">
					<card>
						<template slot="header">
							<h3 class="card-title">Project #4</h3>
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
								<i class="tim-icons icon-globe-2"></i>Home
							</span>
								Collaboratively administrate empowered markets via plug-and-play
								networks. Dynamically procrastinate B2C users after installed base
								benefits. <br /><br />
								Dramatically visualize customer directed convergence without
								revolutionary ROI.
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
		
		</div>-->

		<div class="col-md-6 ml-auto mr-auto">
			<div class="width: 100%">
				<base-button type="primary" class="btn btn-block" @click="toggleText">{{ text }}</base-button>
			</div>
		</div>
    
  </div>
</template>
<script>
import LineChart from 'src/components/Charts/LineChart.js';
import BarChart from 'src/components/Charts/BarChart.js';
import * as chartConfigs from 'src/components/Charts/config.js';
import TaskList from 'src/pages/Dashboard/TaskList.vue';
import UserTable from 'src/pages/Dashboard/UserTable.vue';
import CountryMapCard from 'src/pages/Dashboard/CountryMapCard.vue';
import StatsCard from 'src/components/Cards/StatsCard';
import config from '@/config';
import { TabPane, Tabs, Collapse, CollapseItem } from 'src/components';
import axios from 'axios'
import {address} from '../../util/constants/fundContract'

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
    CollapseItem
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
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [0, 0, 0, 0, 0, 0]
            }
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
	/*console.log("hier")
	console.log(this.$store.state.projects)*/
let projectCard = []

this.$store.state.projects.forEach((project) => {
	projectCard.push({
		title: project.name.toString(),
        news: 'to add ',
		description: 'to add',
		details: 'to add',
		costs: String(project.hardwareCosts + project.installationCosts + project.planningCosts),
		expectedLifetime: 'to add',
		pricePerKwH: String(project.priceKwh),
		power: String(project.power),
		energyEstimation: String(project.outcomePredictionSum),
		apy: 'to add',
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
          title: this.$store.state.totalEnergyGenerated.toString(),
          subTitle: 'Total Energy Generated',
          type: 'success',
          icon: 'tim-icons icon-trophy',
        },
        {
          title: this.$store.state.totalCO2Avoided.toString(),
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
	  updateChart(){
		  
	
	  },
    
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
	  let tokenHolderTotal = Number(response.match(/(?<=A total of \s*).*?(?=\s*token holders)/gs)[0])
	this.$store.dispatch('getTokenHolderTotal', tokenHolderTotal)
	let projects = []

let projectAssetIDs = (await axios
	  .get('https://acren.org/listProjectAssetIds.php')).data.metadata

//@todo: add some validation (check if its the correct asset)
projectAssetIDs.projects.forEach(function(projectID)
	{  
	projects.push({ 'id': projectID})
	}
)
//foreach project

//@todo: add some validation (check if its the correct asset)

	let projetDetails = (await axios.get('https://acren.org/project_details.php')).data[0].asset.data
	let project = projects[0]
	let projetAssetID = "c75a967f437b9b66fcaf3064b5e800fa7dd62fd098f4865aaa6e87fdb8647e89"
	project = {
		'assetID': projetAssetID,
		'name': projetDetails.project_name,
		'beneficiary': projetDetails.beneficiary_id,
		'location': projetDetails.location,
		'planningCosts': projetDetails.planning_cost_in_USD,
		'hardwareCosts': projetDetails.hardware_cost_in_USD,
		'installationCosts': projetDetails.installation_cost_in_USD,
		'maintenanceCostsAnnually': projetDetails.annual_maintenance_cost_in_USD,
		'outcomePredictionFull': projetDetails.predicted_outcome_table,
		'power': projetDetails.system_power_in_kWp,
		'outcomePredictionSum': projetDetails.predicted_outcome_per_year_in_kWh,
		'priceKwh': projetDetails.fair_price_start_per_kWh_in_USD
	}
/**
 * @todo: These values should be gathered through projectlist and through iterating through list
 */
const apy = 500
const totalEnergyGenerated = 500
const totalCO2Avoided = 500
	this.$store.dispatch('addNumberOfProjects', projects.length)
	this.$store.dispatch('addTotalEnergyGenerated', totalEnergyGenerated)
	this.$store.dispatch('addTotalCO2Avoided', totalCO2Avoided)
	this.$store.dispatch('addAPY', apy)

	this.$store.dispatch('addProject', project)
	this.$store.dispatch('addProject', project)
	this.$store.dispatch('setPendingProject', project)
	console.log(this.$store.state.pendingProject)

		  this.enegeryGeneratedChart.chartData = {
          labels: ['Auu', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
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
              data: [107416, 115055, 126064, 134793, 143798, 156786]
            }
          ]}


	  
  
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = 'ar';
      this.$rtl.enableRTL();
    }
    //this.initBigChart(0);
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
