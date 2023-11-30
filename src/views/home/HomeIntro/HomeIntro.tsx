import React from 'react'
import { Link } from 'react-router-dom'

import './homeIntro.css'

import Wrapper from '../../../components/warapper/Wrapper'
import {publicRoute} from '../../../components/routing/PublicRoutes/PublicRoutes'
import { companyName } from '../../../utils/constants'

const HomeIntro = () => {
  return <section className='intro'>
    <Wrapper>
        <div className='intro__wrapper'>
        <h2 className='intro__title'>Мы гарантируем Наилучшее медецинское страхование</h2>
        <p className='intro__subtitle'>Если болеть то только с нами - АО "{companyName}"</p>
        <ul className='intro__links'>
            <li className='intro__links__item'>
            <Link to={publicRoute.login} className='intro__link blue-rounded-button'>
                Присоединиться
            </Link>
            </li>
            <li className='intro__links__item'>
            <Link to={publicRoute.home} className='intro__link white-rounded-button'>
                Узнать больше
            </Link>
            </li>
        </ul>
        </div>
    </Wrapper>
    </section>
}

export default HomeIntro