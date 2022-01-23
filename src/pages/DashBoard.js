import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OfferSlider from '../components/OfferSlider'
import BtnNavigation from '../components/BtnNavigation'
import ShopOffers from '../components/shopOffers'

import InstantGold from '../components/InstantGold'
import BookGold from '../components/BookGold'
import ReferalCode from '../components/ReferalCode'

class DashBoard extends Component {
  render() {
    return (
      <>
        <Header />

        <div
          id='kt_content_container'
          className='d-flex flex-column-fluid align-items-start container-xxl '
        >
          <div className='content flex-row-fluid' id='kt_content'>
            <OfferSlider />
            <div className='row g-5 g-xl-8 mt-2'>
              <div className='col-xl-4'>
                <BtnNavigation />
              </div>
              <div className='col-xl-8'>
                <ShopOffers />
              </div>
            </div>
            <div className='row g-5 g-xl-8 mt-2'>
              <div className='col-xl-4'>
                <InstantGold />
              </div>
              <div className='col-xl-4'>
                <BookGold />
              </div>
              <div className='col-xl-4'>
                <ReferalCode />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default DashBoard
