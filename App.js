import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Reponse" component={ReponseScreen} />
        <Tab.Screen name="IBM Enigme" component={IBMenigmeScreen} />
        <Tab.Screen name="Notre Enigme" component={NotreEnigmeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
