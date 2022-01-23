import React, { PureComponent } from 'react'

export class SubscriptionIntro extends PureComponent {
  render() {
    return (
      <div class='mb-10'>
        {/*begin::Title*/}
        <h5 class='mb-4'>Breif Details:</h5>
        {/*end::Title*/}
        {/*begin::Details*/}
        <div class='d-flex flex-wrap py-5'>
          {/*begin::Row*/}
          <div class='flex-equal me-5'>
            {/*begin::Details*/}
            <table class='table fs-6 fw-bold gs-0 gy-2 gx-2 m-0'>
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400 min-w-175px w-175px'>Taken On:</td>
                <td class='text-gray-800 min-w-200px'>2022-01-10</td>
              </tr>
              {/*end::Row*/}
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400'>Customer Name:</td>
                <td class='text-gray-800'>Suurya Prabhat</td>
              </tr>
              {/*end::Row*/}
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400'>Address:</td>
                <td class='text-gray-800'>Gole Market, Lucknow - 560001</td>
              </tr>
              {/*end::Row*/}
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400'>Phone:</td>
                <td class='text-gray-800'>+91-7673925340</td>
              </tr>
              {/*end::Row*/}
            </table>
            {/*end::Details*/}
          </div>
          {/*end::Row*/}
          {/*begin::Row*/}
          <div class='flex-equal'>
            {/*begin::Details*/}
            <table class='table fs-6 fw-bold gs-0 gy-2 gx-2 m-0'>
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400 min-w-175px w-175px'>
                  Subscribed To:
                </td>
                <td class='text-gray-800 min-w-200px'>
                  12 Months Standard Weight Plan
                </td>
              </tr>
              {/*end::Row*/}
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400'>Minimum Installment:</td>
                <td class='text-gray-800'>Rs 5000</td>
              </tr>
              {/*end::Row*/}
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400'>Cycle method:</td>
                <td class='text-gray-800'>Monthly</td>
              </tr>
              {/*end::Row*/}
              {/*begin::Row*/}
              <tr>
                <td class='text-gray-400'>Duration:</td>
                <td class='text-gray-800'>12 Months</td>
              </tr>
              {/*end::Row*/}
            </table>
            {/*end::Details*/}
          </div>
          {/*end::Row*/}
        </div>
        {/*end::Row*/}
      </div>
    )
  }
}

export default SubscriptionIntro
