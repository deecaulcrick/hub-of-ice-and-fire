import {NavLink, Link} from 'react-router-dom'

function Header() {
  return (
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
    </div>
  )
}

export default Header