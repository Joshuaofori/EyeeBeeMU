import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import PinView from 'react-native-pin-view';

const PasswordChecker = () => {
  const pinView = useRef(null);
  const [enteredPin, setEnteredPin] = useState('');
  return (
    <View style={styles.main_container}>
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
          backgroundColor: 'black',
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
            if (parseInt(enteredPin, 10) === (2 * (100000000000000 / 1000000000000))) {
              alert('Bonne réponse, bravo mais tu te calmes');
            }
          }
        }}
        customLeftButton={<Icon name="close-circle-outline" style={styles.left_icon} size={65} color="#FFF" />}
        customRightButton={<Icon name="checkmark-circle-outline" style={styles.right_icon} size={65} color="#FFF" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left_icon: {
    color: 'red',
  },
  right_icon: {
    color: 'green',
  },
});

export default PasswordChecker;
