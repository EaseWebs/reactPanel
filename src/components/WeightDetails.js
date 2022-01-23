import React, { PureComponent } from 'react'

export class WeightDetails extends PureComponent {
  render() {
    return (
      <div class='card card-xl-stretch'>
        {/*begin::Header*/}

        {/*end::Header*/}
        {/*begin::Body*/}
        <div class='card-body p-0'>
          {/*begin::Chart*/}

          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div class='card-p position-relative' style={{ marginTop: '30%' }}>
            {/*begin::Row*/}
            <h1
              className='text-center'
              style={{
                color: '#95203D',
              }}
            >
              Subscription Details
            </h1>
            <div class='row g-0'>
              {/*begin::Col*/}
              <div
                class='col  px-6 py-3 rounded-2 me-7 mb-2'
                style={{
                  background: '#FEF8F0',
                  width: '100%',
                  border: '1px solid #95203D',
                }}
              >
                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                <span class='d-block my-5'>2 GRAM</span>
                {/*end::Svg Icon*/}
                <p
                  class=' fw-bold fs-6'
                  style={{
                    color: '#95203D',
                  }}
                >
                  Selected Weight
                </p>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div
                class='col  px-6 py-3 rounded-2 me-7 mb-2'
                style={{
                  background: '#FEF8F0',
                  width: '100%',
                  border: '1px solid #95203D',
                }}
              >
                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                <span class='d-block my-5'>2 GRAM</span>
                {/*end::Svg Icon*/}
                <p
                  class=' fw-bold fs-6'
                  style={{
                    color: '#95203D',
                  }}
                >
                  Bonous Approx
                </p>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div class='row g-0'>
              {/*begin::Col*/}
              <div
                class='col  px-6 py-3 rounded-2 me-7 mb-2'
                style={{
                  background: '#FEF8F0',
                  width: '100%',
                  border: '1px solid #95203D',
                }}
              >
                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                <span class='d-block my-5'>2 GRAM</span>
                {/*end::Svg Icon*/}
                <p
                  class=' fw-bold fs-6'
                  style={{
                    color: '#95203D',
                  }}
                >
                  Saving Gold
                </p>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div
                class='col  px-6 py-3 rounded-2 me-7 mb-2'
                style={{
                  background: '#FEF8F0',
                  width: '100%',
                  border: '1px solid #95203D',
                }}
              >
                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                <span class='d-block my-5'>2 GRAM</span>
                {/*end::Svg Icon*/}
                <p
                  class=' fw-bold fs-6'
                  style={{
                    color: '#95203D',
                  }}
                >
                  Total Gold By Maturity
                </p>
              </div>
              {/*end::Col*/}
            </div>

            {/*end::Row*/}
          </div>
          {/*end::Stats*/}
        </div>
        {/*end::Body*/}
      </div>
    )
  }
}

export default WeightDetails
