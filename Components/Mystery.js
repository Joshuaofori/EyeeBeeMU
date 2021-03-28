import React, { useState } from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';
import MysteryPDF from './MysteryPDF';

const widthProportion = '100%';
const heightProportion = '100%';

const Mystery = () => {
  const [url, setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/hackathon-ibm-f05ae.appspot.com/o/CV_Botman_Pierre.pdf?alt=media&token=708b2118-f10a-494a-b65e-1b7cffdff97d');
  return (
    <View style={styles.container}>
      <View style={styles.btnList}>
        <Button
          onPress={() => setUrl('https://firebasestorage.googleapis.com/v0/b/hackathon-ibm-f05ae.appspot.com/o/CV_Botman_Pierre.pdf?alt=media&token=708b2118-f10a-494a-b65e-1b7cffdff97d')}
          title="Botman Pierre"
        />
        <Button
          onPress={() => setUrl('https://firebasestorage.googleapis.com/v0/b/hackathon-ibm-f05ae.appspot.com/o/CV_Botman_Pierre.pdf?alt=media&token=708b2118-f10a-494a-b65e-1b7cffdff97d')}
          title="Duparcq Hakim"
        />
        <Button
          onPress={() => setUrl('https://firebasestorage.googleapis.com/v0/b/hackathon-ibm-f05ae.appspot.com/o/CV_Botman_Pierre.pdf?alt=media&token=708b2118-f10a-494a-b65e-1b7cffdff97d')}
          title="Ofori Joshua"
        />
        <Button
          onPress={() => setUrl('https://firebasestorage.googleapis.com/v0/b/hackathon-ibm-f05ae.appspot.com/o/CV_Botman_Pierre.pdf?alt=media&token=708b2118-f10a-494a-b65e-1b7cffdff97d')}
          title="Vervisch Loïc"
        />
        <Button
          onPress={() => setUrl('https://firebasestorage.googleapis.com/v0/b/hackathon-ibm-f05ae.appspot.com/o/CV_WAMBERGUE_Leonard.pdf?alt=media&token=9c2d0afa-5c26-4f88-b050-d62c72754d94')}
          title="Wambergue Léonard"
        />
      </View>
      <MysteryPDF url={url} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: widthProportion,
    height: heightProportion,
  },
  btnList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Mystery;
