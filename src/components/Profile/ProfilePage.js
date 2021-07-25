import React from 'react';

import S1BGHero from './s1BgHero';


import S3Body from './s3Body';


import S2SocialBio from './s2SocialBio';

function Profile() {
  return (
    <>
      {/*<Navbar transparent />*/}
      <main className="profile-page bgBottom">
        <S1BGHero />
        <section className="static py-16 bg-black ">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl animate-fade-in-fwd">
              <div className="px-4 md:px-6">              
                <S2SocialBio />
                <S3Body />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
