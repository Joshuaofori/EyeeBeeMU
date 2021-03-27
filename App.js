import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessagingBox from './Components/MessagingBox';
import AppStatusBar from './Components/AppStatusBar';
import Clues from './Components/Clues';
import PasswordChecker from './Components/PasswordChecker';

const THEME_COLOR = '#006699';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
      <Tab.Navigator>
        <Tab.Screen name="Messagerie" component={MessagingBox} />
        <Tab.Screen name="IBM Enigme (à venir)" component={PasswordChecker} />
        <Tab.Screen name="Notre Enigme" component={Clues} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
