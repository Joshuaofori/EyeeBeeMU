import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import {
  View, FlatList, RefreshControl, StyleSheet,
} from 'react-native';
import moment from 'moment';
import MessageItem from './MessageItem';
import { getSession, delSession } from '../API';
import SendItem from './SendItem';

const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const MessagingBox = () => {
  const flatlistRef = useRef();
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    delSession(sessionId);
    getSession().then((data) => {
      setSessionId(data);
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
    <View style={style.main}>
      {isLoading ? (
        <FlatList
          style={style.main_container}
          refreshControl={(
            <RefreshControl
              refreshing
            />
          )}
        />
      )
        : (
          <View style={style.main}>
            <FlatList
              style={style.main_container}
              ref={flatlistRef}
              onContentSizeChange={() => flatlistRef.current.scrollToEnd({ animated: true })}
              onLayout={() => flatlistRef.current.scrollToEnd({ animated: true })}
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
            <SendItem style={style.send_item} sessionId={sessionId} addMessage={addMessage} />
          </View>
        )}

    </View>
  );
};

const style = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
  main_container: {
    marginBottom: 40,
  },
  send_item: {
    justifyContent: 'flex-end',
  },
});

export default MessagingBox;
