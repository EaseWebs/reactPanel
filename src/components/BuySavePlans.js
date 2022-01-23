import React, { PureComponent } from 'react'

export class BuySavePlans extends PureComponent {
  render() {
    return (
      <div class='row g-6 g-xl-9'>
        {/*begin::Col*/}
        <div
          class='col-md-6 col-xxl-4'
          style={{
            border: '1px solid #95203D',
            borderRadius: '10px',
            background: '#FEF8F0',
          }}
        >
          {/*begin::Card*/}
          <div class='card' style={{ background: '#FEF8F0' }}>
            {/*begin::Card body*/}
            <div class='card-body d-flex flex-center flex-column pt-12 p-9'>
              {/*begin::Avatar*/}
              <div class='symbol symbol-65px symbol-circle mb-5'>
                <img src='./media//avatars/150-3.jpg' alt='image' />
                <div class='bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3'></div>
              </div>
              {/*end::Avatar*/}
              {/*begin::Name*/}
              <a
                href='#'
                class='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'
              >
                12 Months Standard Plan
              </a>
              {/*end::Name*/}
              {/*begin::Position*/}
              <div class='fw-bold text-gray-400 mb-6 text-center'>
                Buy 1 GRAM Per Month for 12 Months and Save 13.2 GRAM
              </div>
              {/*end::Position*/}
              {/*begin::Info*/}
              <div class='d-flex flex-center flex-wrap'>
                {/*begin::Stats*/}
                <div class='border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3 text-center'>
                  <div class='fs-6 fw-bolder text-gray-700'>1 GRAM</div>
                  <div class='fw-bold text-gray-400'>Buy</div>
                </div>
                {/*end::Stats*/}
                {/*begin::Stats*/}
                <div class='border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3 text-center'>
                  <div class='fs-6 fw-bolder text-gray-700'>13.2 GRAM</div>
                  <div class='fw-bold text-gray-400'>Save</div>
                </div>
                {/*end::Stats*/}
                {/*begin::Stats*/}

                {/*end::Stats*/}
              </div>
              {/*end::Info*/}

              <div class='col-lg-12'>
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
                    <span className='indicator-label'>Buy and Save</span>
                  </button>
                </div>
              </div>
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Card*/}
        </div>
        {/*end::Col*/}
        {/*end::Col*/}
      </div>
    )
  }
}

export default BuySavePlans
