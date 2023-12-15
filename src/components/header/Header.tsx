import React, { useContext } from 'react'
import Wrapper from '../warapper/Wrapper'
import { Link } from "react-router-dom";

import './header.css'

import { publicRoute } from '../routing/PublicRoutes/PublicRoutes';
import { companyName } from '../../utils/constants';
import { Context, useAppStore } from '../context/StoreContext';
import HeaderAuthLinks from './HeaderAuthLinks';
import Store from '../../store/store';
import HeaderUserLinks from './HeaderUserLinks';


const Header : React.FC = () => {
  const store = useAppStore()
  const element : React.ReactElement = (!store.getIsAuth())?
    <HeaderAuthLinks/> : <HeaderUserLinks/>

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
        {element}
      </div>
    </Wrapper>
  </div>
}

export default Header