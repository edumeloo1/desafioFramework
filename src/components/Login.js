import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/market.png')} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Digite seu usuario" />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Inicio')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#048BFC',
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    marginTop: 20,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    color: 'black',
  },
  botao: {
    marginTop: 10,
    width: 300,
    height: 45,
    backgroundColor: '#0420FC',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
