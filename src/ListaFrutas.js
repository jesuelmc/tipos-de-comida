import React from 'react'

function ListaFrutas (){
    const lista = ['Manzana', 'Papaya', 'Platano']
    return <div>
        <ul>
            {lista.map(l=><li>{l}</li>)}
        </ul>
    </div>
}
export default ListaFrutas;