import React, { PureComponent } from 'react'

export class Otp extends PureComponent {
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
            <a href='/' class='mb-12'>
              <img alt='Logo' src='./media/logos/logo-1.svg' class='h-40px' />
            </a>

            <div class='w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
              <form
                class='form w-100 mb-10'
                novalidate='novalidate'
                id='kt_sing_in_two_steps_form'
              >
                <div class='text-center mb-10'>
                  <img
                    alt='Logo'
                    class='mh-125px'
                    src='./media/svg/misc/smartphone.svg'
                  />
                </div>

                <div class='text-center mb-10'>
                  <h1
                    class=' mb-3'
                    style={{
                      color: '#95203D',
                    }}
                  >
                    Phone Verification
                  </h1>

                  <div class='text-muted fw-bold fs-5 mb-5'>
                    Enter the verification code we sent to
                  </div>

                  <div class='fw-bolder text-dark fs-3'>******7859</div>
                </div>

                <div class='mb-10 px-md-10'>
                  <div class='fw-bolder text-start text-dark fs-6 mb-1 ms-1'>
                    Type your 4 digit security code
                  </div>

                  <div class='d-flex flex-wrap flex-stack'>
                    <input
                      type='text'
                      data-inputmask="'mask': '9', 'placeholder': ''"
                      maxlength='1'
                      class='form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2'
                      value='3'
                      style={{
                        background: '#FEF8F0',
                        width: '100%',
                        border: '1px solid #95203D',
                      }}
                    />
                    <input
                      type='text'
                      data-inputmask="'mask': '9', 'placeholder': ''"
                      maxlength='1'
                      class='form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2'
                      value='0'
                      style={{
                        background: '#FEF8F0',
                        width: '100%',
                        border: '1px solid #95203D',
                      }}
                    />
                    <input
                      type='text'
                      data-inputmask="'mask': '9', 'placeholder': ''"
                      maxlength='1'
                      class='form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2'
                      value='7'
                      style={{
                        background: '#FEF8F0',
                        width: '100%',
                        border: '1px solid #95203D',
                      }}
                    />
                    <input
                      type='text'
                      data-inputmask="'mask': '9', 'placeholder': ''"
                      maxlength='1'
                      class='form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover mx-1 my-2'
                      value=''
                      style={{
                        background: '#FEF8F0',
                        width: '100%',
                        border: '1px solid #95203D',
                      }}
                    />
                  </div>
                </div>

                <div class='d-flex flex-center'>
                  <button
                    type='button'
                    id='kt_sing_in_two_steps_submit'
                    class='btn btn-lg btn-primary fw-bolder'
                    style={{
                      background: '#95203D',
                      width: '100%',
                    }}
                  >
                    <span class='indicator-label'>Verify OTP</span>
                    <span class='indicator-progress'>
                      Please wait...
                      <span class='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </button>
                </div>
              </form>

              <div class='text-center fw-bold fs-5'>
                <span class='text-muted me-1'>Didn’t get the code ?</span>
                <a
                  href='#'
                  class='link-primary fw-bolder fs-5 me-1'
                  style={{
                    color: '#95203D',
                  }}
                >
                  Resend
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Otp
