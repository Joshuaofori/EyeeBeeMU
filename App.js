import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getSession, postMessage } from './API';

export default function App() {
  let isLoading = true;
  const sessionId = getSession();
  const botResponse = postMessage('hackaton', sessionId);
  if (botResponse) {
    isLoading = false;
  }
  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text>
        : (
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{botResponse}</Text>
        )}
      <StatusBar style={{ float: 'auto' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
