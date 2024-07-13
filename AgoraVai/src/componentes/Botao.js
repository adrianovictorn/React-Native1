import React from "react";
import { Button } from "react-native";

export default props => {

    function executar(){
        console.warn("Botão #1 funcionando!")
    }
    return(

        <>
            <Button 
                title="Executar #1"
                onPress={executar}
            />

            <Button
                title="Executar #2"
                onPress={function(){
                    console.warn("Botão #2 funcionando!")
                }}
            />


<Button
                title="Executar #3"
                onPress={() => console.warn("Botão #3 funcionando!")
                }
            />
        
        
        </>
    )
}