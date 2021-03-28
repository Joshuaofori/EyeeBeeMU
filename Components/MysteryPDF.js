import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import PropTypes from 'prop-types';

const widthProportion = '100%';
const heightProportion = '100%';

const MysteryPDF = (props) => {
  const { url } = props;
  return (
    <View style={styles.container}>
      <PDFReader
        style={styles.pdf}
        source={{
          uri: url,
        }}
      />
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
  pdf: {
    width: widthProportion,
    height: heightProportion,
  },
});

MysteryPDF.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MysteryPDF;
