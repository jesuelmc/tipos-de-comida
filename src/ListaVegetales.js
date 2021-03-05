import React from 'react'

function ListaVegetales (){
    const lista = ['Pepino', 'Lechuga', 'cebolla']
    return <div>
        <ul>
            {lista.map(l=><li>{l}</li>)}
        </ul>
    </div>
}
export default ListaVegetales;