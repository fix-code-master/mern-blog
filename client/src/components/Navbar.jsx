import './NavbarStyles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
function Navbar() {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <nav className='NavbarItems NavbarItems-new'>
        <img className='navbar-logo' src={logo} />
        <div className='menu-icons' onClick={() => setClicked(!clicked)}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li
                key={index}
                className='nav-item d-flex flex-column justify-content-center align-items-center'
              >
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
                <ul className='list'>
                  {item.service
                    ? item.service.map((list) => {
                        return (
                          <li className='extra-list' key={list.title}>
                            <Link className={list.cName} to={list.url}>
                              <i className={list.icon}></i> {list.title}
                            </Link>
                          </li>
                        )
                      })
                    : null}
                </ul>
              </li>
            )
          })}
          <Link className='button' to='/sign-up'>
            <button>Sign Up</button>
          </Link>
        </ul>
      </nav>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        className='liquid d-inline-block'
      >
        <defs>
          <filter id='old-goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
          <filter id='fancy-goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='goo'
            />
            <feComposite in='SourceGraphic' in2='goo' operator='atop' />
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default Navbar
