import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class MessageItem extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <View style={styles.main_container}>
        <View style={styles.message_and_avatar_container}>
          <Text style={styles.message}>{message.content}</Text>
          <Image
            style={styles.image}
            source={{ uri: 'image' }}
          />
        </View>
        <View>
          <Text style={styles.timestamp}>
            Envoyé le
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
  message: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#4DA8DA',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 6,
    backgroundColor: '#4DA8DA',
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
    content: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
};

export default MessageItem;
