import React, { PureComponent } from 'react'
import Header from '../components/Header'
import ToolBar from '../components/ToolBar'
import Footer from '../components/Footer'
import BuySavePlans from '../components/BuySavePlans'
export class BuySave extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <ToolBar title={'Buy and Save'} />
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
                    <BuySavePlans />
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

export default BuySave
