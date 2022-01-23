import React, { PureComponent } from 'react'

export class Welcome extends PureComponent {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)

    fetch('http://13.59.57.74:5000/api/auth/register', {
      method: 'POST',
      body: data,
    })
  }
  render() {
    return (
      <div className='d-flex flex-column flex-root'>
        <div
          className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
          style={{
            backgroundImage: 'url(./media/illustrations/sigma-1/14.png)',
          }}
        >
          <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
            <a href='/' className='mb-12'>
              <img
                alt='Logo'
                src='./media/logos/logo-1.svg'
                className='h-40px'
              />
            </a>

            <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
              <form
                className='form w-100'
                id='kt_sign_in_form'
                onSubmit={this.handleSubmit}
              >
                <div className='text-center mb-20'>
                  <img
                    alt='Logo'
                    className='mh-250px'
                    src='./media/svg/misc/smartphone.svg'
                  />
                </div>
                <div className='text-center mb-10'>
                  <h1
                    className='text-dark mb-3'
                    style={{
                      color: '#95203D',
                    }}
                  >
                    Sign In to BKS MyGold
                  </h1>
                </div>

                <div className='fv-row mb-10'>
                  <label className='form-label fs-6 fw-bolder text-dark'>
                    Enter Phone Number
                  </label>

                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='text'
                    name='mobile'
                    maxLength='13'
                    style={{
                      background: '#FEF8F0',
                      width: '100%',
                      border: '1px solid #95203D',
                    }}
                  />
                </div>
                <div className='fv-row mb-10'>
                  <label className='form-label fs-6 fw-bolder text-dark'>
                    Send Whatsapp Notication
                  </label>

                  <input
                    className='form-control form-control-lg form-control-solid'
                    type='checkbox'
                    name='isWhatsapp'
                    value='true'
                  />
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    id='kt_sign_in_submit'
                    className='btn btn-lg btn-primary w-100 mb-5'
                    style={{
                      background: '#95203D',
                      width: '100%',
                    }}
                  >
                    <span className='indicator-label'>Proceed</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='d-flex flex-center flex-column-auto p-10'>
            <div className='d-flex align-items-center fw-bold fs-6'>
              <a
                href='https://keenthemes.com'
                className='px-2'
                style={{
                  color: '#95203D',
                }}
              >
                Change Language
              </a>
              <a
                href='mailto:support@keenthemes.com'
                className=' px-2'
                style={{
                  color: '#95203D',
                }}
              >
                Guest Screen
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
