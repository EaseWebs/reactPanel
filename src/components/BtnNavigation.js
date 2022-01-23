import React, { Component } from 'react'

class BtnNavigation extends Component {
  render() {
    return (
      <div
        className='card card-xl-stretch '
        style={{
          background: '#FEF8F0',
          padding: '40px 5px',
        }}
      >
        <div className='card-body d-flex flex-column'>
          <div className='mt-5'>
            <div className='d-flex flex-stack mb-5'>
              <div className='d-flex align-items-center me-2'>
                <div className='symbol symbol-50px me-3'>
                  <div className='symbol-label bg-light'></div>
                </div>

                <div>
                  <a
                    href='#'
                    className='fs-6 text-gray-800 text-hover-primary fw-bolder'
                  >
                    Buy &amp; Save
                  </a>
                </div>
                {/*end::Title*/}
              </div>
              <div className='d-flex align-items-center me-2'>
                {/*begin::Symbol*/}
                <div className='symbol symbol-50px me-3'>
                  <div className='symbol-label bg-light'></div>
                </div>

                <div>
                  <a
                    href='#'
                    className='fs-6 text-gray-800 text-hover-primary fw-bolder'
                  >
                    Digital Gold
                  </a>
                </div>
                {/*end::Title*/}
              </div>

              {/*end::Section*/}
              {/*begin::Label*/}
            </div>
          </div>
          <div className='mt-5'>
            <div className='d-flex flex-stack mb-5'>
              <div className='d-flex align-items-center me-2'>
                {/*begin::Symbol*/}
                <div className='symbol symbol-50px me-3'>
                  <div className='symbol-label bg-light'></div>
                </div>

                <div>
                  <a
                    href='#'
                    className='fs-6 text-gray-800 text-hover-primary fw-bolder'
                  >
                    Book Gold
                  </a>
                </div>
                {/*end::Title*/}
              </div>
              <div className='d-flex align-items-center me-2'>
                {/*begin::Symbol*/}
                <div className='symbol symbol-50px me-3'>
                  <div className='symbol-label bg-light'></div>
                </div>

                <div>
                  <a
                    href='#'
                    className='fs-6 text-gray-800 text-hover-primary fw-bolder'
                  >
                    Shop E Gold
                  </a>
                </div>
                {/*end::Title*/}
              </div>

              {/*end::Section*/}
              {/*begin::Label*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BtnNavigation
