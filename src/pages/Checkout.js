import React, { PureComponent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ToolBar from '../components/ToolBar'
import Transactions from '../components/Transactions'
import SubsDetails from '../components/SubsDetails'
import SubscriptionSummary from '../components/SubscriptionSummary'

export class Checkout extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <ToolBar title={'Checkout'} />
        <div
          id='kt_content_container'
          class='d-flex flex-column-fluid align-items-start container-xxl '
        >
          {/*begin::Post*/}
          <div class='content flex-row-fluid' id='kt_content'>
            {/*begin::Layout*/}
            <div class='d-flex flex-column flex-lg-row'>
              {/*begin::Content*/}
              <div class='flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0'>
                {/*begin::Card*/}
                <SubsDetails />

                <Transactions />
                {/*end::Card*/}
              </div>
              {/*end::Content*/}
              {/*begin::Sidebar*/}
              <SubscriptionSummary />
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}

export default Checkout
