import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { converToBAse, gettingNumber } from './algorithm/Algorithm';

export default function App() {
  // console.log(Algorithm.converToBAse(336546));
  // console.log(Algorithm.covertToAscii('https://pasteboard.co/074 065 051 049 084 077 048 046 112 110 103/'));
  // Algorithm.decodeImage();
  // console.log(gettingNumber('036695'));
  const value = gettingNumber('036695');
  console.log(value);
  console.log(converToBAse(336546));
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app!
        {/* {Algorithm.converToBAse(336546)}
        {Algorithm.covertToAscii('https://pasteboard.co/074 065 051 049 084 077 048 046 112 110 103/')}
        {Algorithm.findPassword(336546, 'https://eqrcode.co/a/RL7uJn')} */}
      </Text>
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
