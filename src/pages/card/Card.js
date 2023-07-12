import React from 'react'
import './card.scss'
import firstcard from '../../assets/images/firstcard.svg'
import reverscard2 from '../../assets/images/reverscard2.svg'
import cardtext from '../../assets/images/cardtext.svg'



function Card() {
  return (
    <>
      {/* A <div> element as the root container. */}
      <div>
        {/* Inside the root <div>, there are two nested <div> elements */}

        {/* The first <div> has a class name 'text_div'. It contains an <img> element that displays the SVG image referred to by the cardtext variable. */}
        <div className='text_div'>
          <img src={cardtext} alt='' />
        </div>
        {/* The second <div> has a class name 'main_image_div'. It contains two <img> elements: one displaying the SVG image referred to by the firstcard variable, 
        and the other displaying the SVG image referred to by the reverscard2 variable. */}
        <div className='main_image_div'>
          <img src={firstcard} alt='' />
          <img src={reverscard2} alt='' />
        </div>
      </div>
    </>
  )
}

export default Card
