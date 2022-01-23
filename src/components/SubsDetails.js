import React, { PureComponent } from 'react'
import SubscriptionIntro from './SubscriptionIntro'
import SubscriptionTransactions from './SubscriptionTransactions'

export class SubsDetails extends PureComponent {
  render() {
    return (
      <div class='card card-flush pt-3 mb-5 mb-xl-10'>
        {/*begin::Card header*/}
        <div class='card-header'>
          {/*begin::Card title*/}
          <div class='card-title'>
            <h2 class='fw-bolder'>Subscription Details</h2>
          </div>
          {/*begin::Card title*/}

          {/*begin::Card toolbar*/}
          <div class='card-toolbar'>
            <a
              href='../../demo2/dist/apps/subscriptions/add.html'
              class='btn btn-light-primary'
              style={{
                background: '#95203D',
                width: '100%',
                color: '#ffffff',
              }}
            >
              Pay Installment
            </a>
          </div>
          {/*end::Card toolbar*/}
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div class='card-body pt-3'>
          {/*begin::Section*/}
          <SubscriptionIntro />
          {/*end::Section*/}
          {/*begin::Section*/}
          <SubscriptionTransactions />
          {/*end::Section*/}
        </div>
        {/*end::Card body*/}
      </div>
    )
  }
}

export default SubsDetails
