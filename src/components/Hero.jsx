import MobileStoreButton from 'react-mobile-store-button';


import React from 'react';

const Hero = () => {
  return <div id='home'>
      <div className='md:hidden pt-16 bg-green flex flex-col justify-center items-center pl-12 pr-12  '>
          <h1 className='font-bold text-white text-center pt-12 pb-0  text-5xl md:text-8xl mb-0'>نظم تكويرة في لحظة</h1>
          <p className='text-white font-light text-sm md:text-4xl my-10 mx-auto max-w-lg  pb-0 mb-0'>Une plateforme sociale qui permet aux : </p>
<p className='text-white font-light text-sm md:text-4xl my-10 mx-auto max-w-xl	 mb-0 pb-0'>- Gens d'organiser ou de rejoindre des matchs/tournois publiques ou privés, de réserver des terrains, de trouver des classements, de rencontrer des amis et de s'inscrire aux académies de football.</p>
<p className='text-white font-light text-sm md:text-4xl my-10 mx-auto max-w-xl	 pb-0'>- Propriétaires de terrains de football de gérer leurs terrains (Réservations, Statistiques, Visibilité...)</p>
<div className='h-35 w-8/12 flex items-center justify-center pb-6 p-0 m-0'> 
    <MobileStoreButton
                    store="android"
                    url={"bit.ly/3ignYGK "}
                    linkProps={{ title: 'Play Store' }}
                    />
                    </div>
          <div className=''>
          {<img className='' src="../assets/mainres.png" alt=""/>}
          </div>
      </div>



      <div className='xs:hidden pt-20 bg-green flex justify-center items-center pl-12 pr-12  '>
          <div className='flex flex-col justify-center items-center pr-52'>
            <h1 className='font-bold text-white text-center pt-12 pb-0  text-6xl mb-4 hover:text-greenish'>نظم تكويرة في لحظة</h1>
            <p className='text-white font-light text-xl my-10 mx-auto max-w-lg  pb-0 mb-0'>Une plateforme sociale qui permet aux : </p>
    <p className='text-white font-light text-xl my-10 mx-auto max-w-xl	 mb-0 pb-0'>- Gens d'organiser ou de rejoindre des matchs/tournois publiques ou privés, de réserver des terrains, de trouver des classements, de rencontrer des amis et de s'inscrire aux académies de football.</p>
    <p className='text-white font-light text-xl my-10 mx-auto max-w-xl	 pb-0'>- Propriétaires de terrains de football de gérer leurs terrains (Réservations, Statistiques, Visibilité...)</p>
    <div className='h-40 w-11/12 flex items-center justify-center pb-6 p-0 m-0'> 
        <MobileStoreButton
                        store="android"
                        url={"bit.ly/3ignYGK "}
                        linkProps={{ title: 'Play Store' }}
                        />
                        </div>
                        </div>
          <div className='max-h-xs max-w-xs pt-20 pb-20'>
          {<img className='' src="../assets/Main.png" alt=""/>}
          </div>
      </div>
  </div>;
};

export default Hero;
