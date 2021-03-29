import React, { useState, useEffect } from 'react';
import {
  Text, View, StyleSheet, Button, ScrollView,
} from 'react-native';
import { Marker } from 'react-native-maps';
import { ClusterMap } from 'react-native-cluster-map';
import Modal from 'react-native-modal';
import { getPiNumber } from '../API';
import {
  resolveX, resolveY, resolveZ,
} from '../algorithm/Algorithm';

const Resolver = () => {
  const [valueX, setValueX] = useState('Résoudre X');
  const [disableX, setDisableX] = useState(false);
  const [valueY, setValueY] = useState('Résoudre Y');
  const [disableY, setDisableY] = useState(false);
  const [valueZ, setValueZ] = useState('Résoudre Z');
  const [disableZ, setDisableZ] = useState(false);

  const [nextDecimals, setNextDecimals] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);

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
          onPress={() => {
            setModalVisible(true);
          }}
          title="Afficher"
          color="#006699"
          accessibilityLabel="Answer"
        />
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <ClusterMap
            region={{
              latitude: 50.634187,
              longitude: 3.050063,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          >
            <Marker coordinate={{ latitude: 50.634187, longitude: 3.050063 }} />
          </ClusterMap>
        </Modal>
      </ScrollView>
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
