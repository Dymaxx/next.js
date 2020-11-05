import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import '../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function slider() {
  
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={36}
        
        infinite={true}
        totalSlides={4}
      >
          <div className=" relative">
        <Slider className="relative">
        
          <Slide index={0}><img src="/img/bg1.jpg" alt=""/></Slide>
          <Slide index={1}><img src="/img/bg2.jpg" alt=""/></Slide>
          <Slide index={2}><img src="/img/bg3.jpg" alt=""/></Slide>
          <Slide index={3}><img src="/img/bg4.jpg" alt=""/></Slide>
        </Slider>
        <ButtonBack className="ml-24" style={arrow}><FontAwesomeIcon icon={faChevronLeft} /></ButtonBack>
        <ButtonNext className="mr-24" style={arrowL}><FontAwesomeIcon icon={faChevronRight} /></ButtonNext>
        </div>
      </CarouselProvider>
    );
    
  
}
const arrow = {
    fontSize: '35px',
    color:'white',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',

  };

  const arrowL = {
    fontSize: '35px',
    color:'white',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '0',
  };