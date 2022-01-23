import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './offerSlider.css'
export class SubscriptionSlider extends Component {
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
      <>
        <div className='card card-xl-stretch mb-xl-3'>
          <div className='card-header border-0 py-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>
                Buy Instant Gold
              </span>
              <span className='text-muted fw-bold fs-7'>
                Buy 24 KT 999.9 Fineness Instant Gold
              </span>
            </h3>
          </div>

          <div className='card-body d-flex flex-column'>
            <div className=''>
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
              </div>{' '}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SubscriptionSlider
