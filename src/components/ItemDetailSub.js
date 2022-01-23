import React, { PureComponent } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './itemSlider.css'

export class ItemDetailSub extends PureComponent {
  render() {
    var images = [{ img: 'assets/w1.jpeg' }]
    var imgSlides = () =>
      images.map((num) => (
        <div className='imgpad'>
          <img className='imgdetails' src={num.img} width='100%' />
        </div>
      ))
    return (
      <div class='card card-flush pt-3 mb-5 mb-xl-10'>
        {/*begin::Card header*/}

        <div class='card-body pt-3'>
          {/*begin::Section*/}
          <div class='mb-10'>
            {/*begin::Title*/}
            {/*end::Title*/}
            {/*begin::Details*/}
            <div class='d-flex flex-wrap py-5'>
              {/*begin::Row*/}
              <div class='flex-equal me-5'>
                {/*begin::Details*/}

                <div className='App'>
                  <Slider
                    dots={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    arrows={false}
                    autoplaySpeed={3000}
                  >
                    {imgSlides()}
                  </Slider>
                </div>

                {/*end::Details*/}
              </div>
              {/*end::Row*/}
              {/*begin::Row*/}
              <div class='flex-equal'>
                {/*begin::Details*/}
                <table class='table fs-6 fw-bold gs-0 gy-2 gx-2 m-0'>
                  {/*begin::Row*/}
                  <tr>
                    <td class=' min-w-175px w-175px'>24 KT gold Coin</td>
                  </tr>
                  {/*end::Row*/}
                  {/*begin::Row*/}
                  <tr>
                    <td class='text-gray-400'>SKU Number</td>
                    <td class='text-gray-800'>Rs 5000</td>
                  </tr>
                  {/*end::Row*/}
                  {/*begin::Row*/}
                  <tr>
                    <td class='text-gray-400'>Description</td>
                    <td class='text-gray-800'>Monthly</td>
                  </tr>
                  {/*end::Row*/}
                  {/*begin::Row*/}
                  <tr>
                    <td class='text-gray-400'>Compostion</td>
                    <td class='text-gray-800'>12 Months</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href='../../demo2/dist/apps/subscriptions/add.html'
                        class='btn btn-light-primary'
                        style={{
                          background: '#95203D',
                          width: '100%',
                          color: '#ffffff',
                        }}
                      >
                        Place Order
                      </a>
                    </td>
                  </tr>
                  {/*end::Row*/}
                </table>
                {/*end::Details*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Section*/}
          {/*begin::Section*/}
          <div class='mb-0'>
            {/*begin::Title*/}
            <h5 class='mb-4'>Recent Transactions:</h5>
            {/*end::Title*/}
            {/*begin::Product table*/}
            <div class='table-responsive'>
              {/*begin::Table*/}
              <table class='table align-middle table-row-dashed fs-6 gy-4 mb-0'>
                {/*begin::Table head*/}
                <thead>
                  {/*begin::Table row*/}
                  <tr class='border-bottom border-gray-200 text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                    <th class='min-w-150px'>Tax Applied</th>
                    <th class='min-w-125px'>Percentage</th>

                    <th class='text-end min-w-70px'>Amount</th>
                  </tr>
                  {/*end::Table row*/}
                </thead>
                {/*end::Table head*/}
                {/*begin::Table body*/}
                <tbody class='fw-bold text-gray-800'>
                  <tr>
                    <td>
                      <div class='fw-normal text-gray-600'>GST</div>
                    </td>
                    <td>
                      <div class='fw-normal text-gray-600'>18%</div>
                    </td>

                    <td class='text-end'>Rs. 5000</td>
                  </tr>
                  <tr>
                    <td>
                      <div class='fw-normal text-gray-600'>Minting</div>
                    </td>
                    <td>
                      <div class='fw-normal text-gray-600'>5%%</div>
                    </td>

                    <td class='text-end'>Rs. 5000</td>
                  </tr>
                  <tr>
                    <td>
                      <div class='fw-normal text-gray-600'>Making Charges</div>
                    </td>
                    <td>
                      <div class='fw-normal text-gray-600'>10%</div>
                    </td>

                    <td class='text-end'>Rs. 5000</td>
                  </tr>
                </tbody>
                {/*end::Table body*/}
              </table>
              {/*end::Table*/}
            </div>
            {/*end::Product table*/}
          </div>
          {/*end::Section*/}
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
      </div>
    )
  }
}

export default ItemDetailSub
