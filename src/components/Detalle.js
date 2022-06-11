import React from 'react'
import '../css/Detalle.css'
import Contexto from '../context/Contexto'
import x from "../imagenes/x.png"
import { useContext } from 'react'
export default function Detalle({setshowdetalle, productoelegido}) {
  console.log(productoelegido)
  const {listaproducto} = useContext(Contexto)
  return (
    <div id='div'>
      <div id='contenedordetalle'>
        <div id='titulo'><h3>Titulo:</h3><p>{listaproducto[productoelegido].titulo}</p></div>
        <div id='categoriadiv'><h3>Categoria:</h3><img src={listaproducto[productoelegido].categoria} alt="" /></div>
  <div id='descripcion'><h3>Descripción:</h3><p>{listaproducto[productoelegido].descripcion}</p></div>
  <button id='botonx' onClick={()=>setshowdetalle(false)}><img src={x} alt="" /></button>
  </div>
        </div>
  )
}
