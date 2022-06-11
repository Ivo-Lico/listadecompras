
import imagen1 from '../imagenes/Listita.png'
import Popup from "./Popup"
import React,{ useState, useContext } from 'react'
import "../css/Section2.css"
import Detalle from './Detalle'
import Producto from './Producto'
import Contexto from '../context/Contexto'
import Section from './Section'
export default function Section2({show, setshow}) {
  const {listaproducto} = useContext(Contexto)
  const [imagen2, setimagen] = useState(imagen1)
  const [showdetalle, setshowdetalle] = useState(false)
  const [productoelegido, setproductoelegido] = useState()
  if (!listaproducto){
    return(<h1>Loading...</h1>)
  }
  else
  return (
    <>
   {listaproducto.length === 0 && show === false ?  <Section /> :   
   (<div id='contenedorsection2'>
      <div  id='contenedor2'>
      <ul id="lista">

      {show?<Popup imagen={imagen2} setimagen={setimagen} setshow={setshow}/>:null}

        <Producto showdetalle={showdetalle} setshowdetalle={setshowdetalle} productoelegido={productoelegido} setproductoelegido={setproductoelegido}></Producto>
  </ul>
        </div>
        
    </div>)}
    {showdetalle&&<Detalle productoelegido={productoelegido} setshowdetalle={setshowdetalle}/>}
    </>
  )
  }
  

