import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function pantallaCarga() {
  return (
    <View>
      <Image source={require('../img/carga.png')} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({

    icon: {
        width: 100,
    },
});
