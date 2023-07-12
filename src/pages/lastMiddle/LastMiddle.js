import React from 'react'
import './LastMiddle.scss'
import logo2 from '../../assets/images/logo2.svg'
import Button from '../../component/button/Button'
import { ParallaxLayer } from '@react-spring/parallax'

function LastMiddle() {
    return (
        <>
            <div className='main_div_text'>
                <ParallaxLayer offset={2}
                    speed={0.5}
                >

                    <div className='middel_div_text' style={{ marginRight: '55%' }}>
                        <h3 style={{ color: '#B837FC' }}>What is the Orditwon Appstore?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        {/* the button component renders its fully dynamic */}
                        <Button color='#B837FC' />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={2}
                    sticky={{ start: 2.1, end: 2.1 }}

                >
                    <img src={logo2} alt='' className='logo_image' style={{ marginLeft: '60%', marginTop: '-10%' }} />
                </ParallaxLayer>

            </div>
        </>
    )
}

export default LastMiddle
