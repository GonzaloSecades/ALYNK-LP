import React from 'react';

function Default(props) {
 let instruments = props.items.items;

 instruments.map((item) => {
  console.log(item);
 });
 return (
  <div>
   {/* <h1>Explora los distintos productos que tenemos para ofrecerte</h1>
   <h3>
    Opera dolar MEP desde nuestra App al mejor precio y con un solo click !
   </h3>
   <p>
    Podes optar desde renta fija, renta) variable y toda la familia de Fondos
    Comunes de Inversion que tenemos para ofrecertes
   </p> */}
   <section class='text-gray-600 body-font'>
    <div class='container px-5 py-24 mx-auto'>
     <div class='text-center mb-20'>
      <h1 class='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
       Instrumentos de inversion
      </h1>
      <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
       Conoce todos los instrumentos que tenemos para ofrecerte al alcance de un
       click desde nuestra APP
      </p>
     </div>
     <div class='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
      {instruments.map((instrument) => {
       return (
        <div key={instrument.name} class='p-2 sm:w-1/2 w-full'>
         <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
          <svg
           fill='none'
           stroke='currentColor'
           stroke-linecap='round'
           stroke-linejoin='round'
           stroke-width='3'
           class='text-alynkSecondary w-6 h-6 flex-shrink-0 mr-4'
           viewBox='0 0 24 24'
          >
           <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
           <path d='M22 4L12 14.01l-3-3'></path>
          </svg>
          <span class='title-font font-medium'>{instrument.label}</span>
         </div>
        </div>
       );
      })}
      {/* */}
     </div>
     <button class='flex mx-auto mt-16 text-alynkDisable bg-alynkPrimary border-0 py-2 px-8 focus:outline-none hover:bg-alynkSecondary hover:text-alynkPrimary rounded text-lg'>
      Abrir Cuenta
     </button>
    </div>
   </section>
  </div>
 );
}

export default Default;
