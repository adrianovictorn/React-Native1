import React from 'react'
import Estilo from './estilo'
export default props => {

    let x = 13
    let y = 100
    return(
         <>
            <Filho a={x} b={y} />
            <Filho a={x+100} b={y + 200}/>
         
         </>
    )
}
