import React, {useContext} from 'react'
import Contexto from '../context/Contexto'
export default function Guardada() {
  let {lista} = useContext(Contexto)
  return (
    <div>
        {lista.map((prod)=>(
        <li key={prod.id} id='elemento'><div>
        {prod.titulo}
        </div>
        <div>
      <span>
        <img src={prod.categoria} alt=""/>
       </span>
       </div>
        <div>
          {prod.descripcion}
        </div>
        </li>
        ))}
    </div>
  )
}
