import React from 'react'
import Icon from '../Icons/index'

function Footer() {
 return (
  <footer class="text-gray-600 body-font bg-alynkPrimary">
  <div class="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <img src="./images/isologotipoAsset4.png" alt="logo" />
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-alynkDisable tracking-wide text-sm mb-3 hover:text-alynkSecondary">ALYNK S.A.</h2>
        <nav class="list-none mb-10 cursor-pointer ">
          <li>
            <a href="/productos" class="text-alynkDisable hover:text-alynkSecondary">
             <Icon className='far fa-chart-bar mr-2 text-sm' />
              Productos
             </a>
          </li>
          <li>
            <a href="http://alynk.com.ar/docs/aranceles.pdf" class="text-alynkDisable hover:text-alynkSecondary">
             <Icon className='fas fa-tag mr-2 text-sm' />
              Aranceles
             </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"></a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-alynkDisable tracking-wide text-sm mb-3 hover:text-alynkSecondary">CONTACTO</h2>
        <nav class="list-none mb-10 cursor-pointer ">
          <li>
            <a href='http://maps.google.com/?q=Gral.+Güemes+275,+B1641CDE+Acassuso,+Provincia+de+Buenos+Aires'
              target='_blank' class="text-alynkDisable hover:text-alynkSecondary">
             <Icon className='fas fa-map-marker-alt mr-2 text-sm' />
              Gral. Guemes 275 <br /> Acassuso | Buenos Aires
             </a>
          </li>
          <li>
            <a href='tel:+5491143220372' class="text-alynkDisable hover:text-alynkSecondary">
             <Icon className='fas fa-phone-square-alt mr-2 text-sm' />
              +54 11 4322 0372
             </a>
          </li>
          <li>
            <a href='mailto:info@alynk.com.ar' class="text-alynkDisable hover:text-alynkSecondary">
             <Icon className='far fa-envelope mr-2 text-sm' />
              Mail
             </a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-alynkPrimary">
    <div class="container mx-auto py-1 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-600 text-sm text-center sm:text-left"> Alynk S.A. —
        <a class="text-gray-500 italic ml-1" target="_blank">Agente de Liquidación y Compensación N°629 - Agente de Colocación y Distribución Integral de Fondos Comunes de inversión N°131 - CUIT : 30-71522371-2</a>
      </p>
    </div>
  </div>
</footer>
 )
}

export default Footer
