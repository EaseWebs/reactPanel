import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './offerSlider.css'
export class OfferSlider extends Component {
  render() {
    var images = [
      { img: 'assets/w1.jpeg' },
      { img: 'assets/w2.jpeg' },
      { img: 'assets/w3.jpeg' },
      { img: 'assets/w4.jpeg' },
      { img: 'assets/w5.jpeg' },
    ]
    var imgSlides = () =>
      images.map((num) => (
        <div className='imgpad'>
          <img className='imgdetails' src={num.img} width='100%' />
        </div>
      ))
    return (
      <div className='App'>
        <Slider
          dots={false}
          slidesToShow={2}
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
}
export default OfferSlider
