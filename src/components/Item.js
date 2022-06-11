import React from 'react'
import "../css/Item.css"
import Tachito from "../imagenes/Tachito1.png"
import Lupita from "../imagenes/Lupita.png"
export default function Item({index, prod, funcionIndex, borrarproducto}) {
  return (
<li className="items"><div id='titulos'>
        {prod.titulo}
        </div>
        <div id='imagenes'>
      <span className='imagenes'>
        <img src={prod.categoria} alt=""/>
       </span>
       </div>
        <div id='descripciones'>
          {prod.descripcion}
        </div>
        <button id='botonver' onClick={()=>funcionIndex(index)}>
        <img id='lupita' src={Lupita} alt=""/>
        </button>
        <button id='botonborrar' onClick={()=>borrarproducto(prod.id)}>
          <img id='tachito' src={Tachito} alt=""/> </button>
        </li>
  )
}
