import React, { Component } from 'react'

class Trends extends Component {
  render() {
    return (
      <>
        <div className='card card-xl-stretch mb-xl-3'>
          <div className='card-header border-0 py-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>Trends</span>
              <span className='text-muted fw-bold fs-7'>Latest trends</span>
            </h3>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
              >
                <span className='svg-icon svg-icon-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                  >
                    <g
                      stroke='none'
                      stroke-width='1'
                      fill='none'
                      fill-rule='evenodd'
                    >
                      <rect
                        x='5'
                        y='5'
                        width='5'
                        height='5'
                        rx='1'
                        fill='#000000'
                      />
                      <rect
                        x='14'
                        y='5'
                        width='5'
                        height='5'
                        rx='1'
                        fill='#000000'
                        opacity='0.3'
                      />
                      <rect
                        x='5'
                        y='14'
                        width='5'
                        height='5'
                        rx='1'
                        fill='#000000'
                        opacity='0.3'
                      />
                      <rect
                        x='14'
                        y='14'
                        width='5'
                        height='5'
                        rx='1'
                        fill='#000000'
                        opacity='0.3'
                      />
                    </g>
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>

              <div
                className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3'
                data-kt-menu='true'
              >
                <div className='menu-item px-3'>
                  <div className='menu-content text-muted pb-2 px-3 fs-7 text-uppercase'>
                    Payments
                  </div>
                </div>

                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Create Invoice
                  </a>
                </div>

                <div className='menu-item px-3'>
                  <a href='#' className='menu-link flex-stack px-3'>
                    Create Payment
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                      title='Specify a target name for future usage and reference'
                    ></i>
                  </a>
                </div>

                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Generate Bill
                  </a>
                </div>

                <div
                  className='menu-item px-3'
                  data-kt-menu-trigger='hover'
                  data-kt-menu-placement='right-end'
                >
                  <a href='#' className='menu-link px-3'>
                    <span className='menu-title'>Subscription</span>
                    <span className='menu-arrow'></span>
                  </a>

                  <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link px-3'>
                        Plans
                      </a>
                    </div>

                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link px-3'>
                        Billing
                      </a>
                    </div>

                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link px-3'>
                        Statements
                      </a>
                    </div>

                    <div className='separator my-2'></div>

                    <div className='menu-item px-3'>
                      <div className='menu-content px-3'>
                        <label className='form-check form-switch form-check-custom form-check-solid'>
                          <input
                            className='form-check-input w-30px h-20px'
                            type='checkbox'
                            value='1'
                            checked='checked'
                            name='notifications'
                          />

                          <span className='form-check-label text-muted fs-6'>
                            Recuring
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='menu-item px-3 my-1'>
                  <a href='#' className='menu-link px-3'>
                    Settings
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='card-body d-flex flex-column'>
            <div
              className='mixed-widget-5-chart card-rounded-top'
              data-kt-chart-color='success'
              style='height: 150px'
            ></div>

            <div className='mt-5'>
              <div className='d-flex flex-stack mb-5'>
                <div className='d-flex align-items-center me-2'>
                  <div className='symbol symbol-50px me-3'>
                    <div className='symbol-label bg-light'>
                      <img
                        src='assets/media/svg/brand-logos/plurk.svg'
                        className='h-50'
                        alt=''
                      />
                    </div>
                  </div>

                  <div>
                    <a
                      href='#'
                      className='fs-6 text-gray-800 text-hover-primary fw-bolder'
                    >
                      Top Authors
                    </a>
                    <div className='fs-7 text-muted fw-bold mt-1'>
                      Ricky Hunt, Sandra Trepp
                    </div>
                  </div>
                </div>

                <div className='badge badge-light fw-bold py-4 px-3'>+82$</div>
              </div>

              <div className='d-flex flex-stack mb-5'>
                <div className='d-flex align-items-center me-2'>
                  <div className='symbol symbol-50px me-3'>
                    <div className='symbol-label bg-light'>
                      <img
                        src='assets/media/svg/brand-logos/figma-1.svg'
                        className='h-50'
                        alt=''
                      />
                    </div>
                  </div>

                  <div>
                    <a
                      href='#'
                      className='fs-6 text-gray-800 text-hover-primary fw-bolder'
                    >
                      Top Sales
                    </a>
                    <div className='fs-7 text-muted fw-bold mt-1'>
                      PitStop Emails
                    </div>
                  </div>
                </div>

                <div className='badge badge-light fw-bold py-4 px-3'>+82$</div>
              </div>

              <div className='d-flex flex-stack'>
                <div className='d-flex align-items-center me-2'>
                  <div className='symbol symbol-50px me-3'>
                    <div className='symbol-label bg-light'>
                      <img
                        src='assets/media/svg/brand-logos/vimeo.svg'
                        className='h-50'
                        alt=''
                      />
                    </div>
                  </div>

                  <div className='py-1'>
                    <a
                      href='#'
                      className='fs-6 text-gray-800 text-hover-primary fw-bolder'
                    >
                      Top Engagement
                    </a>
                    <div className='fs-7 text-muted fw-bold mt-1'>KT.com</div>
                  </div>
                </div>

                <div className='badge badge-light fw-bold py-4 px-3'>+82$</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Trends
