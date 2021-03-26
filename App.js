import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getSession } from './API';
import MessagingBox from './Components/MessagingBox';

export default function App() {
  let isLoading = true;
  const [sessionId, setSessionId] = useState('');
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
      {isLoading ? <Text>Loading...</Text>
        : (
          <MessagingBox sessionId={sessionId} />
        )}
    </View>
  );
}
