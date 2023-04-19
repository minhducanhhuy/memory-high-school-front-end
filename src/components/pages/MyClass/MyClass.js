import React, { useEffect, useState } from 'react';
import './MyClass.css';
import slide1 from '../../../img/slides/slide_1.JPG';
import slide2 from '../../../img/slides/slide_2.JPG';
import slide3 from '../../../img/slides/slide_3.JPG';
import slide4 from '../../../img/slides/slide_4.JPG';

function MyClass() {
  const slides = [slide1, slide2, slide3, slide4];
  const [count, setCount] = useState(0);

  const prevSlide = () => {
    let newCount = count - 1;
    if (newCount < 0) newCount = slides.length - 1;
    setCount(newCount);
  };

  const nextSlide = () => {
    let newCount = count + 1;
    if (newCount >= slides.length) newCount = 0;
    setCount(newCount);
  };

  // console.log(slides[0]);

  return (
    <div className="myclass">
      <div className="myclass-slide">
        <div className="myclass-slide_img " style={{ backgroundImage: `url(${slides[count]})` }}>
          <div className="slide_container">
            <div onClick={prevSlide} className="btn-left">
              <i class="btn-icon fa-solid fa-angle-left"></i>
            </div>
            <div onClick={nextSlide} className="btn-right">
              <i class="btn-icon fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClass;
