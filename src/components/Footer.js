import React, {useContext} from 'react'
import '../css/Footer.css'
import Contexto from '../context/Contexto'
export default function Footer({setshow, show}) {
  const {listaproducto} = useContext(Contexto)
  const guardarlista = ()=> {
    if (listaproducto.length !== 0){
    localStorage.setItem("Listado", JSON.stringify(listaproducto))
  }
}
const botonStorage = ()=>{
  if (listaproducto.length !== 0){
    return (
      <button id='botonguardar' onClick={guardarlista}>Guardar lista</button>
    )
  } 
}
const handleFooter = ()=>{
  if (show === false && listaproducto.length === 0){
    return(<div id='f1'>
    {botonStorage()}
    <div id='contenedorbotonflex'>
 <h2 id='h2boton' onClick={()=>setshow(!show)}>+</h2>
 </div>
</div>)
  }
  if (listaproducto.length > 0 && show === false){
    return(
      <div id='f2'>
        <div id='contenedorflex'>
      {botonStorage()}

   <h2 id='h2boton' onClick={()=>setshow(!show)}>+</h2>

   </div>
 </div>  
    )
  }
  if (show === true){
    return(null)
  }
}

  return (
    <>
   
   {handleFooter()}
    </>
  )
}

