import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, StatusBar } from 'react-native';

export default function Principal() {
  
    const Livros = [
        {id:"0", title:"Contos Folclóricos e Lendas Brasileiras", autor:"Jossi Borges",image: require('../../../assets/livros/0.jpg')},

        {id:"1", title:"Lendas Brasileiras", autor:"Luis Camara Cascudo", image: require('../../../assets/livros/1.jpg')},

        {id:"2", title:"O Orfanato da Srta. Peregrine", autor:"Riggs Ransom", image: require('../../../assets/livros/2.jpg')},

        {id:"3", title:"Introdução a Literatura Fantastica", autor:"Todorov", image: require('../../../assets/livros/3.jpg')},

        {id:"4", title:"Viajando pelo mundo do Era Uma Vez", autor:"Regina Michelli", image: require('../../../assets/livros/4.png')},

        {id:"5", title:"Contos de fadas", autor:"Marilena Chauí", image: require('../../../assets/livros/5.jpg')},

        {id:"6", title:"O Conto dos Contos", autor:"Giambatista Basile", image: require('../../../assets/livros/6.jpg')}
    ]

    const Item = ({ title, autor, image }) => (

        <View style={ styles.item }>

            <View style={ styles.avatarContainer }>
            <Image source={ image } style={ styles.avatar }/>
            </View>

            <View style={styles.textContainer}>
                <Text style={ styles.name }>{title}</Text>
                <Text style={styles.autor}>{autor}</Text>
            </View>    
        </View>
      );

    const renderItem = ({ item }) => (
        <Item title={item.title} autor={item.autor} image={item.image}/>
    );
    

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={Livros}
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
    width: '90%',
  },

  item: {
    flex: 1,
    flexDirection: 'row',    
    alignItems: 'center',
    paddingVertical: 16,
    
        
  },

  avatarContainer: {        
    height: 120,
    width: '24%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
    alignSelf: 'flex-start'
  },
  autor: {
    fontSize: 16,
    marginLeft: 16,
    alignSelf: 'flex-start'
  },

});

/*
Obrigatório
- Ter um button para direcionar ao cadastrar novo item
- Criar uma *listagem* clicavel que abra uma *sublistagem*
*/
