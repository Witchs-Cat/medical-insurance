import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { WidthWrapper } from '@/shared';
import { 
  PublicRoute, 
  CommonRoute, 
  PrivateRoute } from '@/features';

import './styles.css'

export const Header : React.FC = () => {
  return <div className='header'>
    <WidthWrapper>
      <div className="header__wrapper">
        <div className="header__logo">
          <Link className='header__navigation__link' to="/">
            FunAss
          </Link>
        </div>
        <nav className='header__navigation'>
          <ul className='header__navigation__list'>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={CommonRoute.Home}>
                Домашняя
              </Link>
            </li>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={CommonRoute.Home}>
                О компании
              </Link>
            </li>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={CommonRoute.Home}>
                Про ОМС
              </Link>
            </li>
          </ul>
        </nav>
        <nav className='header__navigation'>
          <ul className='header__navigation__list'>
            <li className='header__navigation__item'>
              <Link className='header__navigation__link' to={PublicRoute.Login}>
                Войти
              </Link>
            </li>
            <li className='header__navigation__item'>
              <Link to={PublicRoute.Signup} className='header__navigation__link'>
                Присоединиться
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </WidthWrapper>
  </div>
}
