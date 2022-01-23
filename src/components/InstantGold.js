import React, { Component } from 'react'

export class InstantGold extends Component {
  render() {
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
              <form
                className='form w-100'
                novalidate='novalidate'
                id='kt_sign_up_form'
              >
                <div className='d-flex align-items-center mb-10'>
                  <div className='border-bottom border-gray-300 mw-50 w-100'></div>

                  <div className='border-bottom border-gray-300 mw-50 w-100'></div>
                </div>

                <div className='row fv-row mb-7'>
                  <div className='col-xl-6'>
                    <label className='form-label fw-bolder text-dark fs-6'>
                      Enter Weight
                    </label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='In GRAM'
                      name='first-name'
                      autocomplete='off'
                      style={{
                        background: '#FEF8F0',
                        width: '100%',
                        border: '1px solid #95203D',
                      }}
                    />
                  </div>

                  <div className='col-xl-6'>
                    <label className='form-label fw-bolder text-dark fs-6'>
                      In Rupees
                    </label>
                    <input
                      className='form-control form-control-lg form-control-solid'
                      type='text'
                      placeholder='In INR'
                      name='last-name'
                      autocomplete='off'
                      style={{
                        background: '#FEF8F0',
                        width: '100%',
                        border: '1px solid #95203D',
                      }}
                    />
                  </div>
                </div>
                <div className='col-xl-12'>
                  <div className='text-center'>
                    <button
                      type='button'
                      id='kt_sign_up_submit'
                      className='btn btn-lg btn-primary'
                      style={{
                        background: '#95203D',
                        width: '100%',
                      }}
                    >
                      <span className='indicator-label'>Buy Instant Gold</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default InstantGold
