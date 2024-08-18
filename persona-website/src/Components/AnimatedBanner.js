import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import Typography from '@mui/material/Typography';
import { bannerTexts } from '../Constants';

const AnimatedBanner = () => {
  const textRef = useRef(null);
  const [currentText, setCurrentText] = useState(bannerTexts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animation = anime({
      targets: textRef.current,
      translateX: ['100%', '-100%'],
      duration: 15000,
      easing: 'linear',
      complete: () => {
        setTimeout(() => {
          // After the animation completes, select the next string
          const nextIndex = index === 0 
            ? Math.floor(Math.random() * (bannerTexts.length - 1)) + 1 
            : Math.floor(Math.random() * bannerTexts.length);
          setIndex(nextIndex);
          
          setCurrentText(bannerTexts[nextIndex]);
          
        }, 0); // Adjust the timeout duration if needed
      }
    });

    console.log('The current index is :' + index)
    console.log('The current str is: ' + bannerTexts[index])
    return () => animation.pause(); // Cleanup animation on unmount
  }, [index]);

  return (
    <>
        <Typography variant="h4" ref={textRef}>{currentText}</Typography>
    </>
  );
};

export default AnimatedBanner;
