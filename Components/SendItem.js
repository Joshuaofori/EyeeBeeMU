import React, { useState } from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import ConfettiCannon from 'react-native-confetti-cannon';
import { postMessage } from '../API';

let increment = 0;
let nextIncrement = 1;
let first = true;

const SendItem = (props) => {
  const [inputMessage, setInputMessage] = useState('');
  const [hasFound, setFound] = useState(false);

  const sendMessageAndGetResponse = (message) => {
    const { sessionId, addMessage } = props;
    postMessage(sessionId, message).then((data) => {
      addMessage(increment, 'hooman', message, nextIncrement, 'bot', data);
      setFound(false);
      if (data === 'Toutes mes félicitations! Vous avez trouvé la solution! Vous êtes vraiment très forts. Quel est le nom de votre équipe pour enregistrer votre résultat?') {
        setFound(true);
        setTimeout(() => {
          setFound(false);
        }, 4000);
      }
    });
    setInputMessage('');
    increment += 2;
    nextIncrement += 2;
  };

  if (first) {
    sendMessageAndGetResponse('Bonjour');
    first = false;
  }
  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.message_container}
        value={inputMessage}
        onChangeText={(value) => setInputMessage(value)}
        placeholder="Votre message"
      />
      <Button style={styles.send_button} title="Send" onPress={() => sendMessageAndGetResponse(inputMessage)} />
      {hasFound && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          explosionSpeed={0}
          fallSpeed={3000}
          fadeOut
        />
      )}
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
