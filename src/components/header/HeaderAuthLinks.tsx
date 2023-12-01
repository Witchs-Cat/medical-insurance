import React from 'react'
import { Link } from 'react-router-dom'
import { publicRoute } from '../routing/PublicRoutes/PublicRoutes'


const HeaderAuthLinks = () => {
  return <nav className='header__navigation'>
  <ul className='header__navigation__list'>
    <li className='header__navigation__item'>
      <Link className='header__navigation__link' to={publicRoute.login}>
        Войти
      </Link>
    </li>
    <li className='header__navigation__item'>
      <Link to={publicRoute.signup} className='header__navigation__link'>
        Присоединиться
      </Link>
    </li>
  </ul>
</nav>
}

export default HeaderAuthLinks