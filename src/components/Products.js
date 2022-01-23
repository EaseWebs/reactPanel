import React, { PureComponent } from 'react'

export class Products extends PureComponent {
  render() {
    return (
      <>
        <div className='col-xl-6'>
          <div
            className='card card-xl-stretch mb-xl-3'
            style={{ borderRadius: '15px' }}
          >
            <img src='assets/w1.jpeg' style={{ borderRadius: '15px' }}></img>
          </div>
        </div>
        <div className='col-xl-6'>
          <div
            className='card card-xl-stretch mb-xl-3'
            style={{ borderRadius: '15px' }}
          >
            <img src='assets/w1.jpeg' style={{ borderRadius: '15px' }}></img>
          </div>
        </div>
      </>
    )
  }
}

export default Products
