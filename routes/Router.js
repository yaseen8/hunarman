import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import Home from '../src/screens/Home';
import Notifications from '../src/screens/Notifications';
import Jobs from '../src/screens/Jobs';
import Setting from '../src/screens/Setting';
import Landing from '../src/screens/Landing';
import SignIn from '../src/screens/SignIn';
import SideMenu from '../src/screens/Drawer';

const AuthRoute = createStackNavigator(
  {
    Landing: {screen: Landing},
    SignIn: {screen: SignIn},
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none',
  },
);
const DEVICE_WIDTH = Dimensions.get('window').width;
const AppRoute = createDrawerNavigator(
  {
    Home: {screen: Home},
    Jobs: {screen: Jobs},
    Notifications: {screen: Notifications},
    Setting: {screen: Setting},
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideMenu,
  },
);
const MainNavigation = createSwitchNavigator(
  {
    Auth: AuthRoute,
    App: AppRoute,
  },
  {
    initialRouteName: 'Auth',
  },
);
const Router = createAppContainer(MainNavigation);

export default Router;
