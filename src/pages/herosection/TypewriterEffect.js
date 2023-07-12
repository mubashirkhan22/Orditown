import React from 'react'
// This line imports the Typewriter component from the "typewriter-effect" library. 
// This library provides a typewriter-like effect for displaying text.
import Typewriter from "typewriter-effect";

function TypewriterEffect({ text }) {

  return (
    <>
      {/* This is an HTML <span> element with inline styling. 
    It sets the color to white and the font size to 30 pixels. */}
      <span style={{ color: 'white', fontSize: '30px' }}>

        {/* This is the Typewriter component from the imported library. It accepts an options prop, 
      which is an object containing configuration options for the typewriter effect. */}
        <Typewriter
        // This property within the options object specifies an array of strings that the typewriter will
        //  cycle through. Each string represents a line of text that will be displayed.
          options={{
            strings: [
              "We Build.",
              "Developer.",
              "Deep Learning Engineer.",
              "Open Source Contributor.",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            typeSpeed: 50,
          }}
        />
      </span>
    </>
  )
}

export default TypewriterEffect
