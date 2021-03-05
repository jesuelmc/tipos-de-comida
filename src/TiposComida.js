import React from 'react';

import Frutas from './Frutas'
import Vegetales from './Vegetales'
class TiposComida extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const tipos = ['Frutas','Vegetales']
        return <div>
            <h1>Tipos de Comida</h1>
            {tipos.map((tipo,index)=>{
                let jsx 
                if(index == 0){
                    jsx = <div><h2>{tipo}</h2><Frutas/></div>
                }
                if(index == 1){
                    jsx = <div><h2>{tipo}</h2><Vegetales/></div>
                }
                return jsx
            })}

        </div>
    }
}

export default TiposComida;