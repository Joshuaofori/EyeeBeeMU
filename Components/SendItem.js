import React from 'react';
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import ConfettiCannon from 'react-native-confetti-cannon';
import { postMessage } from '../API';

let inputMessage;

class SendItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFound: false,
    };
  }

  setInputMessage = (text) => {
    inputMessage = text;
  }

  sendMessageAndGetResponse = (message, sessionId) => {
    postMessage(sessionId, message).then((data) => {
      console.log(data);
      this.setState({ hasFound: false });
      if (data === 'Toutes mes félicitations! Vous avez trouvé la solution! Vous êtes vraiment très forts. Quel est le nom de votre équipe pour enregistrer votre résultat?') {
        this.setState({ hasFound: true });
      }
    });
  };

  render() {
    const { sessionId } = this.props;
    const { state } = this;
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.message_container} placeholder="Your message..." onChangeText={(text) => this.setInputMessage(text)} />
        <Button style={styles.send_button} title="Send" onPress={() => this.sendMessageAndGetResponse(inputMessage, sessionId)} />
        {state.hasFound && (
          <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
        )}
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

SendItem.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default SendItem;
