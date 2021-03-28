import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

class MessageItem extends React.Component {
  render() {
    const { message } = this.props;
    let compo1;
    let compo2;
    const timeout = 'Mes alternateurs sont épuisés... Je vous conseille de me recharger en réinitialisant la session!';
    if (message.sender === 'bot') {
      if (message.content === undefined) {
        compo1 = <Text style={styles.botmessage}>{timeout}</Text>;
        compo2 = (
          <Icon
            name="heart-broken"
            color="#00aaff"
            size={50}
            style={styles.image}
            source={{ uri: 'image' }}
          />
        );
      } else {
        compo1 = <Text style={styles.botmessage}>{message.content}</Text>;
        compo2 = (
          <Icon
            name="robot"
            color="#00aaff"
            size={50}
            style={styles.image}
            source={{ uri: 'image' }}
          />
        );
      }
    } else {
      compo1 = (
        <Icon
          name="head-side-mask"
          color="#006699"
          size={55}
          style={styles.image}
          source={{ uri: 'image' }}
        />
      );
      compo2 = <Text style={styles.hummessage}>{message.content}</Text>;
    }
    return (
      <View style={styles.main_container}>
        <View style={styles.message_and_avatar_container}>
          {compo1}
          {compo2}
        </View>
        <View>
          <Text style={styles.timestamp}>
            {message.timestamp}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 25,
    flexDirection: 'column',
  },
  message_and_avatar_container: {
    flexDirection: 'row',
    margin: 5,
  },
  botmessage: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#00aaff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 6,
    backgroundColor: '#00aaff',
    fontWeight: 'bold',
    color: 'white',
  },
  hummessage: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#006699',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 6,
    backgroundColor: '#006699',
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    aspectRatio: 1,
  },
  timestamp: {
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 10,
  },
});

MessageItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    content: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
};

export default MessageItem;
