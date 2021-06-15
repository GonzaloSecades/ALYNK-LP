import React from 'react'
import contenido from './contenido'

function Mobile(productos) {
    function sinHash (word) {
            let viejoString = word
            let nuevoString=viejoString.replace(/#/,"")
            console.log('sinhash?',nuevoString)
            return nuevoString
        }    
 return (
     <>
{!window.location.hash ? 'Explora los distintos productos que tenemos para ofrecerte':null}
   {contenido.map((item)=>{
       
    if(window.location.hash === item.name){

     return (
         <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold capitalize">{sinHash(item.name)}</h2>
    <p class="mt-2 text-gray-600">{item.content}</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
  </div>
</div>
     )
    }
   })}

</>
 )
}



export default Mobile

