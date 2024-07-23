import React from 'react'
import { NavLink as Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/media/logo.png'
import Profile from '../assets/media/profile.jpg'

function MenuBar() {
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear()
  }

  return (
    <div className='menubar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <ul className='menu'>
              <li className='menu-item'>
                <Link to='/data-sources' activeclassname='active'>Data Sources</Link>
              </li>

              <li className='menu-item'>
                <Link to='/workbooks' activeclassname='active'>Workbooks</Link>
              </li>
            </ul>
          </div>

          <div className='col-4 text-center pt-2'>
            <Link to=''>
              <img src={Logo} width="120" alt='Vittarth Logo' />
            </Link>
          </div>

          <div className='col-4 text-end pt-2'>
            <div className="dropdown">
              <Link to="#" data-bs-toggle="dropdown">
                <img className='profile-img' src={Profile} width="30" alt='Profile Picutre' />
              </Link>

              <ul className="dropdown-menu">
                <div className='container'>
                  <div className='row bg-white'>
                    <div className='col-12 text-end mb-3'>
                      <li><Link to="/login" onClick={() => logout()} className='text-secondary'>
                        <small>Sign Out</small>
                      </Link></li>
                    </div>

                    <div className='col-4'>
                      <img src={Profile} className='rounded-circle' width="100" alt='Vittarth Logo' />
                    </div>

                    <div className='col-8'>
                      <p>
                        Yuvrajsinh Jadeja <br />
                        <small className='text-secondary'>info@vittarth.com</small><br />
                        <Link to="#">View Account</Link><br />
                        <Link to="#">Free Plan</Link><br />
                      </p>
                    </div>
                  </div>

                  <div className='row bg-light p-2'>
                    <div className='col-12'>
                      <Link to="#"><small className='text-secondary'>
                        Sign in with a different account
                      </small></Link>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar