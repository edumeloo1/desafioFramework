import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Inicio({navigation}) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.headerHome} editable={false} />
      <TouchableOpacity style={Styles.arrowBackLog}>
          <Icon name="arrow-left" size={30} color={'#fff'}/>
      </TouchableOpacity>
      <Text> Hello World </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerHome: {
    height: 60,
    backgroundColor: '#048BFC',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});

// options={{
//     title: 'Início',
//     headerStyle: {
//       backgroundColor: '#048BFC',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   }}
