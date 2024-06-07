import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => (
  <Carousel 
    autoPlay 
    infiniteLoop 
    showThumbs={false} 
    showStatus={false} 
    transitionTime={500} // Adjust the transition time as needed (500ms is the default)
    swipeable={true} 
    emulateTouch={true}
    useKeyboardArrows={true} // Allow keyboard navigation
  >
    <div>
      <img src="/images/tire1.jpg" alt="Tyre 1" />
    </div>
    <div>
      <img src="/images/tire2.jpg" alt="Tyre 2" />
    </div>
    <div>
      <img src="/images/tire3.jpg" alt="Tyre 3" />
    </div>
    <div>
      <img src="/images/tire4.jpg" alt="Tyre 4" />
    </div>
  </Carousel>
);

export default CarouselComponent;
