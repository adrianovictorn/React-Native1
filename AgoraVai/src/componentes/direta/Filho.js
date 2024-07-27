import React from 'react'
import Estilo from './estilo'
export default props => {
    return(
        <>
        <Text style={Estilo.ex}>{props.a}</Text>

        <Text style={Estilo.ex}>{props.b}</Text>
        
        
        </>
    )
}
