import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; 
import A, { } from './componentes/Primeiro'; 
import Titulo, {} from './componentes/Titulo'
import Botao, {} from './componentes/Botao'


export default () => (
  <SafeAreaView style={styles.container}>
    <Titulo principal="Cadastro Produto"
    secundario="Tela de Cadastramento"/>
    <Botao/>
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
