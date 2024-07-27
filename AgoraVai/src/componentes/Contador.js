import React, { useState } from "react";
import { Text, Button } from "react-native";
import Estilo from './estilo'


export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + props.passo)
    
    const enc = () => setNumero(numero - props.passo)

    return (
        <>
            <Text style={Estilo.ex}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={enc}/> 
        
        
        </>
    )
}