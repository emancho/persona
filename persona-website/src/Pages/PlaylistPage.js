import React from 'react';
import ClickableImage from '../Components/ClickableImage'
import backButton from '../Images/fast-backward.png'
import playButton from '../Images/play-button.png'
import forwardButton from '../Images/fast-forward.png'

function PlaylistPage() {
  return (
    <div className="green-background">
      <div className="content-container">
        <img
          src="path_to_your_image.jpg" // Replace with your image path
          alt="Centered Image"
          className="centered-image"
        />
        <div className="text-container">
          <h2>Ed____d w/o the war</h2>
          <p>Personal Website</p>
        </div>
      </div>
      <div className="button-container">
        <div className='button sectiom'>
            {/* backwards button - Socials */}
            < ClickableImage className='fast-backward-button' src={backButton} alt='this button will lead to the socials page. Backward Button' onClick={false}/>
            {/* play button - About me page */}
            < ClickableImage className='play-button' src='https://clipart-library.com/images/8i65B8AXT.png' alt='this button will lead to the about me page. Play button' onClick={false}/> 
            {/* forward button - Creative Projects */}
            < ClickableImage className='fast-foward-button' src={forwardButton} alt='this button will lead to the creative outlet page. Forward Button' onClick={false}/>  
        <div/>
      
      </div>
      </div>
    </div>
  );
}

export default PlaylistPage;