import React from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';

class SendItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.message_container} placeholder="Your message..." />
        <Button style={styles.send_button} title="Send" onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  message_container: {
    flex: 8,
    backgroundColor: 'white',
  },
  send_button: {
    flex: 1,
  },
});

export default SendItem;
