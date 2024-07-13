import React from "react";
import { View, Text } from "react-native";
import Estilo from './estilo'

export default props => {

    return(
        <React.Fragment>
            <Text style={Estilo.ex}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>
    )
}