import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import {useAppStore} from '../context/StoreContext'
import { publicRoute, privateRoute } from '../routing/PublicRoutes/PublicRoutes'

const HeaderUserLinks = () => {
   const store = useAppStore()
   const username = store.getSelfUser().username.split(' ');
   const middleName = username[2][0]
   return <nav className='header__navigation'>
      <ul className='header__navigation__list'>
          <li className='header__navigation__item'>
            <label className='header__navigation__link'>
               {username[1]+ " " + username[0][0] + ". " + (middleName != null? middleName + "." : "")}
            </label>
         </li>
         <li className='header__navigation__item'>
            <Link className='blue-rounded-button intro__link' to={privateRoute.personalAccount}>
               Личный кабинет
            </Link>
         </li>
      </ul>
   </nav>
}

export default HeaderUserLinks