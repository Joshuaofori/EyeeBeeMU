import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, Button, ScrollView,
} from 'react-native';
import { getPiNumber } from '../API';

const Resolver = () => {
  const [valueX, setValueX] = useState('Résoudre X');
  const [disableX, setDisableX] = useState(false);
  const [valueY, setValueY] = useState('Résoudre Y');
  const [disableY, setDisableY] = useState(true);
  const [valueZ, setValueZ] = useState('Résoudre Z');
  const [disableZ, setDisableZ] = useState(true);
  const [valueXYZ, setValueXYZ] = useState('Afficher');
  const [disableXYZ, setDisableXYZ] = useState(true);
  const [nextDecimals, setNextDecimals] = useState(0);

  useEffect(() => {
    getPiNumber('036695').then((data) => {
      setNextDecimals(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          R&eacute;solveur d&apos;&eacute;nigmes IBM GRATUIT
          {'\n'}
        </Text>
        <Text style={styles.text}>Indice X : </Text>
        <Text>
          Trouver le nombre de 6 chiffres se positionnant après la première occurence
          de 036695 dans les décimales de PI.
          {'\n'}
          Convertir ce nombre de la base10 en base26
        </Text>
        <Button
          onPress={disableX ? () => {} : () => {
            setValueX(resolveX(nextDecimals));
            setDisableX(true);
          }}
          title={valueX}
          color="#006699"
          accessibilityLabel="Resolve X"
        />
        <Text style={styles.text}>
          Indice Y :
        </Text>
        <Text>https://pasteboard.co/074 065 051 049 084 077 048 046 112 110 103/</Text>
        <Button
          onPress={disableY ? () => {} : () => {
            setValueY(resolveY());
            setDisableY(true);
          }}
          title={valueY}
          color="#006699"
          accessibilityLabel="Resolve Y"
        />
        <Text style={styles.text}>
          Indice Z :
        </Text>
        <Text>&apos;X&apos;+&apos;Y&apos; Lille</Text>
        <Button
          onPress={disableZ ? () => {} : () => {
            setValueZ(resolveZ());
            setDisableZ(true);
          }}
          title={valueZ}
          color="#006699"
          accessibilityLabel="Resolve Z"
        />
        <Text style={styles.text}>
          R&eacute;ponse :
        </Text>
        <Text>!r^&quot;eù&quot;</Text>
        <Button
          onPress={disableXYZ ? () => {} : () => {
            setValueXYZ(resolveXYZ());
            setDisableXYZ(true);
          }}
          title={valueXYZ}
          color="#006699"
          accessibilityLabel="Answer"
        />
      </ScrollView>
    </View>
  );
};

const resolveX = (nextDecimals) => {
  let result = '';
  let quotient = nextDecimals;
  while (quotient >= 1) {
    const remainder = quotient % 26;
    quotient = Math.floor(quotient / 26);
    result += remainder.toString(26).toUpperCase();
  }
  return result.split('').reverse().join('');
};

const resolveY = () => {
};

const resolveZ = () => {
};

const resolveXYZ = () => {
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#006699',
  },
  container: {
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

export default Resolver;
