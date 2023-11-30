import React from 'react'
import Wrapper from '../warapper/Wrapper'
import { Link } from "react-router-dom";

import './header.css'

import { publicRoute } from '../routing/PublicRoutes/PublicRoutes';
import { companyName } from '../../utils/constants';


const Header = () => {
  return <div className='header'>
    <Wrapper>
      <div className="header__wrapper">
        <div className="header__logo">
          <Link className='header__navigation__link' to="/">
            {companyName}
          </Link>
        </div>
        <nav className='header__navigation'>
          <ul className='header__navigation__list'>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={publicRoute.home}>
                Домашняя
              </Link>
            </li>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={publicRoute.home}>
                О компании
              </Link>
            </li>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={publicRoute.home}>
                Про ОМС
              </Link>
            </li>
          </ul>
        </nav>
        <nav className='header__navigation'>
          <ul className='header__navigation__list'>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={publicRoute.login}>
                Войти
              </Link>
            </li>
            <li className='header__navigation__item'>
              <Link to={publicRoute.signup} className='header__navigation__link'>
                Присоедениться
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </Wrapper>
  </div>
}

export default Header