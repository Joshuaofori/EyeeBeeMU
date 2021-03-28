/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessagingBox from './MessagingBox';
import PasswordChecker from './PasswordChecker';
import Clues from './Clues';

const BACKGROUND_COLOR = '#FFF';
const ACTIVE_COLOR = '#006699';
const INACTIVE_COLOR = '#bababa';
const Tab = createBottomTabNavigator();

const BottomNav = () => (
  <Tab.Navigator
    initialRouteName="Messagerie"
    activeColor={ACTIVE_COLOR}
    inactiveColor={INACTIVE_COLOR}
    barStyle={{ backgroundColor: BACKGROUND_COLOR }}
  >
    <Tab.Screen
      name="Messagerie"
      component={MessagingBox}
      options={{
        tabBarLabel: 'Messagerie',
        tabBarIcon: ({ color }) => (
          <Icon name="mail-outline" size={26} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Enigme IBM"
      component={PasswordChecker}
      options={{
        tabBarLabel: 'Enigme IBM',
        tabBarIcon: ({ color }) => (
          <Icon name="map-outline" size={26} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notre énigme"
      component={Clues}
      options={{
        tabBarLabel: 'Notre énigme',
        tabBarIcon: ({ color }) => (
          <Icon name="golf-outline" size={26} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Mystère"
      component={PasswordChecker}
      options={{
        tabBarLabel: 'Mystère',
        tabBarIcon: ({ color }) => (
          <Icon name="keypad-outline" size={26} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNav;
