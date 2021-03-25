import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { getSession, postMessage } from './API';
import MessageItem from './Components/MessageItem';
import SendItem from './Components/SendItem';
import messages from './Helpers/messageData';

export default function App() {
  let isLoading = true;
  const sessionId = getSession();
  const botResponse = postMessage('hackaton', sessionId);
  if (botResponse) {
    isLoading = false;
  }
  return (
    <View>
      {isLoading ? <Text>Loading...</Text>
        : (
          <View>
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MessageItem message={item} />}
            />
            <SendItem />
          </View>
        )}
    </View>
  );
}
