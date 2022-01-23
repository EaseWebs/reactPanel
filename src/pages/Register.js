import React, { PureComponent } from 'react'

export class Register extends PureComponent {
  render() {
    return (
      <div class='d-flex flex-column flex-root'>
        <div
          class='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
          style={{
            'background-image': 'url(./media/illustrations/sigma-1/14.png',
          }}
        >
          <div class='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
            <a href='../../demo2/dist/index.html' class='mb-12'>
              <img alt='Logo' src='./media/logos/logo-1.svg' class='h-40px' />
            </a>

            <div class='w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
              <form
                class='form w-100'
                novalidate='novalidate'
                id='kt_sign_up_form'
              >
                <div class='mb-10 text-center'>
                  <h1
                    class=' mb-3'
                    style={{
                      color: '#95203D',
                    }}
                  >
                    Create an Account
                  </h1>

                  <div class='text-gray-400 fw-bold fs-4'>
                    Already have an account?
                    <a
                      href=''
                      class=' fw-bolder'
                      style={{
                        color: '#95203D',
                      }}
                    >
                      Sign in here
                    </a>
                  </div>
                </div>

                <div class='row fv-row mb-7'>
                  <div class='col-xl-12'>
                    <label class='form-label fw-bolder text-dark fs-6'>
                      Full Name
                    </label>
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
                  </div>
                </div>

                <div class='mb-10 fv-row' data-kt-password-meter='true'>
                  <div class='mb-1'>
                    <label class='form-label fw-bolder text-dark fs-6'>
                      Email Address
                    </label>

                    <div class='position-relative mb-3'>
                      <input
                        class='form-control form-control-lg form-control-solid'
                        type='email'
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

                <div class='fv-row mb-5'>
                  <label class='form-label fw-bolder text-dark fs-6'>
                    Date of Birth
                  </label>
                  <input
                    class='form-control form-control-lg form-control-solid'
                    type='date'
                    placeholder=''
                    name='dob'
                    autocomplete='off'
                    style={{
                      background: '#FEF8F0',
                      width: '100%',
                      border: '1px solid #95203D',
                    }}
                  />
                </div>
                <div class='fv-row mb-7'>
                  <label class='form-label fw-bolder text-dark fs-6'>
                    PAN Number
                  </label>
                  <input
                    class='form-control form-control-lg form-control-solid'
                    type='text'
                    placeholder=''
                    name='pan'
                    autocomplete='off'
                    style={{
                      background: '#FEF8F0',
                      width: '100%',
                      border: '1px solid #95203D',
                    }}
                  />
                </div>
                <div class='fv-row mb-7'>
                  <label class='form-label fw-bolder text-dark fs-6'>
                    Referal Code (optional)
                  </label>
                  <input
                    class='form-control form-control-lg form-control-solid'
                    type='text'
                    placeholder=''
                    name='refCode'
                    autocomplete='off'
                    style={{
                      background: '#FEF8F0',
                      width: '100%',
                      border: '1px solid #95203D',
                    }}
                  />
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
                    <span class='indicator-label'>Register</span>
                    <span class='indicator-progress'>
                      Please wait...
                      <span class='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
