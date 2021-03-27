import React, { useState } from 'react';
import {
  View, FlatList, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import { getSession, delSession } from '../API';
import SendItem from './SendItem';

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const MessagingBox = (props) => {
  const [messages, setMessages] = useState([]);
  const { sessionId } = props;
  const [newSessionId, setNewSessionId] = useState('');

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    delSession(newSessionId);
    getSession().then((data) => {
      setNewSessionId(data);
    });
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
        data={messages}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MessageItem message={item} />}
      />
      {newSessionId === '' ? (
        <SendItem sessionId={sessionId} addMessage={addMessage} />
      ) : (
        <SendItem sessionId={newSessionId} addMessage={addMessage} />
      )}
    </View>
  );
};

MessagingBox.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default MessagingBox;
