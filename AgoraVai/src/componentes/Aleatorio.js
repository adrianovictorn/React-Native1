import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'


export default props => {
    const raio = props.max - props.min
    const aleatorio = parseInt(Math.random() * raio ) + props.min ;
    return(
        <Text style={Estilo.ex}> O valor aleatório é: {aleatorio} </Text>
        
    )
}