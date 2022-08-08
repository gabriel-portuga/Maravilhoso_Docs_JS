import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Artigos() {

    const navigation = useNavigation();
  
    const Artigos = [
        {id:"0", title:"Contos Folclóricos e Lendas Brasileiras", autor:"Jossi Borges",image: require('../../../assets/artigos_default.png'), pagina: 'Principal'},

        {id:"1", title:"Lendas Brasileiras", autor:"Luis Camara Cascudo", image: require('../../../assets/artigos_default.png'), pagina: 'Principal'},

        {id:"2", title:"O Orfanato da Srta. Peregrine", autor:"Riggs Ransom", image: require('../../../assets/artigos_default.png'), pagina: 'Principal'},

        {id:"3", title:"Introdução a Literatura Fantastica", autor:"Todorov", image: require('../../../assets/artigos_default.png'), pagina: 'Principal'},

        {id:"4", title:"Viajando pelo mundo do Era Uma Vez", autor:"Regina Michelli", image: require('../../../assets/artigos_default.png'), pagina: 'Principal'},

        {id:"5", title:"Contos de fadas", autor:"Marilena Chauí", image: require('../../../assets/artigos_default.png'), pagina: 'Principal'},

        {id:"6", title:"O Conto dos Contos", autor:"Giambatista Basile", image: require('../../../assets/artigos_default.png'), pagina: 'Principal'}
    ]

    const Item = ({ title, autor, image, onPress }) => (

        <View style={ styles.item }>

            <TouchableOpacity 
            onPress={(onPress)}
            style={ styles.avatarContainer }
            >
                <Image source={ image } style={ styles.avatar }/>
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={ styles.name }>{title}</Text>
                <Text style={styles.autor}>{autor}</Text>
            </View>    
        </View>
      );

    const renderItem = ({ item }) => (
        <Item 
        title={item.title} 
        autor={item.autor} 
        image={item.image}
        onPress={() => navigation.navigate(item.pagina)}
        />
    );
    

    return (
        <SafeAreaView style={styles.container}>
          <Text style={{ alignSelf: 'center', color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 16}}>Artigos</Text>
          <FlatList
            data={Artigos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FF9E9D'
  },

  item: {
    flex: 1,
    flexDirection: 'row',    
    alignItems: 'center',
    paddingVertical: 16,
    paddingLeft:10,
    paddingRight: 10, 
        
  },

  avatarContainer: {        
    height: 120,
    width: '24%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  avatar: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    
  },

  textContainer: {
    height: 120,
    width: '76%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 16,
    alignSelf: 'flex-start',
    color: 'white'
  },
  autor: {
    fontSize: 16,
    marginLeft: 16,
    alignSelf: 'flex-start',
    color: 'white'
  },

});

