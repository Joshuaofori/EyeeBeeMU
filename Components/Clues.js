import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

const Clues = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Il semble que l&apos;application propose une &eacute;nigme !
        {'\n'}
        Saurez-vous la r&eacute;soudre ?
        {'\n'}
      </Text>
      <Text style={styles.text}>Indice X :</Text>
      <Text> .-- --... ....- -....</Text>
      <TextInput
        placeholder="Vous pouvez indiquer votre réponse ici"
      />
      <Text style={styles.text}>
        {'\n'}
        Indice Y :
      </Text>
      <View style={styles.y_container}>
        <Text
          style={styles.y_text}
          onLongPress={() => {
            setModalVisible(true);
          }}
        >
          42
        </Text>
      </View>
      <TextInput
        placeholder="Vous pouvez indiquer votre réponse ici"
      />
      <Text style={styles.text}>
        {'\n'}
        Indice Z :
      </Text>
      <Text>
        J3M2+M2 🐦 &apos;X&apos;+&apos;Y&apos; km
      </Text>
      <TextInput
        placeholder="Vous pouvez indiquer votre réponse ici"
      />
      <Text>
        {'\n'}
        Vous pensez avoir trouv&eacute; la solution?
        {'\n'}
        Allez vite sur la page &rdquo;Myst&egrave;re&rdquo; pour v&eacute;rifier!
      </Text>
      <Modal
        style={styles.modal}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
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
