import React, { useState } from 'react';

const images = [
  'https://placekitten.com/300/205',
  'https://placekitten.com/300/201',
  'https://placekitten.com/300/202',
  // ... Diğer görüntü URL'leri
];

const App = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div className='carousel'>
      <button onClick={goToPreviousImage}> ← </button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button onClick={goToNextImage}>→</button>
    </div>
  )
}
export default App