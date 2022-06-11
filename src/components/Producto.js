import React from 'react'
import Contexto from '../context/Contexto'
import { useContext } from 'react'
import Item from '../components/Item'
export default function Producto({showdetalle, setshowdetalle, setproductoelegido}) {
    const {listaproducto} = useContext(Contexto)
    const {setlistaProductos} = useContext(Contexto)

    const borrarproducto = (id)=>{
        if (showdetalle === false){
        setlistaProductos(listaproducto.filter(item=>
          item.id !== id
        ))}
      }
      const funcionIndex = (index)=>{
        setproductoelegido(index)
        setshowdetalle(true)
        console.log(index, "este es el index")
      }
      
  return (
    <div>
        {listaproducto.map((prod,index)=>(
        
        <Item index={index} borrarproducto={borrarproducto} funcionpiola={funcionIndex} prod={prod} key={prod.id} />

        ))}
    </div>
  )
}
