import React, { useEffect, useState } from 'react';
import {
  ScrollView, View, RefreshControl,
} from 'react-native';
import { getSession } from './API';
import MessagingBox from './Components/MessagingBox';
import AppStatusBar from './Components/AppStatusBar';

const THEME_COLOR = '#006699';

export default function App() {
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
  return (
    <View>
      <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
      {isLoading ? (
        <ScrollView refreshControl={(
          <RefreshControl
            refreshing
          />
          )}
        />
      )
        : (
          <MessagingBox sessionId={sessionId} />
        )}
      <View />
    </View>
  );
}
