import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './ShopOffers.css'
import axios from 'axios'
const Collections = () => {
  const [SliderImages, setSlide] = useState([])
  useEffect(() => {
    const fetchSlider = async () => {
      const { data } = await axios.get(
        'http://13.59.57.74:5000/api/collection/'
      )

      setSlide(data)
    }
    fetchSlider()
  }, [])

  return (
    <Slider
      dots={false}
      slidesToShow={1}
      slidesToScroll={2}
      autoplay={true}
      arrows={false}
      autoplaySpeed={3000}
    >
      {SliderImages.map((num) => (
        <div className='imgpad'>
          <img
            className='imgdetails'
            src={num.images[0]}
            collectionID={num.id}
          />
        </div>
      ))}
    </Slider>
  )
}
export default Collections
