import React from 'react'
import './MiddelSection.scss'
import firstlogo from '../../assets/images/firstlogo.svg'
import Button from '../../component/button/Button'
import { ParallaxLayer } from '@react-spring/parallax'

function MiddelSection() {
  return (
    <>
      <div>
        <ParallaxLayer offset={1}
          speed={0.1}

        >
          <img src={firstlogo} alt='' className='main_image' style={{ marginLeft: '10%', marginTop: "4%" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3}
          speed={2}


        >
          <div className='middel_div_text' style={{ marginRight: '10%' }}>
            <h3 style={{ color: '#F29100' }}>What is the Orditwon Appstore?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Button />
          </div>
        </ParallaxLayer>
      </div>
    </>
  )
}

export default MiddelSection
