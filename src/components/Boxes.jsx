import React from 'react';

const Boxes = () => {
  return <div id='Boxes' className='pt-12 pl-8 pr-8 '>
      <div  className='lc:hidden flex flex-col items-center justify-center mt-3 pt-10'>
          <div className='border-green bg-green border-4 flex items-center justify-center mb-20 h-24 w-80 rounded-lg shadow-sm'>
          <h3 className='font-bold text-white text-center text-3xl '>Pourquoi Takwria ?</h3>
          </div>

        <div className='border-4 border-green flex flex-col justify-center items-center pl-10 pr-10 mb-10 rounded-lg'>
            <img className='h-40 w-40 mt-8 mb-8'  src="../assets/1 happiness.png" alt="logo1" />
            <p className='font-bold text-black text-xl text-center mb-6'>Une application qui facilite la vie</p>
            <p className='font-light text-grey text-xs mb-10'>Profitez d'une application fluide qui vous permettra d'organiser vos matchs en quelques secondes. Faites-vous de nouveaux amis, participez facilement à des tournois et 
postulez à des équipes professionnelles. Oubliez les longs appels téléphoniques et la confusion dans les discussions de groupe et organisez tout cela sans effort grâce à l'application.</p>
        </div>
        <div className='border-4 border-green flex flex-col justify-center items-center pl-10 pr-10 mb-10 rounded-lg'>
            <img className='h-40 w-40 mt-8 mb-8' src="../assets/2 stats.png" alt="logo2" />
            <p className='font-bold text-black text-xl text-center mb-6'>Des statistiques approfondies</p>
            <p className='font-light text-grey text-xs mb-10'>Visualisez vos victoires et l'historique de vos matchs en détail. Les propriétaires de terrains peuvent accéder à un tableau de bord en direct qui vous dit tout ce que vous devez savoir sur votre terrain et 
sur le marché global pour vous guider vers les meilleures décisions.
</p>
        </div>
        <div className='border-4 border-green flex flex-col justify-center items-center pl-10 pr-10 mb-10 rounded-lg'>
            <img className='h-40 w-40 mt-8 mb-8' src="../assets/3 shield.png" alt="logo3" />
            <p className='font-bold text-black text-xl text-center mb-6'>Protection et sécurité</p>
            <p className='font-light text-grey text-xs mb-10'>Toutes les transactions effectuées via l'application sont sécurisées par les dernières technologies. Toutes les données personnelles enregistrées sont cryptées et sécurisées.</p>
        </div>
        </div>




        <div className='flex fl:hidden flex-col items-center justify-start pt-14'>
          <div className='border-green hover:bg-greenish hover:border-greenish bg-green border-4 flex items-center justify-center mb-20 h-24 w-80 rounded-lg shadow-sm'>
          <h3 className='font-bold text-white text-center text-3xl '>Pourquoi Takwria ?</h3>
          </div>
            <div className='flex justify-evenly items-center ml-8 mr-8'>
            <div className='hover:scale-110 bg-white h-3/4 w-3/4 border-4 border-green flex flex-col justify-center items-center pl-14 pr-12 mr-14 mb-10 rounded-lg'>
                <img className='h-40 w-40 mt-8 mb-8'  src="../assets/1 happiness.png" alt="logo1" />
                <p className='font-bold text-black text-xl text-center mb-6'>Une application qui facilite la vie</p>
                <p className='font-light text-grey text-xs mb-10'>Profitez d'une application fluide qui vous permettra d'organiser vos matchs en quelques secondes. Faites-vous de nouveaux amis, participez facilement à des tournois et 
    postulez à des équipes professionnelles. Oubliez les longs appels téléphoniques et la confusion dans les discussions de groupe et organisez tout cela sans effort grâce à l'application.</p>
            </div>
            <div className='hover:scale-110 bg-white h-3/4 w-3/4 border-4 border-green flex flex-col justify-center items-center pl-10 pr-10 mb-10 mr-14 rounded-lg'>
                <img className='h-40 w-40 mt-8 mb-8' src="../assets/2 stats.png" alt="logo2" />
                <p className='font-bold text-black text-xl text-center mb-6'>Des statistiques approfondies</p>
                <p className='font-light text-grey text-xs mb-10'>Visualisez vos victoires et l'historique de vos matchs en détail. Les propriétaires de terrains peuvent accéder à un tableau de bord en direct qui vous dit tout ce que vous devez savoir sur votre terrain et 
    sur le marché global pour vous guider vers les meilleures décisions.
    </p>
            </div>
            <div className='hover:scale-110 bg-white h-3/4 w-3/4 border-4 border-green flex flex-col justify-center items-center pl-10 pr-10 mb-10 rounded-lg'>
                <img className='h-40 w-40 mt-8 mb-8' src="../assets/3 shield.png" alt="logo3" />
                <p className='font-bold text-black text-xl text-center mb-6'>Protection et sécurité</p>
                <p className='font-light text-grey text-xs mb-10'>Toutes les transactions effectuées via l'application sont sécurisées par les dernières technologies. Toutes les données personnelles enregistrées sont cryptées et sécurisées.</p>
            </div>
            </div>
        </div>
  </div>;
};

export default Boxes;
