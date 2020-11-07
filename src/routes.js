import React from 'react';
import CallerId from './views/CallerId/CallerId';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const User = React.lazy(() => import('./views/Users/User'));


// Application Routes
const CreateCampaign = React.lazy(() => import('./views/Campaign/CreateCampaign'));
const CampaignHistory = React.lazy(() => import('./views/Campaign/CampaignHistory'));
const PayForCampaign = React.lazy(() => import('./views/Campaign/CampaignPayment'));
const Profile = React.lazy(() => import('./views/Profile/Profile'));
const UserTransactionHistory = React.lazy(() => import('./views/Transaction/TransactionHistory'));
const AdminTransactionHistory = React.lazy(() => import('./views/Transaction/AdminTransactionHistory'));
const AdminCampaignHistory = React.lazy(()=>import('./views/Campaign/AdminCampaignHistory'))
const AdminUsers = React.lazy(() => import('./views/Users/Users'));
const AdminCallerIds = React.lazy(() => import('./views/CallerId/CallerId'));

const routes = [

  // Custom routes
  {path: '/campaign/create', name: 'Create a Campaign', component: CreateCampaign},
  {path: '/campaign/history', name: 'Campaign History', component: CampaignHistory},
  {path: '/campaign/pay', name: 'Pay for Campaign', component: PayForCampaign},
  {path: '/dashboard', name: 'Dashboard', component: CreateCampaign},
  {path: '/profile', name: 'Profile', component: Profile},
  {path: '/transaction/history', name: 'Transaction History', component: UserTransactionHistory},

  // Admin panel pages
  {path: '/admin/transactions', name: 'System Transactions', component: AdminTransactionHistory},
  {path: '/admin/campaigns', name: 'System Campaigns', component: AdminCampaignHistory},
  {path: '/admin/users', name: 'System Users', component: AdminUsers},
  {path: '/admin/caller-id', name: 'System Caller IDs', component: CallerId},

  {path: '/admin/test', name: 'System Caller IDs', component: Tables},

];

export default routes;
