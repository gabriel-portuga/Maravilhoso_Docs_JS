import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import * as OpenAnything from 'react-native-openanything';

const Livros = () => {
  
    const Livros = [
        {id:"0", title:"Contos Folclóricos e Lendas Brasileiras", autor:"Jossi Borges",image: require('../../../assets/livros/0.jpg'), pagina: 'https://www.companhiadasletras.com.br/trechos/41096.pdf'}, // Corrigir Livro!

        {id:"1", title:"Lendas Brasileiras", autor:"Luis Camara Cascudo", image: require('../../../assets/livros/1.jpg'), pagina: 'http://www.multirio.rj.gov.br/media/PDF/pdf_4251.pdf'}, // Corrigir o livro!

        {id:"2", title:"O Orfanato da Srta. Peregrine", autor:"Riggs Ransom", image: require('../../../assets/livros/2.jpg'), pagina: 'https://www.intrinseca.com.br/upload/livros/1%C2%BACAP_CidadesDosEtereos_ISSUU.pdf'}, // OK

        {id:"3", title:"As estruturas narrativas", autor:"Todorov", image: require('../../../assets/livros/3.jpg'), pagina: 'https://edisciplinas.usp.br/pluginfile.php/5650145/mod_resource/content/1/todorov-t-as-estruturas-narrativas.pdf'}, // Mudar Imagem (Livro mudou)

        {id:"4", title:"Viajando pelo mundo do Era Uma Vez", autor:"Regina Michelli", image: require('../../../assets/livros/4.png'), pagina: 'https://www.dialogarts.uerj.br/admin/arquivos_tfc_literatura/ViajandoPeloMundoEncantadoEraUmaVez_ff.pdf'}, // Ok

        {id:"5", title:"Chapeuzinho Vermelho", autor:"Charles Perroault", image: require('../../../assets/livros/5.jpg'), pagina: 'https://www.dialogarts.uerj.br/arquivos/charlesp/charlesp_chapeuzinho_vermelho.pdf'}, // Ok

        {id:"6", title:"Os 77 melhores contos de Grimm", autor:"Jacob e Wilhelm Grimm", image: require('../../../assets/livros/6.jpg'), pagina: 'http://www.bonfinopolis.mg.gov.br/wp-content/uploads/2021/04/Box-Os-77-melhores-contos-de-Gr-Irmaos-Grimm.pdf'} // Mudar Imagem (Livro mudou)
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
        onPress={() => OpenAnything.Open(item.pagina)}
        />
    );
    

    return (
        <SafeAreaView style={styles.container}>
          <Text style={{ alignSelf: 'center', color: 'white', fontSize: 40, fontWeight: 'bold', marginTop: 16}}>Livros</Text>
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

export default Livros