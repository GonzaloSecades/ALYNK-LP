import React from 'react'
import Content from './Content';
import Mobile from './Mobile';
import Sidebar from './Sidebar';


const Productos = () => {

  const productos = [
   {name:'acciones', label: 'Acciones'},
   {name:'bonos', label:'Bonos'},
   {name:'cauciones',label:'Cauciones'},
   {name:'cedears',label:'CEDEARS'},
   {name:'dolarmep',label:'Dolar M.E.P.'},
   {name:'fci',label:'F.C.I'},
   
  ]
 
 return (
  // <div className='container flex flex-col'>
  //  <Sidebar/>
  //  <Content/>
  // </div>
  <div class="hero bg-gray-100 py-16 ">
  {/* <!-- container --> */}
  <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
   {/* <!-- hero wrapper --> */}
   <div class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
   {/* <!-- hero text --> */}
    <div class="hero-text col-span-3 hidden lg:block ">
     <Sidebar items={productos} />
    </div>

    <div class="hero-text col-span-3 block lg:hidden ">
     <Mobile items={productos} />
    </div>

   {/* <!-- hero image --> */}
    <div class="hero-image col-span-6">
     <Content items={productos}/>
    </div>
   </div>
  </div>
 </div>
 )
}

export default Productos;
