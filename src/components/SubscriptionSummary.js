import React, { PureComponent } from 'react'

export class SubscriptionSummary extends PureComponent {
  render() {
    return (
      <div class='flex-column flex-lg-row-auto w-lg-250px w-xl-300px mb-10 order-1 order-lg-2'>
        {/*begin::Card*/}
        <div
          class='card card-flush mb-0'
          data-kt-sticky='true'
          data-kt-sticky-name='subscription-summary'
          data-kt-sticky-offset="{default: false, lg: '200px'}"
          data-kt-sticky-width="{lg: '250px', xl: '300px'}"
          data-kt-sticky-left='auto'
          data-kt-sticky-top='150px'
          data-kt-sticky-animation='false'
          data-kt-sticky-zindex='95'
        >
          {/*begin::Card header*/}
          <div class='card-header'>
            {/*begin::Card title*/}
            <div class='card-title'>
              <h2>Summary</h2>
            </div>
            {/*end::Card title*/}
            {/*begin::Card toolbar*/}
            <div class='card-toolbar'>
              {/*begin::More options*/}
              <a
                href='#'
                class='btn btn-sm btn-light btn-icon'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
              >
                {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
                <span class='svg-icon svg-icon-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <rect
                      x='10'
                      y='10'
                      width='4'
                      height='4'
                      rx='2'
                      fill='black'
                    />
                    <rect
                      x='17'
                      y='10'
                      width='4'
                      height='4'
                      rx='2'
                      fill='black'
                    />
                    <rect
                      x='3'
                      y='10'
                      width='4'
                      height='4'
                      rx='2'
                      fill='black'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </a>
              {/*begin::Menu*/}
              <div
                class='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4'
                data-kt-menu='true'
              >
                {/*begin::Menu item*/}
                <div class='menu-item px-3'>
                  <a href='#' class='menu-link px-3'>
                    Skip Installment
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div class='menu-item px-3'>
                  <a
                    href='#'
                    class='menu-link px-3'
                    data-kt-subscriptions-view-action='delete'
                  >
                    Sell/Redeem Subscription
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div class='menu-item px-3'>
                  <a
                    href='#'
                    class='menu-link text-danger px-3'
                    data-kt-subscriptions-view-action='edit'
                  >
                    Cancel Subscription
                  </a>
                </div>
                {/*end::Menu item*/}
              </div>
              {/*end::Menu*/}
              {/*end::More options*/}
            </div>
            {/*end::Card toolbar*/}
          </div>
          {/*end::Card header*/}
          {/*begin::Card body*/}
          <div class='card-body pt-0 fs-6'>
            {/*begin::Section*/}
            <div class='mb-7'>
              {/*begin::Details*/}
              <div class='d-flex align-items-center'>
                {/*begin::Avatar*/}
                <div class='symbol symbol-60px symbol-circle me-3'>
                  <img alt='Pic' src='./media/avatars/150-4.jpg' />
                </div>
                {/*end::Avatar*/}
                {/*begin::Info*/}
                <div class='d-flex flex-column'>
                  {/*begin::Name*/}
                  <a
                    href='#'
                    class='fs-4 fw-bolder text-gray-900 text-hover-primary me-2'
                  >
                    Suurya Prabhat
                  </a>
                  {/*end::Name*/}
                  {/*begin::Email*/}
                  <a href='#' class='fw-bold text-gray-600 text-hover-primary'>
                    suuryaprabhat@gmail.com
                  </a>
                  {/*end::Email*/}
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Details*/}
            </div>
            {/*end::Section*/}
            {/*begin::Seperator*/}
            <div class='separator separator-dashed mb-7'></div>
            {/*end::Seperator*/}
            {/*begin::Section*/}
            <div class='mb-7'>
              {/*begin::Title*/}
              <h5 class='mb-4'>Subscription details</h5>
              {/*end::Title*/}
              {/*begin::Details*/}
              <div class='mb-0'>
                {/*begin::Plan*/}
                <span class='badge badge-light-info me-2'>
                  12 Month Savings Plan
                </span>
                {/*end::Plan*/}
                {/*begin::Price*/}
                <span class='fw-bold text-gray-600'>Rs. 5000 / M</span>
                {/*end::Price*/}
              </div>
              {/*end::Details*/}
            </div>
            {/*end::Section*/}
            {/*begin::Seperator*/}
            <div class='separator separator-dashed mb-7'></div>
            {/*end::Seperator*/}
            {/*begin::Section*/}
            <div class='mb-10'>
              {/*begin::Title*/}
              <h5 class='mb-4'>Bonus Details</h5>
              {/*end::Title*/}
              {/*begin::Details*/}
              <div class='mb-0'>
                {/*begin::Card info*/}
                <div class='fw-bold text-gray-600 d-flex align-items-center'>
                  2.1 GRAM
                </div>
                {/*end::Card info*/}
                {/*begin::Card expiry*/}

                {/*end::Card expiry*/}
              </div>
              {/*end::Details*/}
            </div>
            {/*end::Section*/}
            {/*begin::Seperator*/}
            <div class='separator separator-dashed mb-7'></div>
            {/*end::Seperator*/}
            {/*begin::Section*/}
            <div class='mb-10'>
              {/*begin::Title*/}
              <h5 class='mb-4'>Subscription Details</h5>
              {/*end::Title*/}
              {/*begin::Details*/}
              <table class='table fs-6 fw-bold gs-0 gy-2 gx-2'>
                {/*begin::Row*/}
                <tr class=''>
                  <td class='text-gray-400'>Subscription ID:</td>
                  <td class='text-gray-800'>sub_4567_8765</td>
                </tr>
                {/*end::Row*/}
                {/*begin::Row*/}
                <tr class=''>
                  <td class='text-gray-400'>Started:</td>
                  <td class='text-gray-800'>15 Apr 2021</td>
                </tr>
                {/*end::Row*/}
                {/*begin::Row*/}
                <tr class=''>
                  <td class='text-gray-400'>Status:</td>
                  <td>
                    <span class='badge badge-light-success'>Active</span>
                  </td>
                </tr>
                {/*end::Row*/}
                {/*begin::Row*/}
                <tr class=''>
                  <td class='text-gray-400'>Next Installment:</td>
                  <td class='text-gray-800'>15 Apr 2022</td>
                </tr>
                {/*end::Row*/}
              </table>
              {/*end::Details*/}
            </div>
            {/*end::Section*/}
            {/*begin::Actions*/}
            <div class='mb-0'>
              <a
                href='../../demo2/dist/apps/subscriptions/add.html'
                class='btn btn-primary'
                id='kt_subscriptions_create_button'
                style={{
                  background: '#95203D',
                  width: '100%',
                }}
              >
                Sell/Redeem Subscription
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SubscriptionSummary
