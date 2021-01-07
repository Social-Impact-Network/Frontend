<template>
  <div class="row">
	<base-button  @click="updateChart()">test</base-button>

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
			<div class="col-md-6">
				<card>
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
				</card>
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


statsCards() {

      return [
		{
          title: 'todo',
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
          title: 'todo ',
          subTitle: 'Total Solar Projects',
          type: 'danger',
          icon: 'tim-icons icon-spaceship',
        },
        {
          title: 'todo t',
          subTitle: 'Total Energy Generated',
          type: 'success',
          icon: 'tim-icons icon-trophy',
        },
        {
          title: 'todo kg ',
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
let projectAssetIDs = (await axios
	  .get('https://test.ipdb.io/api/v1/transactions?asset_id=fa1896a2c9cb0e118de2ba46b6fcf1f5f291a33f05f7c97f988399040f3a3e06')).data
console.log(projectAssetIDs)
	let projects = []
	projectAssetIDs.forEach(function(projectIDs){
		if(projectIDs.operation === "TRANSFER"){

  	projects.push({ 'id': projectIDs.asset.id
	  });
		}
	});
	console.log(projects)
	/*let projectJSON = JSON.parse('[{"inputs": [{"owners_before": ["A7uDV4NCPM4yMqhiZauXL6zygQivnXbyLXh93UWEQVFQ"], "fulfills": null, "fulfillment": "pGSAIId9tQewYLCMP3uLO8Gya6HoqacrTpd_aYRlxIHOki97gUCkmFPpC2F9TBvRdoR8ORp8VtMNBHh4OFfmt8DTEiwqElb4oaijCqIFxIwojm_FTugb78lZGUHlVXEfU-tYsEID"}], "outputs": [{"public_keys": ["A7uDV4NCPM4yMqhiZauXL6zygQivnXbyLXh93UWEQVFQ"], "condition": {"details": {"type": "ed25519-sha-256", "public_key": "A7uDV4NCPM4yMqhiZauXL6zygQivnXbyLXh93UWEQVFQ"}, "uri": "ni:///sha-256;XGsbC5wzJH4wEOmCjaAn4UDly2Fj84otVl7Vf1fz9W8?fpt=ed25519-sha-256&cost=131072"}, "amount": "1"}], "operation": "CREATE", "metadata": {"1564682400000": {"date": "2019-august-01", "time": "20:00:00", "event": "CREATE"}}, "asset": {"data": {"timestamp": 1564682400000, "date": "2019-august-01", "time": "20:00:00", "project_name": "Project_name_here", "beneficiary_id": "Beneficiary_here", "location": "Address_here", "system_power_in_kWp": 135, "planning_cost_in_USD": 3000, "hardware_cost_in_USD": 100000, "installation_cost_in_USD": 23000, "predicted_outcome_per_year_in_kWh": 197500, "riskmanagement_deviation_in_percent": 10, "degradation_in_percent": 0.5, "fair_price_start_per_kWh_in_USD": 0.15, "price_adjustment_per_year_in_percent": 101, "annual_maintenance_cost_in_USD": 3969, "cf_discount_rate_in_percent": 5, "predicted_outcome_table": {"year_01": {"january": 14813, "february": 14813, "march": 14813, "april": 14813, "may": 14813, "june": 14813, "july": 14813, "august": 14813, "september": 14813, "october": 14813, "november": 14813, "december": 14813}, "year_02": {"january": 14730, "february": 14730, "march": 14730, "april": 14730, "may": 14730, "june": 14730, "july": 14730, "august": 14730, "september": 14730, "october": 14730, "november": 14730, "december": 14730}, "year_03": {"january": 14647, "february": 14647, "march": 14647, "april": 14647, "may": 14647, "june": 14647, "july": 14647, "august": 14647, "september": 14647, "october": 14647, "november": 14647, "december": 14647}, "year_04": {"january": 14565, "february": 14565, "march": 14565, "april": 14565, "may": 14565, "june": 14565, "july": 14565, "august": 14565, "september": 14565, "october": 14565, "november": 14565, "december": 14565}, "year_05": {"january": 14483, "february": 14483, "march": 14483, "april": 14483, "may": 14483, "june": 14483, "july": 14483, "august": 14483, "september": 14483, "october": 14483, "november": 14483, "december": 14483}, "year_06": {"january": 14401, "february": 14401, "march": 14401, "april": 14401, "may": 14401, "june": 14401, "july": 14401, "august": 14401, "september": 14401, "october": 14401, "november": 14401, "december": 14401}, "year_07": {"january": 14318, "february": 14318, "march": 14318, "april": 14318, "may": 14318, "june": 14318, "july": 14318, "august": 14318, "september": 14318, "october": 14318, "november": 14318, "december": 14318}, "year_08": {"january": 14236, "february": 14236, "march": 14236, "april": 14236, "may": 14236, "june": 14236, "july": 14236, "august": 14236, "september": 14236, "october": 14236, "november": 14236, "december": 14236}, "year_09": {"january": 14154, "february": 14154, "march": 14154, "april": 14154, "may": 14154, "june": 14154, "july": 14154, "august": 14154, "september": 14154, "october": 14154, "november": 14154, "december": 14154}, "year_10": {"january": 14071, "february": 14071, "march": 14071, "april": 14071, "may": 14071, "june": 14071, "july": 14071, "august": 14071, "september": 14071, "october": 14071, "november": 14071, "december": 14071}}}}, "version": "2.0", "id": "c75a967f437b9b66fcaf3064b5e800fa7dd62fd098f4865aaa6e87fdb8647e89"}]')
	let project = {
		//'assetID': projectJSON[0].
		'name': projectJSON[0].asset.data.project_name,
		'beneficiary': projectJSON[0].asset.data.beneficiary_id,
		'location': projectJSON[0].asset.data.location,
		'planning_cost_in_USD': projectJSON[0].asset.data.planning_cost_in_USD,
		'hardware_cost_in_USD': projectJSON[0].asset.data.hardware_cost_in_USD,
		'installation_cost_in_USD': projectJSON[0].asset.data.installation_cost_in_USD,
		'annual_maintenance_cost_in_USD': projectJSON[0].asset.data.annual_maintenance_cost_in_USD,
		'prediction': projectJSON[0].asset.data.project_name.predicted_outcome_table
	}
	this.$store.dispatch('addProject', project)*/


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
