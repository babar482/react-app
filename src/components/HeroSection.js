import React from 'react';
import profile from '../ass/images/portfolio.jpg'


function HeroSection() {
  return (
    <>
        <div className='container  hero-setion'>
          <div className='row'>
              <div className='col col-sm-12 col-md-6 col-lg-6'>
               <h1 className='title-section'>Hi, Babar Here</h1>
                <h3 className='subheading'>Software Engineer</h3>
              </div>
              <div className='col col-sm-12 col-md-6 col-lg-6'>
                <img src={profile} alt="profile" width={250} height={250} style={{ borderRadius: '60%' }}/>

              </div>
          </div>
        </div>
    </>
  );
}

export default HeroSection;

