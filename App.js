import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import MessageItem from './Components/MessageItem';
import SendItem from './Components/SendItem';
import messages from './Helpers/messageData';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MessageItem message={item} />}
        />
        <SendItem />
      </View>
    );
  }
}
