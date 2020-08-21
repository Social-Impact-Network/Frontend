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
          <h5 class="card-category">Total Token</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-coins"></i> 515,653
          </h3>
        </template>
        <div class="chart-area">
          <bar-chart
            style="height: 100%"
            :chart-data="blueBarChart.chartData"
            :gradient-stops="blueBarChart.gradientStops"
            :extra-options="blueBarChart.extraOptions"
          >
          </bar-chart>
        </div>
      </card>
    </div>

    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Total kWh generated</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-light-3"></i> 563,165
          </h3>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            :chart-data="purpleLineChart.chartData"
            :gradient-colors="purpleLineChart.gradientColors"
            :gradient-stops="purpleLineChart.gradientStops"
            :extra-options="purpleLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>

    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
      <card type="chart">
        <template slot="header">
          <h5 class="card-category">Total Profit in €</h5>
          <h3 class="card-title">
            <i class="tim-icons icon-money-coins"></i> 23,890
          </h3>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            :chart-data="greenLineChart.chartData"
            :gradient-stops="greenLineChart.gradientStops"
            :extra-options="greenLineChart.extraOptions"
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
								<i class="tim-icons icon-globe-2"></i>Armenia
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

			<!-- Big quadratic tabs with icons -->
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
			</div>

		</div>




			<div v-if="showMore">
				<div class="row">
				<!-- Big quadratic tabs with icons -->
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
import BarChart from 'src/components/Charts/BarChart.js';
import * as chartConfigs from 'src/components/Charts/config.js';
import TaskList from 'src/pages/Dashboard/TaskList.vue';
import UserTable from 'src/pages/Dashboard/UserTable.vue';
import CountryMapCard from 'src/pages/Dashboard/CountryMapCard.vue';
import StatsCard from 'src/components/Cards/StatsCard';
import config from '@/config';
import { TabPane, Tabs, Collapse, CollapseItem } from 'src/components';

let bigChartData = [
  [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
  [80, 120, 156, 222, 286, 380, 421, 409, 321, 231, 180, 133, 99]/* ,
  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130, 22] */
]
let bigChartLabels = [
  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  ["January '19", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', "January '20"],
  /* ['a','b','c','d','e','f','g','h','i','k','l','m','n'] */
]
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
	show: false,
	text: 'Show more projects',
  components: {
    LineChart,
    BarChart,
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
      statsCards: [
        {
          title: '3904',
          subTitle: 'Total members',
          type: 'warning',
          icon: 'tim-icons icon-single-02',
          /* footer: '<i class="tim-icons icon-notes"></i> Earning history' */
        },
        {
          title: '2478 kWh',
          subTitle: 'Your total generated energy',
          type: 'info',
          icon: 'tim-icons icon-bulb-63',
          /* footer: '<i class="tim-icons icon-satisfied"></i> Impact' */
        },
        {
          title: '37',
          subTitle: 'Total solar projects in operation',
          type: 'primary',
          icon: 'tim-icons icon-user-run',
          /* footer: '<i class="tim-icons icon-chart-bar-32"></i> Progression' */
        },
        {
          title: '23,93 kW ',
          subTitle: 'Current PV Power',
          type: 'danger',
          icon: 'tim-icons icon-spaceship',
          /*footer: '<i class="tim-icons icon-wallet-43"></i> Purchase history'*/
        },
        {
          title: '15 t',
          subTitle: 'Total Avoided CO2 ',
          type: 'success',
          icon: 'tim-icons icon-trophy',
          /*footer: '<i class="tim-icons icon-wallet-43"></i> Purchase history'*/
        },
        {
          title: '49 kg ',
          subTitle: 'Avoided CO2 for today ',
          type: 'warning',
          icon: 'tim-icons icon-watch-time',
          /*footer: '<i class="tim-icons icon-wallet-43"></i> Purchase history'*/
        }
      ],
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
      },
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
          datasets: [
            {
              label: 'kWh generated so far up to this month by all projects',
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
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
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
              data: [16421, 17780, 20390, 21750, 22720, 23890]
            }
          ]
        },
        gradientColors: [
          'rgba(66,134,121,0.15)',
          'rgba(66,134,121,0.0)',
          'rgba(66,134,121,0)'
        ],
        gradientStops: [1, 0.4, 0]
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
          datasets: [
            {
              label: 'Total Token up to this point',
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [428358, 443495, 463994, 482073, 504628, 515653]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      }
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return [
        { name: 'Earning (€)', icon: 'tim-icons icon-single-02' }, 
        { name: 'Energy (kwh)', icon: 'tim-icons icon-gift-2' }
      ];
    }
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

    }
  },
  mounted() {
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

<style lang="scss">

</style>
