import React, { useState, useEffect } from 'react'

const CashTransactions = (userid, subscriptionid) => {
  return (
    <div class='table-responsive'>
      {/*begin::Table*/}
      <table
        id='kt_customer_details_invoices_table_1'
        class='table align-middle table-row-dashed fs-6 fw-bolder gs-0 gy-4 p-0 m-0'
      >
        {/*begin::Thead*/}
        <thead class='border-bottom border-gray-200 fs-7 text-uppercase fw-bolder'>
          <tr class='text-start text-gray-400'>
            <th class='min-w-150px'>Date</th>
            <th class='min-w-125px'>Installment ID</th>
            <th class='min-w-125px'>Payment ID</th>
            <th class='min-w-125px'>Mode of Payment</th>
            <th class='text-end min-w-70px'>Amount Paid</th>
          </tr>
        </thead>
        {/*end::Thead*/}
        {/*begin::Tbody*/}
        <tbody class='fs-6 fw-bold text-gray-600'>
          <tr>
            <td>
              <div class='fw-normal text-gray-600'>2022-12-10</div>
            </td>
            <td>
              <div class='fw-normal text-gray-600'>fjddfdjddjs</div>
            </td>
            <td>RAXOCDJE_JDSJSW</td>
            <td>
              <span class='badge badge-light-success'>Saved </span>
            </td>
            <td class='text-end'>Rs. 5000</td>
          </tr>
          <tr>
            <td>
              <div class='fw-normal text-gray-600'>2022-11-10</div>
            </td>
            <td>
              <div class='fw-normal text-gray-600'>fjddfdjddjs</div>
            </td>
            <td>RAXOCDJE_JDSJSW</td>
            <td>
              <span class='badge badge-light-success'>Released </span>
            </td>
            <td class='text-end'>Rs. 450</td>
          </tr>
          <tr>
            <td>
              <div class='fw-normal text-gray-600'>2022-11-10</div>
            </td>
            <td>
              <div class='fw-normal text-gray-600'>fjddfdjddjs</div>
            </td>
            <td>RAXOCDJE_JDSJSW</td>
            <td>
              <span class='badge badge-light-success'>Saved </span>
            </td>
            <td class='text-end'>Rs. 5000</td>
          </tr>
          <tr>
            <td>
              <div class='fw-normal text-gray-600'>2022-11-10</div>
            </td>
            <td>
              <div class='fw-normal text-gray-600'>fjddfdjddjs</div>
            </td>
            <td>RAXOCDJE_JDSJSW</td>
            <td>
              <span class='badge badge-light-danger'>Hold </span>
            </td>
            <td class='text-end'>Rs. 450</td>
          </tr>
        </tbody>
        {/*end::Tbody*/}
      </table>
      {/*end::Table*/}
    </div>
  )
}

export default CashTransactions
