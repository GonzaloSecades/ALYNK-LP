import React,{ useState } from 'react'



function Navbar2() {
 const [showBar, setShowBar] = useState(false);
 const toggle = () =>
 {
  console.log(showBar)
  
  setShowBar(!showBar)
 };
 return (
  <div className='sticky'>
<header class="text-gray-600 body-font shadow-xl sticky">
  <div class="container mx-auto flex flex-wrap p-5 flex-row items-center xs:justify-evenly md:justify-evenly">    
   <img className='lg:h-1/3 lg:w-1/4 xs:w-1/3 xs:h-1/3 md:w-1/3 md:h-1/3' src='./images/isologo-isotipo-op0.png'/>
    <a onClick={toggle} className="md:hidden lg:hidden" >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
    </svg>
    </a>
    
   
  <nav class=" xs:hidden md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
   
   <a href="/" class=" px-2 py-2 text-xl text-alynkPrimary rounded-md dark:text-gray-200 ">
    <span class="underlineE">Home</span>
   </a>
   <a href="/productos" class=" px-2 py-2 text-xl text-alynkPrimary rounded-md dark:text-gray-200 ">
    <span class="underlineE">Productos</span>
   </a>
   <a href="/contacto" class=" px-2 py-2 text-xl text-alynkPrimary rounded-md dark:text-gray-200 ">
    <span class="underlineE">Contacto</span>
   </a>
  
  </nav>

   <a href='/abrircuenta' className=' xs:hidden px-2 py-2 text-2xl text-alynkDisable border border-alynkPrimary bg-alynkPrimary rounded transition duration-500 ease-in-out hover:bg-alynkSecondary hover:text-alynkPrimary hover:border-alynkSecondary xs:mt-1 '>
    <span className='tracking-tight '>Abrir Cuenta</span>
   </a>

  </div>
</header>
  {showBar? (<nav class="bg-white shadow dark:bg-gray-800 md:hidden lg:hidden">
  <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
   <a href="#" class="text-alynkPrimary dark:text-gray-200 mx-1.5 sm:mx-6">home</a>

   <a href="#" class="text-alynkPrimary hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Productos</a>

   <a href="#" class="text-alynkPrimary hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contacto</a>
  </div>
 </nav>):null}
 </div>
 )
}

export default Navbar2
