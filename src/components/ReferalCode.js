import React, { Component } from 'react'

export class ReferalCode extends Component {
  render() {
    return (
      <>
        <div className='card card-xl-stretch mb-xl-3'>
          <div className='card-header border-0 py-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>
                Refer &amp; Earn
              </span>
              <span className='text-muted fw-bold fs-7'>
                Share to Your freinds and family and earn gold
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
                  <div class='mb-10 text-center'>
                    <h1 class='text-dark mb-3'>Your Referal Code</h1>

                    <div class='text-gray-400 fw-bold fs-4'>BKS_GHDJDFG</div>
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
                      <span className='indicator-label'>Refer Now</span>
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

export default ReferalCode
