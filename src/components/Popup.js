import React, { useState, useContext } from 'react'
import '../css/Popup.css'
import Bebidas from '../imagenes/Bebidas.png'
import Cereales from '../imagenes/Cereales.png'
import Frutas from '../imagenes/Frutas.png'
import Lacteos from '../imagenes/Lacteos.png'
import Verduras from '../imagenes/Verduras.png'
import Contexto from '../context/Contexto'
import Listita2 from "../imagenes/Listita2.png"
import {productoID} from '../helpers/funcionID'
export default function Popup({setshow}) {
  const {listaproducto} = useContext(Contexto)
  const [escribi, setescribi] = useState(null)
  const {setlistaProductos} = useContext(Contexto)
  const [nuevoProducto, setnuevoProducto] = useState("")
  const [nuevaDesc, setnuevaDesc] = useState("")
  const [nuevaCategoria, setnuevaCategoria] = useState("")
  
  const sumarproducto = ()=>{
    if (document.getElementById("input1").value.length > 0){
    setlistaProductos([...listaproducto,{
      titulo: nuevoProducto, 
      descripcion: nuevaDesc,
      categoria: nuevaCategoria,
      //id: Math.round(Math.random() * (0,1000)),
      id: productoID(listaproducto)
    }])
    setshow(false)
  }
  else {
setescribi(<p>Escribí un título*</p>)
  }
}
  return (
    <div id='contenedorpopup'>
      <div id='popup'>
      <h2 id='h2'>¿Qué vas a comprar?</h2>
      <form id='form1' action="">
        <label htmlFor="input1">
          <h3>Nombre del producto:</h3>
        </label>
        {escribi}
        <input id='input1' type="text" value={nuevoProducto} onChange={(e)=> setnuevoProducto(e.target.value)}/>
      </form>
      <div id='contenedorselect'>
        <h3 id='categoriah3'>Selecciona una categoría</h3>
      <select onChange={(e)=> setnuevaCategoria(e.target.value)} id="categorias">
        <option id='option1' value="seleccionar">Selecciona una categoria</option>
        <option value={Verduras}>verduras</option>
        <option value={Lacteos}>lacteos</option>
        <option value={Frutas}>frutas</option>
        <option value={Bebidas}>bebidas</option>
        <option value={Cereales}>cereales</option>
      </select>
      </div>
      <form id='form2' action="">
        <label htmlFor="input2">
          <h3>Descripción:</h3> 
        </label>
        <input id='input2' type="text" value={nuevaDesc} onChange={(e)=>setnuevaDesc(e.target.value)}/>
      </form>
      <div onClick={sumarproducto} id='sumar2'><img id='listita2' src={Listita2} alt="" /></div>
      </div>
      </div>
  )
}

