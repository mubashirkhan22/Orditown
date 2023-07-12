
import React, { useRef } from 'react'
// Imports the Parallax and ParallaxLayer components from the '@react-spring/parallax' module.
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import bg from '../src/assets/images/Background.svg'
import MiddelSection from './pages/middelsection/MiddelSection';
import LastMiddle from './pages/lastMiddle/LastMiddle';
import backArow from './assets/images/backArow.svg'
import HeroSection from './pages/herosection/HeroSection';
import './App.css';
import Card from './pages/card/Card';
import Footer from './pages/footersection/Footer';



export default function App() {
  // Creates a ref object using the useRef hook and assigns it to the variable parallax.
  const parallax = useRef()
  return (
    //The component's JSX code begins here. It returns the following elements:
    <>
      {/* The <Parallax> component from the '@react-spring/parallax' library. */}

      <div style={{ width: '100%', height: '100%' }}>
        <Parallax ref={parallax} pages={4} style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
        }}>
          {/* The first <ParallaxLayer> has an offset prop set to 0 and a speed prop set to 0.5. It renders the HeroSection component. */}
          <ParallaxLayer offset={0} speed={0.5} >
            <HeroSection />
          </ParallaxLayer>

          {/* The next line renders the MiddelSection component.fully dynamic */}
          <MiddelSection />

          {/* The next line renders the LastMiddle component.fully dynamic */}
          <LastMiddle />

          {/* The fourth <ParallaxLayer> has an offset prop set to 3, a speed prop set to 0.5, and a style prop with inline CSS properties for setting the top position. It renders the Card component.fully dynamic */}
          <ParallaxLayer offset={3} speed={0.5} style={{ top: '80px' }} >
            <Card />
          </ParallaxLayer>

          {/* The fifth <ParallaxLayer> has an offset prop set to 3.8, a speed prop set to 0.5, and a style prop with inline CSS properties for setting the top position. It renders the Footer component.fully dynamic */}
          <ParallaxLayer offset={3.8} speed={0.5} style={{ top: '50px' }} >
            <Footer />
          </ParallaxLayer>

          {/* The sixth <ParallaxLayer> has an offset prop set to 1 and a sticky prop with start and end properties defining the sticky behavior. It renders a <div> element with a class name and an <img> element displaying the back arrow icon.fully dynamic */}
          <ParallaxLayer offset={1} sticky={{ start: 0, end: 2.1 }} >
            <div className='image_div center-item' style={{ position: 'absolute', bottom: '0', left: '50%' }}>
              <img src={backArow} alt='' />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

