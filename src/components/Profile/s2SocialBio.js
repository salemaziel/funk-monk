import React from 'react';

import ProfileImg from './ProfileImg';

import ViaDelWeb from '../../images/Via-Del-Web_MAIN-LOGO-horizontal.png';


import SocialDesktop from './socialDesktop';
import SocialMobile from './socialMobile';

import { FaMapMarkerAlt } from 'react-icons/fa';


const S2SocialBio = () => (
  <>
    <div className="flex flex-wrap justify-center mb-32 md:mb-10">
      <ProfileImg />

      <SocialDesktop />
    </div>
    <div className="mt-12 text-center">
      <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800 font-ubuntu">
        El Monk
      </h3>
      <div className="my-2 text-sm font-bold leading-normal text-gray-500 uppercase font-ubuntu">
        <div className="flex flex-row justify-center text-center">
          <FaMapMarkerAlt size="1rem" className="mr-2" />{' '}
          <span className=""> Santa Ana, California</span>
        </div>
      </div>

      <div className="mt-8 mb-2 font-bold text-gray-700 font-ubuntu">
       {/* <div className="justify-center w-3/4 mx-auto md:w-1/4">
          <a href="https://viadelweb.com" rel="follow" title="Link to Via Del Web website">
            <img src={ViaDelWeb} alt="Via Del Web Logo" className="w-full" />
          </a>
</div> */}
        <i className="mr-2 text-lg text-gray-500 fas fa-briefcase"></i>
        just doing my spiritual thang
      </div>
    </div>

    <SocialMobile />
  </>
);

export default S2SocialBio;
