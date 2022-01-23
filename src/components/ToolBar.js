import React, { Component } from 'react'

class ToolBar extends Component {
  render() {
    return (
      <div class='toolbar py-5 py-lg-15' id='kt_toolbar'>
        {/*begin::Container*/}
        <div
          id='kt_toolbar_container'
          class='container-xxl d-flex flex-stack flex-wrap'
        >
          {/*begin::Page title*/}
          <div class='page-title d-flex flex-column me-3'>
            {/*begin::Title*/}
            <h1 class='d-flex text-black fw-bolder my-1 fs-3'>
              {this.props.title}
            </h1>
            {/*end::Title*/}
            {/*begin::Breadcrumb*/}
            <ul class='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
              {/*begin::Item*/}
              <li class='breadcrumb-item text-black opacity-75'>
                <a
                  href='../../demo2/dist/index.html'
                  class='text-black  text-hover-primary'
                >
                  Home
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li class='breadcrumb-item'>
                <span class='bullet bg-white opacity-75 w-5px h-2px'></span>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li class='breadcrumb-item text-black opacity-75'>Dashboard</li>
              {/*end::Item*/}
            </ul>
            {/*end::Breadcrumb*/}
          </div>
          {/*end::Page title*/}
          {/*begin::Actions*/}
          {/*end::Actions*/}
        </div>
        {/*end::Container*/}
      </div>
    )
  }
}

export default ToolBar
