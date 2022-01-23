import React, { PureComponent } from 'react'

export class CreateValue extends PureComponent {
  render() {
    return (
      <div class='w-lg-600px bg-body rounded  p-10 p-lg-15 mx-auto'>
        <form class='form w-100' novalidate='novalidate' id='kt_sign_up_form'>
          <div class='mb-10 text-center'>
            <h1
              class=' mb-3'
              style={{
                color: '#95203D',
              }}
            >
              Create Your Own Plan By Value
            </h1>
          </div>

          <div class='row fv-row mb-7'>
            <div class='col-xl-12'>
              <label class='form-label fw-bolder text-dark fs-6'>
                Enter Amount
              </label>
              <div class='position-relative mb-3'>
                <input
                  class='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder=''
                  name='first-name'
                  autocomplete='off'
                  style={{
                    background: '#FEF8F0',
                    width: '100%',
                    border: '1px solid #95203D',
                  }}
                />
                <span
                  class='position-absolute translate-middle top-50 end-0 me-n2'
                  data-kt-password-meter-control='visibility'
                  style={{
                    color: '#95203D',
                    fontSize: '16px',
                  }}
                >
                  INR
                </span>
              </div>
            </div>
          </div>
          <div class='mb-10 fv-row'>
            <div class='mb-1'>
              <label class='form-label fw-bolder text-dark fs-6'>
                Select Cycle Period
              </label>

              <select
                name='business_type'
                className='form-select form-select-lg form-select-solid'
                data-control='select2'
                data-placeholder='Select...'
                data-allow-clear='true'
                data-hide-search='true'
                style={{
                  background: '#FEF8F0',
                  width: '100%',
                  border: '1px solid #95203D',
                }}
              >
                <option></option>
                <option value='1'>Every Month</option>
                <option value='1'>Every Week</option>
                <option value='2'>Every Quater</option>
              </select>
            </div>
          </div>
          <div class='mb-10 fv-row'>
            <div class='mb-1'>
              <label class='form-label fw-bolder text-dark fs-6'>
                Enter Duration
              </label>

              <div class='position-relative mb-3'>
                <input
                  class='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder=''
                  name='email'
                  autocomplete='off'
                  style={{
                    background: '#FEF8F0',
                    width: '100%',
                    border: '1px solid #95203D',
                  }}
                />
              </div>
            </div>
          </div>
          <div class='row fv-row mb-7'>
            <div class='col-xl-12'>
              <label class='form-label fw-bolder text-dark fs-6'>
                Saving Gold
              </label>
              <div class='position-relative mb-3'>
                <input
                  class='form-control form-control-lg form-control-solid'
                  type='text'
                  placeholder=''
                  name='first-name'
                  autocomplete='off'
                  style={{
                    background: '#FEF8F0',
                    width: '100%',
                    border: '1px solid #95203D',
                  }}
                />
                <span
                  class='position-absolute translate-middle top-50 end-0 me-n2'
                  data-kt-password-meter-control='visibility'
                  style={{
                    color: '#95203D',
                    fontSize: '16px',
                  }}
                >
                  GRAM
                </span>
              </div>
            </div>
          </div>

          <div class='text-center'>
            <button
              type='button'
              id='kt_sign_up_submit'
              class='btn btn-lg btn-primary'
              style={{
                background: '#95203D',
                width: '100%',
              }}
            >
              <span class='indicator-label'>Proceed</span>
              <span class='indicator-progress'>
                Please wait...
                <span class='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateValue
