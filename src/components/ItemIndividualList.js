import React, { PureComponent } from 'react'

export class ItemIndividualList extends PureComponent {
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
              <div class='symbol symbol-100px symbol-circle mb-5'>
                <img src='assets/w1.jpeg' alt='image' />
              </div>
              {/*end::Avatar*/}
              {/*begin::Name*/}
              <a
                href='#'
                class='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'
              >
                24 KT Gold Ring
              </a>
              {/*end::Name*/}
              {/*begin::Position*/}

              {/*end::Position*/}
              {/*begin::Info*/}
              <div class='d-flex flex-center flex-wrap'>
                {/*begin::Stats*/}
                <div class='border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3 text-center'>
                  <div class='fs-6 fw-bolder text-gray-700'>Rs. 1,73,000</div>
                  <div class='fw-bold text-gray-400'>Incl Taxes</div>
                </div>
                {/*end::Stats*/}
                {/*begin::Stats*/}

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
                    <span className='indicator-label'>Check Details</span>
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

export default ItemIndividualList
