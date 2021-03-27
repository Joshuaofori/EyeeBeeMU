import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

// eslint-disable-next-line react/prop-types
const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, backgroundColor]}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

const BAR_HEIGHT = 0;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

export default AppStatusBar;
