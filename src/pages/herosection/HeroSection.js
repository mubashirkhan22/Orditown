import React from 'react'
import './HeroSection.scss'
import img2 from '../../assets/images/logo_text.svg'
import Button from '../../component/button/Button';
// Imports the TypewriterEffect component from the './TypewriterEffect' file.
import TypewriterEffect from './TypewriterEffect';


function HeroSection() {
  return (
    <>
      <div>
        <h4 style={{ color: 'white', textAlign: "center" }}>Welcome to</h4>
        <div style={{ display: "flex", justifyContent: "center" }} >
          <img src={img2} alt='' />
        </div>

        {/* element with inline styles setting the display to flex, justifying the content to the center, 
        and aligning the items to the center. It contains the TypewriterEffect component and its dynamic. */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TypewriterEffect />
        </div>

        {/* A <div> element with a class name 'buttons_div'. It contains two Button components and its also dynamic. */}
        <div className='buttons_div'>
          <Button />
          <Button color='#B837FC' />
        </div>
      </div>
    </>
  )
}

export default HeroSection
