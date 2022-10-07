import { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';
import menuOpen from '../../images/menuOpen.svg'
import menuClose from '../../images/menuClose.svg'


function Header() {

  const [menuBtn, setMenuBtn] = useState(menuOpen)
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(current => !current);
    {menuBtn === menuOpen ? setMenuBtn(menuClose) : setMenuBtn(menuOpen)}
  }
  return (
    <div className="header-container">
    <div className="header">
      <div className="logo">
        <Link to='/'><h3>A Hub of Ice and Fire</h3></Link>
      </div>
      <div className="menu">
        <ul>
          <NavLink to='/characters' activeclassname='active'><li>Characters</li></NavLink>
          <NavLink to='/houses' activeclassname='active'><li>Houses</li></NavLink>
          <NavLink to='/battles' activeclassname='active'><li>Battles</li></NavLink>
        </ul>
      </div>
      <div className='mobile-menu-btn'>
        <img src ={menuBtn} onClick={handleMenu} />
      </div>
    </div>
    {showMenu ? (
      <div className="mobile-menu">
      <ul>
          <NavLink to='/characters' activeclassname='active'><li>Characters</li></NavLink>
          <NavLink to='/houses' activeclassname='active'><li>Houses</li></NavLink>
          <NavLink to='/battles' activeclassname='active'><li>Battles</li></NavLink>
        </ul>
      </div>
    ) : ''}
      
    </div>
  )
}

export default Header