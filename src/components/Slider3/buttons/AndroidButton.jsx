

import React from 'react'

function AndroidButton() {
 return ( 
 <a href="https://play.google.com/store/apps/details?id=ar.com.alynk.alynkapp">
  <button class="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4">
   <div class="image">
    <svg class="w-6 h-6"xmlns="http://www.w3.org/2000/svg"width="436.057" height="469.847" viewBox="0 0 436.057 469.847">
     <g transform="translate(-16.896)">
      <path d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z" fill="#2196f3"/>
      <path d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z" fill="#4caf50"/>
      <path d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z" fill="#ffc107"/>
      <path d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z" fill="#f44336"/>
     </g>
    </svg>
   </div>
   <div class="text">
       <p class="text-xs text-gray-600" style={{fontSize: '0.5rem'}}>Conseguilo en</p>
       <p class="text-xs font-semibold text-gray-900">Google play</p>
   </div>
  </button>
 </a>
 )
}

export default AndroidButton
