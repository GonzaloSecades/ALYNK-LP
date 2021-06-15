import React from 'react'
import Icon from '../Icons'


function UpBar() {
 return (
  <div className='bg-alynkWebBlue text-white flex flex-row justify-between p-2.5 '>
    <span className='ml-1 hover:text-alynkSecondary'>
     <Icon className='fas fa-phone-square-alt' />
     {' '}
     <a href="tel:+5491147333303">
     +54 11 4733-3303
     </a>
   </span>
   <span className='mr-2 '>
    <a href='https://www.linkedin.com/company/alynk/' className='hover:text-alynkSecondary'>
    <Icon className='fab fa-linkedin-in '/>
    </a>
    {' '}
    <a className='m-1 hover:text-alynkSecondary' href='https://www.instagram.com/alynk.app/'>
    <Icon className='fab fa-instagram' />
    </a>
   </span>
  </div>
 )
}

export default UpBar
