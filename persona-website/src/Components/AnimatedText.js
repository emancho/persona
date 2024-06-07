import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

// == Description:
/* The component responsible for the Animated Titles on the webpage */

const AnimatedText = ({title}) => {
  const textRef = useRef(null);

  useEffect(() => {
    anime({
      targets: textRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeInOutQuad'
    });
  }, []);

  return (
    <div className="animated-text" ref={textRef} style={{ opacity: 0 }}>
        {title}
    </div>
  )
};

export default AnimatedText;
