import React from 'react'

const Sidebar = ({items}) => {
 
 return (
<div class="relative bg-white dark:bg-gray-800 ">
 <div class="flex flex-col sm:flex-row sm:justify-around ">
  <div class="w-72 h-screen">
  <nav class="mt-10 px-6 ">
   {items.map((item)=>(
    <a 
    class="hover:text-alynkPrimary hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg cursor-pointer " 
    key={item.name} 
    href={`/productos#${item.name}`}
    >
       <span class=" underlineE mx-4 text-lg font-normal">
         {item.label}
       </span>
       <span class="flex-grow text-right">
       </span>
   </a>
   ))}
     </nav>
   </div>
 </div>
</div>
		
		
 )
}

export default Sidebar;
