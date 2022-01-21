import React from 'react';
import MobileStoreButton  from 'react-mobile-store-button';

const CTA = () => {
  return <div>
      <div id='CTA' className='bg-green flex flex-col items-center justify-center pl-14 pr-14 md:pl-80 md:pr-80 pt-16'>
          <p className='font-bold text-white text-2xl text-left pb-14'>Disponible sur les plateformes de téléchargement pour Android et Huawei. Pour télécharger l'application cliquez sur l'une des icones ci-dessous </p>
          <div className='h-35 w-8/12 flex items-center justify-center pb-6 p-0 m-0'>
          <MobileStoreButton
                    store="android"
                    url={"bit.ly/3ignYGK "}
                    linkProps={{ title: 'Play Store' }}
                    />
          </div>
      </div>
  </div>;
};

export default CTA;
