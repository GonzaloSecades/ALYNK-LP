import AndroidButton from "./buttons/AndroidButton"
import AppleButton from "./buttons/AppleButton"

function Download() {
 return (
 <div class="hero bg-gray-100 py-16">
  {/* <!-- container --> */}
  <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
   {/* <!-- hero wrapper --> */}
   <div class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
   {/* <!-- hero text --> */}
    <div class="hero-text col-span-6">
     <h1 class=" font-bold text-4xl md:text-5xl max-w-xl text-alynkPrimary leading-tight">
       Descargate la <span className='text-alynkSecondary'>App</span>
      </h1>
     <hr class=" w-12 h-1 bg-orange-500 rounded-full mt-8"/>
     <p class="text-gray-800 text-base leading-relaxed mt-8 font-semibold">Abri tu cuenta y opera <span className='text-alynkSecondary'>donde</span> quieras, <span className='text-alynkSecondary'>como</span> quieras y <span className='text-alynkSecondary'>cuando</span> quieras</p>
    <div class="get-app flex space-x-5 mt-10 justify-center md:justify-start xs:hidden">
     <AppleButton/>
     <AndroidButton/>   
     </div>
    </div>

   {/* <!-- hero image --> */}
    <div class="hero-image col-span-6">
     <img src='./images/slider/abri_tu_cuenta.png' alt='abrircuenta' className='max-h-screen'/>
      <div class="get-app flex space-x-5 mt-10 justify-center md:justify-start lg:hidden">
       <AppleButton/>
       <AndroidButton/>   
     </div>
    </div>
   </div>
  </div>
 </div>
 )
};


export default Download
