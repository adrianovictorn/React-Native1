import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; 
import A, { } from './componentes/Primeiro'; 
import Titulo, {} from './componentes/Titulo'
import Botao, {} from './componentes/Botao'
import Contador from './componentes/Contador'


export default () => (
  <SafeAreaView style={styles.container}>
    <Contador inicial ={100} passo={13}/>
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  }
});
