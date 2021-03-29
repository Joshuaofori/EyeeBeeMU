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
    <View>
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
          <View>
            <FlatList
              ref={flatlistRef}
              onContentSizeChange={() => flatlistRef.current.scrollToEnd({ animated: true })}
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
            <SendItem sessionId={sessionId} addMessage={addMessage} />
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
