import React, { useState, useEffect } from 'react';
import {
  View, FlatList, RefreshControl, ScrollView,
} from 'react-native';
import MessageItem from './MessageItem';
import { getSession, delSession } from '../API';
import SendItem from './SendItem';

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const MessagingBox = () => {
  const [messages, setMessages] = useState([]);
  const [newSessionId, setNewSessionId] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [sessionId, setSessionId] = useState('');

  let isLoading = true;
  useEffect(() => {
    getSession().then((data) => {
      setSessionId(data);
    });
  }, []);
  if (sessionId) {
    isLoading = false;
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    delSession(newSessionId);
    getSession().then((data) => {
      setNewSessionId(data);
    });
    wait(100).then(() => setRefreshing(false));
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
      {isLoading ? (
        <ScrollView refreshControl={(
          <RefreshControl
            refreshing
          />
          )}
        />
      )
        : (
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
        )}

    </View>
  );
};

export default MessagingBox;
