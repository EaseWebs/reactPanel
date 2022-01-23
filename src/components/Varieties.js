import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './ShopOffers.css'
export class Varieties extends Component {
  render() {
    var images = [
      { img: 'assets/w6.jpeg' },
      { img: 'assets/w7.webp' },
      { img: 'assets/w8.webp' },
      { img: 'assets/h7.webp' },
    ]
    var imgSlides = () =>
      images.map((num) => (
        <div className='imgpad'>
          <img className='imgdetails img-fluid' src={num.img} width='10%' />
        </div>
      ))
    return (
      <div className='App'>
        <Slider
          dots={false}
          slidesToShow={3}
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
export default Varieties
