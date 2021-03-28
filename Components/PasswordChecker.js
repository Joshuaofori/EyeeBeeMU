import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import PinView from 'react-native-pin-view';
import Mystery from './Mystery';

const PasswordChecker = () => {
  const pinView = useRef(null);
  const [enteredPin, setEnteredPin] = useState('');
  const [hasFound, setHasFound] = useState(false);

  return (
    <View style={styles.main_container}>
      {hasFound ? (
        <Mystery />
      ) : (
        <PinView
          ref={pinView}
          pinLength={3}
          buttonSize={60}
          onValueChange={(value) => setEnteredPin(value)}
          inputViewEmptyStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'black',
          }}
          inputViewFilledStyle={{
            size: 10,
            backgroundColor: '#006699',
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: 'black',
          }}
          buttonTextStyle={{
            color: 'black',
          }}
          onButtonPress={(key) => {
            if (key === 'custom_left') {
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              if (parseInt(enteredPin, 10) === (2 * (100000000000000 / 1000000000000))
              || parseInt(enteredPin, 10) === (16 * (1200000000000000 / 100000000000000) + 9)) {
                setHasFound(true);
              }
            }
          }}
          customLeftButton={<Icon name="close-circle-outline" size={65} color="#006699" />}
          customRightButton={<Icon name="checkmark-circle-outline" size={65} color="#006699" />}
        />
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PasswordChecker;
