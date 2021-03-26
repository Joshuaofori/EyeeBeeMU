import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import SendItem from './SendItem';
import messages from '../Helpers/messageData';

class MessagingBox extends React.Component {
  render() {
    const { sessionId } = this.props;
    return (
      <View>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MessageItem message={item} />}
        />
        <SendItem sessionId={sessionId} />
      </View>
    );
  }
}

MessagingBox.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default MessagingBox;
