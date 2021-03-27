import React, { useState } from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { postMessage } from '../API';

let increment = 0;
let nextincrement = 1;
let first = true;

const SendItem = (props) => {
  const [inputMessage, setInputMessage] = useState('');

  const sendMessageAndGetResponse = (message) => {
    const { sessionId, addMessage } = props;
    postMessage(sessionId, message).then((data) => {
      addMessage(increment, 'hooman', message, nextincrement, 'bot', data);
    });
    setInputMessage('');
    increment += 2;
    nextincrement += 2;
  };

  if (first) {
    sendMessageAndGetResponse('Bonjour');
    first = false;
  }
  return (
    <View style={styles.main_container}>
      <TextInput
        type="messageInput"
        style={styles.message_container}
        value={inputMessage}
        onChangeText={(value) => setInputMessage(value)}
        placeholder="Votre message"
      />
      <Button style={styles.send_button} title="Send" onPress={() => sendMessageAndGetResponse(inputMessage)} />
    </View>
  );
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
  addMessage: PropTypes.func.isRequired,
};

export default SendItem;
