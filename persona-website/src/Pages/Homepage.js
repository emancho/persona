import React from 'react';

function HomePage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="path_to_image" alt="Sample" style={{ width: '100px' }} />
        <div>
          <h1>Sample Title</h1>
          <p>Subtitle goes here</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;