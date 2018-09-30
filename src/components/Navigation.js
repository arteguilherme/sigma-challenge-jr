import React from 'react'

import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg border-bottom shadow-sm main-menu'>
        <div className='container justify-content-center'>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#main-menu' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse w-100 order-1 order-md-0 dual-collapse2' id='main-menu'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>Presidente <span className='sr-only'>(current)</span></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/governador'>Governador</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/senador'>Senador</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/deputadofederal'>Deputado Federal</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/deputadoestadual'>Deputado Estadual</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
