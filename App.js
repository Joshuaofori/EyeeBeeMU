import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MessagingBox, AppStatusBar, Clues, PasswordChecker,
} from './Components';

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
