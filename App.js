import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://nodejs-express-app-cxlkb-2020-11-30.eu-gb.mybluemix.net/ai/session')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    fetch('https://nodejs-express-app-cxlkb-2020-11-30.eu-gb.mybluemix.net/ai', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: data.response,
        reqText: 'Palais Rameau',
      }),
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text>
        : (
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.response}</Text>
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
