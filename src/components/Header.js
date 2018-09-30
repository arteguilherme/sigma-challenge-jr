import React from 'react'

import Navigation from './Navigation'

const Header = () => {
  return (
    <div>
      <div className='top'>
        <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3'>
          <div className='site-title'>
            <h1 className='title'>Candidatos</h1>
            <h2 className='subTitle'>
              <span>Eleições</span> 2018
              </h2>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  )
}

export default Header
