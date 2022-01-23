import React, { PureComponent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OfferSlider from '../components/OfferSlider'

import ToolBar from '../components/ToolBar'
import Collections from '../components/Collections'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Varieties from '../components/Varieties'

export class EShop extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <ToolBar title={'Eshop'} />
        <div
          id='kt_content_container'
          className='d-flex flex-column-fluid align-items-start container-xxl '
        >
          <div className='content flex-row-fluid' id='kt_content'>
            <OfferSlider />
            <div className='row g-5 g-xl-8 mt-2'>
              <div className='col-xl-12'>
                <h2 className='text-center'>Our Collections</h2>
              </div>
              <div className='col-xl-12'>
                <Collections />
              </div>
            </div>
            <div className='row g-5 g-xl-8 mt-2 px-3'>
              <div className='col-lg-6'>
                <div className='row g-5 g-xl-8 mt-2'>
                  <div className='col-xl-12'>
                    <h2 className='text-center'>Our Categories</h2>
                  </div>
                  <Categories />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='row g-5 g-xl-8 mt-2'>
                  <div className='col-xl-12'>
                    <h2 className='text-center'>Our Products</h2>
                  </div>
                  <Products />
                </div>
              </div>
            </div>
            <div className='row g-5 g-xl-8 mt-2'>
              <div className='col-xl-12'>
                <h2 className='text-center'>Our Varieties</h2>
              </div>
              <div className='col-xl-12'>
                <Varieties />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default EShop
