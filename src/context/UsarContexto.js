import React from 'react'
import Contexto from './Contexto'
import {useState} from 'react'
export default function UsarContexto(props) {
const {children} = props
const [listaproducto, setlistaProductos] = useState([])
console.log(listaproducto)
let listado = localStorage.getItem("Listado")
console.log(JSON.parse(listado));
let lista = JSON.parse(listado)
  return (
    <Contexto.Provider value={{
listaproducto, setlistaProductos, lista, listado
    }}>{children}</Contexto.Provider>
  )
}
