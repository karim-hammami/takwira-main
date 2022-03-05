import React from 'react';
import { useState } from 'react';




const CCM = () => {
    const [pic, setpic] = useState("../assets/4.png")




    return <div  >
        <div className=''>
            <hr id='CCM' className='text-grey flex justify-center items-center scroll-smooth' />
            <div className='flex flex-col items-center justify-center mt-12 mb-12 group'>
                <div className='group-hover:bg-green  border-green border-4 shadow-2xl flex items-center justify-center mt-12  h-24 w-80 rounded-lg '>
                    <h3 className='font-bold text-green group-hover:text-white cursor-pointer text-center text-2xl '>Comment ça marche</h3>
                </div>
            </div>
            <div className=''>
                <div className='max-h-sm md:flex is:flex-col justify-center items-center m-10 '>
                        <div className='ml-8 mr-8' >
                        <div className='flex flex-col xs:mb-6  xs:items-center md:items-start  justify-center mb-12'>
                            <div  className='flex justify-center items-center'>
                                <div onMouseOver={() => { setpic("../assets/4.png") }} className="bg-green shadow-2xl flex justify-center items-center border-4 border-green w-24 h-24 cursor-pointer hover:bg-greenish hover:border-greenish rounded-full mr-4"><p className='text-center text-white font-bold text-4xl'>1</p></div>
                                <div className='border-0 w-56'>
                                    <p className='text-center font-bold text-2xl  mb-4'>Trouver un terrain</p>
                                    <p className='font-light text-sm text-grey text-left'>Trouvez facilement de nouveaux terrains de football</p>
                                </div>
                            </div>


                        </div>


                        <div  className='flex flex-col xs:mb-6 xs:items-center md:items-start  justify-center  mb-12'>
                            <div className='flex justify-center items-center'>
                                <div onMouseOver={() => { setpic("../assets/10.png") }} class="bg-green shadow-2xl  flex justify-center items-center border-4 border-green w-24 h-24 cursor-pointer hover:bg-greenish hover:border-greenish rounded-full mr-4"><p className='text-center text-white font-bold text-4xl'>2</p></div>
                                <div className='border-0 w-56'>
                                    <p className='text-center font-bold text-2xl mb-4'>Informations sur le terrain</p>
                                    <p className='font-light text-sm text-grey text-left'>Voyez les photos, les prix et ce qu'il offre comme l'eau...</p>
                                </div>
                            </div>


                        </div>


                        <div  className='flex flex-col xs:mb-6 xs:items-center md:items-start  justify-center '>
                            <div className='flex justify-center items-center'>
                                <div onMouseOver={() => { setpic("../assets/11.png") }} class="bg-green shadow-2xl flex justify-center items-center border-4 border-green w-24 h-24 cursor-pointer hover:bg-greenish hover:border-greenish rounded-full mr-4"><p className='text-center text-white font-bold text-4xl'>3</p></div>
                                <div className='border-0 w-56'>
                                    <p className='text-center font-bold text-2xl mb-4'>Disponibilité du terrain</p>
                                    <p className='font-light text-sm text-grey text-left'>Consultez le calendrier de réservation du terrain de football et réservez-le via l'application</p>
                                </div>
                            </div>


                        </div>
                        </div>

                    <div className='cl:hidden max-w-xs max-h-xs flex justify-center items-center '>
                    {<img className='' src={pic} alt="changing pic" />}
                </div>

                <div className='ml-8 mr-8'>
                    <div   className='flex xs:mb-6 flex-col xs:items-center md:items-start  justify-center mb-12'>
                        <div className='flex justify-center items-center flex-nowrap'>
                            <div className='border-0 w-56'>
                                <p className='text-center font-bold text-2xl xs:mt-8 fl:mt-12 mb-4'>Match</p>
                                <p className='font-light text-sm text-grey text-left'>Voyez l'heure et le terrain réservé pour le match. Voyez le nombre de joueurs confirmés, leurs profils, et chattez ensemble.</p>
                            </div>
                            <div onMouseOver={() => { setpic("../assets/5.png") }} class="bg-green shadow-2xl flex-grow flex flex-nowrap justify-center items-center border-4 border-green w-24 h-24 cursor-pointer hover:bg-greenish hover:border-greenish rounded-full ml-4"><p className='text-center text-white font-bold text-4xl'>4</p></div>

                        </div>

                    </div>

                    <div   className='flex xs:mb-6 flex-col xs:items-center md:items-start  justify-center mb-12'>
                        <div className='flex justify-center items-center'>
                            <div className='border-0 w-56'>
                                <p className='text-center font-bold text-2xl mb-4'>Profil</p>
                                <p className='font-light text-sm text-grey text-left'> Personnalisez votre profil avec votre photo et vos préférences, consultez le nombre de matchs joués, buts, passes décisives et votre meilleure position de jeu</p>
                            </div>
                            <div onMouseOver={() => { setpic("../assets/6.png") }} class="bg-green shadow-2xl flex justify-center items-center border-4 border-green w-24 h-24 cursor-pointer hover:bg-greenish hover:border-greenish rounded-full ml-4"><p className='text-center text-white font-bold text-4xl'>5</p></div>

                        </div>
                        <hr className='text-black flex justify-center items-center ' />

                    </div>


                        <div  className='flex xs:mb-6 flex-col xs:items-center md:items-start justify-center'>
                            <div className='flex justify-center items-center'>
                                <div className='border-0 w-56'>
                                    <p className='text-center font-bold text-2xl mb-4'>Classement</p>
                                    <p className='font-light text-sm text-grey text-left'>Mettez en valeur vos compétences en pouvant figurer dans le classement des meilleurs joueurs tunisiens. Obtenez de nouvelles opportunités et réalisez vos rêves.</p>
                                </div>
                                <div onMouseOver={() => { setpic("../assets/7.png") }} class="bg-green shadow-2xl flex justify-center items-center border-4 border-green w-24 h-24 cursor-pointer hover:bg-greenish hover:border-greenish rounded-full ml-4"><p className='text-center text-white font-bold text-4xl'>6</p></div>

                            </div>


                        </div>
                    </div>
                </div>

                
            </div>

        </div>
    </div>;
};

export default CCM;
