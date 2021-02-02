import DashboardLayout from 'src/pages/Layout/DashboardLayout.vue';
// GeneralViews
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue';

// Calendar

// Charts
const Charts = () =>
  import(/* webpackChunkName: "dashboard" */ 'src/pages/Charts.vue');


// Dashboard pages
const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ 'src/pages/Dashboard/Dashboard.vue');
import Widgets from 'src/pages/Widgets.vue';
import Admin from 'src/pages/Admin.vue';




// Pages

const TimeLine = () =>
  import(/* webpackChunkName: "pages" */ 'src/pages/Pages/TimeLinePage.vue');






let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  name: 'Pages',
  redirect: '/pages/user',
  children: [

    {
      path: 'timeline',
      name: 'Network Page',
      components: { default: TimeLine }
    }
  ]
};



const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home'
  },
  pagesMenu,
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Dashboard layout',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        components: { default: Dashboard }
      },
      {
        path: 'charts',
        name: 'Charts',
        components: { default: Charts }
      },
      {
        path: 'widgets',
        name: 'Buy token here',
        components: { default: Widgets }
      }
      ,
      {
        path: 'admin',
        name: 'Admin',
        components: { default: Admin }
      }
    ]
  },
  { path: '*', component: NotFound }
];

export default routes;
