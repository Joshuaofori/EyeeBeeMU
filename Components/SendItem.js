import React from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { postMessage } from '../API';

let inputMessage;

class SendItem extends React.Component {
 setInputMessage = (text) => {
   inputMessage = text;
 }

 render() {
   const { sessionId } = this.props;
   return (
     <View style={styles.main_container}>
       <TextInput style={styles.message_container} placeholder="Your message..." onChangeText={(text) => this.setInputMessage(text)} />
       <Button style={styles.send_button} title="Send" onPress={() => sendMessageAndGetResponse(inputMessage, sessionId)} />
     </View>
   );
 }
}

const sendMessageAndGetResponse = (message, sessionId) => {
  postMessage(sessionId, message).then((data) => {
    console.log(data);
  });
};

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

SendItem.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default SendItem;
