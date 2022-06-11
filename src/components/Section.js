
import '../css/Section.css'
import imagen1 from '../imagenes/Listita.png'
import React,{ useState, useContext } from 'react'
import Section2 from './Section2'
import Contexto from '../context/Contexto'
export default function Section() {
  const {setlistaProductos} = useContext(Contexto)
  let {lista} = useContext(Contexto)
  const [guardada, setguardada] = useState(false)
  const [menuinicial, setmenuinicial] = useState(false)
  const show2 = ()=>{
setguardada(true)
setlistaProductos(lista)
  }
  const menu = ()=>{
    setguardada(null)
    setmenuinicial(true)
  }
  const listaCargada = ()=>{if (localStorage.getItem("Listado")){
    return(
      <div id='h4guardada'> <h4 id='h4uno'>Hay una lista de compras guardada</h4> <br /> <h4 id='h4dos'>¿Querés abrirla?</h4>
      <div id='contenedorbotones'>
      <button id='si' onClick={show2}>Si</button><button id='no' onClick={menu}>No</button>
      </div>
      </div>
    )
  }
  else {
    return(
      <div id='contenedormenu'>
      <h4>Añade una lista de compras</h4>
      <img src={imagen1} alt="" />
      </div>
    )
  }
}
if (!guardada && !menuinicial){
  return listaCargada()
}
else if(!guardada && menuinicial){
  return <div id='contenedormenu'>
  <h4>Añade una lista de compras</h4>
  <img src={imagen1} alt="" />
  </div>
}
else{
  return <Section2/>
}
}