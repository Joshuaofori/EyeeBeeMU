import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomNav, AppStatusBar,
} from './Components';

const THEME_COLOR = '#006699';

export default function App() {
  return (
    <NavigationContainer>
      <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
      <BottomNav />
    </NavigationContainer>
  );
}
