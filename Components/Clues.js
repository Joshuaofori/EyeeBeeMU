import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const Clues = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Vous nous avez fait jouer, maintenant à nous !
        {'\n'}
        Tentez de résoudre cette énigme pour parvenir à une petite surprise ;)
        {'\n'}
      </Text>
      <Text style={styles.text}>Indice X -&gt; .-- --... ....- -....</Text>
      <View style={styles.y_container}>
        <Text style={styles.text}>Indice Y -&gt; </Text>
        <Text
          style={styles.y_text}
          onLongPress={() => {
            setModalVisible(true);
          }}
        >
          42
        </Text>
      </View>
      <Text style={styles.text}>Indice Z -&gt; J3M2+M2 🐦 &apos;X&apos;+&apos;Y&apos; km</Text>
      <Modal
        style={styles.modal}
        isVisible={isModalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <View>
          <Text style={styles.text}>MP Paris</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#006699',
  },
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
    color: 'transparent',
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
