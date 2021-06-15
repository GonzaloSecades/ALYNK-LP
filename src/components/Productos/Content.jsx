
import React, {useEffect} from 'react'
import contenido from './contenido'

const Content = () => {
 return (
  <div>
   {!window.location.hash ? 'Explora los distintos productos que tenemos para ofrecerte':null}
   {contenido.map((item)=>{
    if(window.location.hash === item.name){
     return item.content
    }
   })}
  </div>
 )
}


export default Content;