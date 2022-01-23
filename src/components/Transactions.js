import React, { PureComponent } from 'react'
import CashTransactions from './CashTransactions'
import GoldTransactions from './GoldTransactions'

export class Transactions extends PureComponent {
  render() {
    return (
      <div class='card card-flush pt-3 mb-5 mb-xl-10'>
        {/*begin::Card header*/}
        <div class='card-header'>
          {/*begin::Card title*/}
          <div class='card-title'>
            <h2>All Transactions</h2>
          </div>
          {/*end::Card title*/}
          {/*begin::Toolbar*/}
          <div class='card-toolbar'>
            {/*begin::Tab nav*/}
            <ul
              class='nav nav-stretch fs-5 fw-bold nav-line-tabs nav-line-tabs-2x border-transparent'
              role='tablist'
            >
              <li class='nav-item' role='presentation'>
                <a
                  id='kt_referrals_year_tab'
                  class='nav-link text-active-primary active'
                  data-bs-toggle='tab'
                  role='tab'
                  href='#kt_customer_details_invoices_1'
                >
                  In Ruppes
                </a>
              </li>
              <li class='nav-item' role='presentation'>
                <a
                  id='kt_referrals_2019_tab'
                  class='nav-link text-active-primary ms-3'
                  data-bs-toggle='tab'
                  role='tab'
                  href='#kt_customer_details_invoices_2'
                >
                  In Gold
                </a>
              </li>
            </ul>
            {/*end::Tab nav*/}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div class='card-body pt-2'>
          {/*begin::Tab Content*/}
          <div id='kt_referred_users_tab_content' class='tab-content'>
            {/*begin::Tab panel*/}
            <div
              id='kt_customer_details_invoices_1'
              class='tab-pane fade show active'
              role='tabpanel'
            >
              <CashTransactions />
            </div>
            {/*end::Tab panel*/}
            {/*begin::Tab panel*/}
            <div
              id='kt_customer_details_invoices_2'
              class='tab-pane fade'
              role='tabpanel'
            >
              {/*begin::Table wrapper*/}
              <GoldTransactions />
              {/*end::Table wrapper*/}
            </div>
            {/*end::Tab panel*/}
            {/*begin::Tab panel*/}
            {/*end::Tab panel*/}
          </div>
          {/*end::Tab Content*/}
        </div>
        {/*end::Card body*/}
      </div>
    )
  }
}

export default Transactions
