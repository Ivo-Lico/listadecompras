export const productoID = (listaproducto)=>{
if (listaproducto.length === 0){
    return 0
}
else{
    const newID = listaproducto[listaproducto.length - 1].id + 1
    return newID
}
}
