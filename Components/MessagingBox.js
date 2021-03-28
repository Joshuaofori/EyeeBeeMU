import React, { useState, useEffect } from 'react';
import {
  View, FlatList, RefreshControl, StyleSheet,
} from 'react-native';
import moment from 'moment';
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
    const today = new Date();
    const currentMessage = {
      id,
      sender,
      content,
      timestamp: moment(today).calendar(),
    };
    const botMessage = {
      id: secId,
      sender: secSender,
      content: secContent,
      timestamp: moment(today).calendar(),
    };
    const concat = [currentMessage, botMessage];
    setMessages(messages.concat(concat));
  };

  return (
    <View>
      {isLoading ? (
        <FlatList
        // inverted={-1}
          style={style.main_container}
          refreshControl={(
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

const style = StyleSheet.create({
  main_container: {
    marginBottom: 40,
  },
});

export default MessagingBox;
