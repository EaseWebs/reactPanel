import React, { useState, PureComponent } from 'react'
import axios from 'axios'
const Welcome = (props) => {
  const [loginData, setLoginData] = useState({
    phone: '',
    isWhatsapp: '',
  })
  const onChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }
  const headers = {
    'content-type': 'application/json',
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    var phone = Number(loginData.phone)

    var isWhatsapp = loginData.isWhatsapp === 'on' ? true : false

    const data = {
      mobile: phone,
      isWhatsapp: isWhatsapp,
    }
    axios
      .post(
        'http://13.59.57.74:5000/api/auth/register',
        { headers: headers },
        data
      )
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
  }

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
            <img alt='Logo' src='./media/logos/logo-1.svg' className='h-40px' />
          </a>

          <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
            <form
              className='form w-100'
              id='kt_sign_in_form'
              onSubmit={handleSubmit}
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
                  name='phone'
                  maxLength='13'
                  style={{
                    background: '#FEF8F0',
                    width: '100%',
                    border: '1px solid #95203D',
                  }}
                  value={loginData.phone}
                  onChange={onChange}
                  id='phone'
                />
              </div>
              <div className='fv-row mb-10'>
                <input
                  type='checkbox'
                  style={{
                    background: '#FEF8F0',
                    width: '25',
                    height: '25',
                  }}
                  name='isWhatsapp'
                  checked={loginData.isWhatsapp}
                  onChange={onChange}
                  id='isWhatsapp'
                />
                Send Whatsapp Notication
              </div>
              <div className='text-center'>
                <button
                  id='kt_sign_in_submit'
                  className='btn btn-lg btn-primary w-100 mb-5'
                  style={{
                    background: '#95203D',
                    width: '100%',
                  }}
                >
                  Proceed
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

export default Welcome
