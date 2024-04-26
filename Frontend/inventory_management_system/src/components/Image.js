import React from 'react';
import styled from 'styled-components';

const FullWidthImage = styled.img`
  width: 100%;
  height: auto;
`;

function App() {
  return (
    <div className="container">
      <FullWidthImage src="path_to_your_image.jpg" alt="Your Image" />
    </div>
  );
}

export default App;
