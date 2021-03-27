import React, { useState } from 'react';
import {
  View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import SendItem from './SendItem';

const MessagingBox = (props) => {
  const [messages, setMessages] = useState([]);
  const { sessionId } = props;

  const addMessage = (id, sender, content, secId, secSender, secContent) => {
    const currentMessage = {
      id,
      sender,
      content,
      timestamp: ' 24/03/2021 à 19h48',
    };
    const botMessage = {
      id: secId,
      sender: secSender,
      content: secContent,
      timestamp: ' 24/03/2021 à 19h49',
    };
    const concat = [currentMessage, botMessage];
    setMessages(messages.concat(concat));
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MessageItem message={item} />}
      />
      <SendItem sessionId={sessionId} addMessage={addMessage} />
    </View>
  );
};

MessagingBox.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default MessagingBox;
