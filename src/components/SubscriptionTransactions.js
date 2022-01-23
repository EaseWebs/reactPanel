import React, { PureComponent } from 'react'

export class SubscriptionTransactions extends PureComponent {
  render() {
    return (
      <div class='mb-0'>
        {/*begin::Title*/}
        <h5 class='mb-4'>Recent Transactions:</h5>
        {/*end::Title*/}
        {/*begin::Product table*/}
        <div class='table-responsive'>
          {/*begin::Table*/}
          <table class='table align-middle table-row-dashed fs-6 gy-4 mb-0'>
            {/*begin::Table head*/}
            <thead>
              {/*begin::Table row*/}
              <tr class='border-bottom border-gray-200 text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                <th class='min-w-150px'>Date</th>
                <th class='min-w-125px'>Installment ID</th>
                <th class='min-w-125px'>Payment ID</th>
                <th class='min-w-125px'>Mode of Payment</th>
                <th class='text-end min-w-70px'>Amount Paid</th>
              </tr>
              {/*end::Table row*/}
            </thead>
            {/*end::Table head*/}
            {/*begin::Table body*/}
            <tbody class='fw-bold text-gray-800'>
              <tr>
                <td>
                  <div class='fw-normal text-gray-600'>2022-12-10</div>
                </td>
                <td>
                  <div class='fw-normal text-gray-600'>fjddfdjddjs</div>
                </td>
                <td>
                  <span class='badge badge-light-danger'>RAXOCDJE_JDSJSW</span>
                </td>
                <td>Online</td>
                <td class='text-end'>Rs. 5000</td>
              </tr>
            </tbody>
            {/*end::Table body*/}
          </table>
          {/*end::Table*/}
        </div>
        {/*end::Product table*/}
      </div>
    )
  }
}

export default SubscriptionTransactions
