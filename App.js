import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  MessagingBox, Clues, PasswordChecker, AppStatusBar,
} from './Components';

const THEME_COLOR = '#006699';
const COLOR = '#FFFFFF';
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff" // couleur text cliqué black
      inactiveColor="#006699"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#000000' }} // ?
      barStyle={{ backgroundColor: '#006699', paddingBottom: 0 }} // couleur barre, remonter barre 0 pixels
    >
      <Tab.Screen
        name="Feed"
        component={MessagingBox}
        options={{
          tabBarColor: 'green',
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cube" color={COLOR} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PasswordChecker}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="bell" color={COLOR} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Clues}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={COLOR} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
      <MyTabs />
    </NavigationContainer>
  );
}
