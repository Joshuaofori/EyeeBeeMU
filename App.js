import React, { useEffect, useState } from 'react';
import {
  ScrollView, View, RefreshControl, Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getSession } from './API';
import MessagingBox from './Components/MessagingBox';
import AppStatusBar from './Components/AppStatusBar';

const THEME_COLOR = '#006699';
const Tab = createBottomTabNavigator();

export default function App() {
  const [sessionId, setSessionId] = useState('');
  let isLoading = true;
  useEffect(() => {
    getSession().then((data) => {
      setSessionId(data);
    });
  }, []);
  if (sessionId) {
    isLoading = false;
  }
  return (
    <View>
      <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
      {isLoading ? (
        <ScrollView refreshControl={(
          <RefreshControl
            refreshing
          />
          )}
        />
      )
        : (
          <MessagingBox sessionId={sessionId} />
        )}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Reponse" component={ReponseScreen} />
          <Tab.Screen name="IBM Enigme" component={IBMenigmeScreen} />
          <Tab.Screen name="Notre Enigme" component={NotreEnigmeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

function ReponseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>quel est ta reponse?</Text>
    </View>
  );
}

function IBMenigmeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Voici ibm enigme!</Text>
    </View>
  );
}

function NotreEnigmeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Voici notre enigme!</Text>
    </View>
  );
}
