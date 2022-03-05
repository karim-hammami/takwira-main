import React from 'react';

function handlered () {

  window.location.href = "https://bit.ly/3ignYGK";
}
function handlegal () {
  window.location.href = "https://appgallery.huawei.com/app/C104694375?sharePrepath=ag&locale=en_US&source=appshare&subsource=C104694375&shareTo=com.facebook.orca&shareFrom=appmarket&fbclid=IwAR1m2CPu1CCgFOX8nt6pLiQtc2j77S0_ReLG3x3dkG1xPi5nH6jYqn-uEow";
}

const CTA = () => {
  return <div>
      <div id='CTA' className='bg-green flex flex-col scroll-smooth items-center justify-center pl-14 pr-14 md:pl-80 md:pr-80 pt-10'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 mt-4 text-white mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
          <p className='font-bold text-white text-2xl text-left '>Disponible sur les plateformes de téléchargement pour Android et Huawei. Pour télécharger l'application cliquez sur l'une des icones ci-dessous </p>
          <div className='max-h-xs max-w-xs flex-col items-center justify-center pb-6 p-0 m-0'>
          <div className='md:flex items-center justify-center'>
            <img onClick={handlered} className='cursor-pointer' src="/assets/google.png" alt="play store" />
            <img onClick={handlegal} src="/assets/appgallery.svg" alt="app gallery" />
          </div>
          </div>
      </div>
  </div>;
};

export default CTA;
