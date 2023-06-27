import React from 'react'

import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div id='bio'>
      <div className='Normal'>
        <div className='one'>
          <img src='../assets/placer.jpeg' className='img' style={{ marginLeft: "9vw" }} />
          <h3 className='name'>Kyle</h3>
          <p className='parag' style={{ marginRight: "9vw" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='two'>
          <img src='../assets/placer.jpeg' className='img' style={{ marginRight: "9vw" }} />
          <h3 className='name'>Aubrey</h3>
          <p className='parag' style={{ marginLeft: "9vw" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className='reverse'></div>
      <div className='three'>
        <img src='../assets/placer.jpeg' className='img' style={{ marginLeft: "9vw" }} />
        <h3 className='name'>Will</h3>
        <p className='parag' style={{ marginRight: "9vw" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div className='four'>
        <img src='../assets/placer.jpeg' className='img' style={{ marginRight: "9vw" }} />
        <h3 className='name'>Halie</h3>
        <p className='parag' style={{ marginLeft: "9vw" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div className='product'>
        <h1 className='pdc-tit'>Our Product</h1>
        <p className='pdct'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}
export default AboutUs