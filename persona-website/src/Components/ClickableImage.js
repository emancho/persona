import React from 'react';

function ClickableImage(className, src, alt, onClick) {
  return (
    <div className={props.className}>
        <img
            alt={props.alt}
            onClick={props.clickFunc}
            src={props.pathname}
        />
    </div>
  );
}

export default ClickableImage;
