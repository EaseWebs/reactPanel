import React, { PureComponent } from 'react'
import Header from '../components/Header'
import ToolBar from '../components/ToolBar'
import Footer from '../components/Footer'
export class AddBank extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <ToolBar title={'Add Bank Account'} />
        <div
          id='kt_content_container'
          className='d-flex flex-column-fluid align-items-start container-xxl '
        >
          <div className='content flex-row-fluid' id='kt_content'>
            <div
              id='kt_content_container'
              class='d-flex flex-column-fluid align-items-start container-xxl'
            >
              {/*begin::Post*/}
              <div class='content flex-row-fluid' id='kt_content'>
                {/*begin::Card*/}
                <div class='card'>
                  {/*begin::Card body*/}
                  <div class='card-body'>
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
                            Add/Edit Bank Account
                          </h1>
                        </div>

                        <div class='row fv-row mb-7'>
                          <div class='col-xl-12'>
                            <label class='form-label fw-bolder text-dark fs-6'>
                              Account Number
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
                              IFSC Number
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
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Post*/}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default AddBank
