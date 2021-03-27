import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const [isModalVisible, setModalVisible] = useState(false);

const Clues = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Indice X : ⠨⠺⠠⠻⠠⠹⠠⠫</Text>
    <View style={styles.y_container}>
      <Text style={styles.text}>Indice Y : </Text>
      <Text
        style={styles.y_text}
        onLongPress={() => {
          setModalVisible(true);
        }}
      >
        42
      </Text>
    </View>
    <Text style={styles.text}>Indice Z : J3M2+M2 🐦 `X`+`Y` km</Text>
    <Modal
      style={styles.modal}
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
    >
      <View>
        <Text style={styles.text}>MP</Text>
      </View>
    </Modal>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  y_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  y_text: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 2,
    color: 'white',
    fontSize: 20,
  },
  modal: {
    backgroundColor: 'white',
    maxHeight: 100,
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    lineHeight: 50,
    fontSize: 20,
  },
});

export default Clues;
