import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ListItem from '../ListItem/Index';

export default function Inicio({navigation}) {
  const ListaComprar = [
    {id: '1', tarefa: 'Maçã'},
    {id: '2', tarefa: 'Uva'},
    {id: '3', tarefa: 'Pêra'},
    {id: '4', tarefa: 'Banana'},
    {id: '5', tarefa: 'Manga'},
    {id: '6', tarefa: 'Abacaxi'},
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerHome} disabled={true} />
      <FlatList
        data={ListaComprar}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem data={item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}

const Separator = () => (
  <View style={{flex: 1, height: 1, backgroundColor: '#DDD'}}></View>
);

const styles = StyleSheet.create({
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
