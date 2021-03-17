// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import Homepage from "views/Homepage/Homepage.js";
import Aboutus from '../src/components/Card/Aboutus'
import Access from '../src/components/Card/Access'
import Learn from './components/Card/Learn'
import Machine from "./components/Card/machine"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/access",
    name: "Access",
    icon: Person,
    component: Access,
    layout: "/admin"
  },
  {
    path: "/learn",
    name: "Learn",
    icon: Person,
    component: Learn,
    layout: "/admin"
  },
  {
    path: "/machine",
    name: "Machine",
    icon: Person,
    component: Machine,
    layout: "/admin"
  },


  {
    path: "/about",
    name: "About us",
    icon: Person,
    component: Aboutus,
    layout: "/admin"
  },



  // {
  //   path: "/notification",
  //   name: "Notification",
  //   icon: Language,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
