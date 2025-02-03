import { useState, useEffect } from 'react'
import '../Styles/navBar.css'
import NetflixLogo from '../assets/Netflix_Logo_RGB.png'

const Navbar = () => {
  const [show, setShow] = useState(false)
  function transitionNavbar() {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={NetflixLogo} alt="" />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Navbar
