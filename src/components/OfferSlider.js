import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './offerSlider.css'
import axios from 'axios'
const OfferSlider = () => {
  const [SliderImages, setSlide] = useState([])
  useEffect(() => {
    const fetchSlider = async () => {
      const { data } = await axios.get(
        'https://goldv2.herokuapp.com/api/slider'
      )

      setSlide(data)
    }
    fetchSlider()
  }, [])

  const imgSlides = () =>
    SliderImages.map((num) => (
      <div className='imgpad'>
        <img className='imgdetails' src={num.image} />
      </div>
    ))
  return (
    <div className='App'>
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={2}
        autoplay={true}
        arrows={false}
        autoplaySpeed={3000}
      >
        {imgSlides()}
      </Slider>
    </div>
  )
}

export default OfferSlider
