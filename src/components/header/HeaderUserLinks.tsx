import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import {Context} from '../context/StoreContext'
import { publicRoute } from '../routing/PublicRoutes/PublicRoutes'

const HeaderUserLinks = () => {
    const {store} = useContext(Context)
   return <nav className='header__navigation'>
      <Link className='header__navigation__link' to={publicRoute.login}>
        {store.selfUser.username}
      </Link>
   </nav>
}

export default HeaderUserLinks