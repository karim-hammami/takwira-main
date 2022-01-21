import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return <div>
      <div className='flex flex-col justify-center items-center'>
          <p className='text-green font-bold text-xl mt-12 mb-10'>COPYRIGHT © 2022. Rebound Dev.</p>
          <div className='flex items-center justify-between mb-10'>
            <SocialIcon className='mr-2' url="https://www.instagram.com/_takwira_/?hl=fr" />
            <SocialIcon className='mr-2' url="https://www.tiktok.com/@_takwira_?lang=en" />
            <SocialIcon className='mr-2' url="https://www.facebook.com/Takwira-105377218313151" />
            <SocialIcon url="contact@takwira.com.tn" />
          </div>
      </div>
  </div>;
};

export default Footer;
