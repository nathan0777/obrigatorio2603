import React from "react";
import { StyleSheet, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.all}>
      <View style={styles.header}>

        <Image
          source={require('./assets/EU.png')}
          style={styles.image}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite Aqui..."
        />

        <Image
          source={require('./assets/lupa.png')}
          style={styles.lupa}
        />

      </View>
      <View style={styles.body}/>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    height: '100%',
  },
  header: {
    height: '20%',
    backgroundColor: '#ECA400',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 50,
  },
  body: {
    height: '100%',
  },
  lupa: {
    width: 50,
    height: 50,
  },
  input: {
    width: 150,
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  }
});
