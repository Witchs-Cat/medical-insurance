import React from 'react'

import './homeMMI.css'

import Wrapper from '../../../components/warapper/Wrapper'
import { companyName } from '../../../utils/constants'

import InfoCard from '../../../components/InfoCard/InfoCard'
import {IInfoCardArgs} from '../../../components/InfoCard/InfoCard'

const infoCards: Array<IInfoCardArgs> = [
    {
        title: 'Получить полис',
        image: require('./images/sticker2.png'),
        subTitle: `Как получить полис ОМС в АО «${companyName}»`,
        link: 'https://msk-21.ru/obyazatelnoe-medicinskoe-strahovani/#top'
    },
    {
        title: 'Проверка полиса',
        image: require("./images/sticker1.png"),
        subTitle: `Проверка полиса через Госуслуги.`,
        link: 'https://www.gosuslugi.ru/'
    },
    {
        title: 'Диспансеризация',
        image: require('./images/sticker3.png'),
        subTitle: `Профилактический осмотр и диспансеризация`,
        link: 'https://msk-21.ru/obyazatelnoe-medicinskoe-strahovani/dispanserizaciya/'
    },
]

const HomeMMI = () => {
  return <section className='mmi-info'>
    <Wrapper>
        <ul className="mmi-info__cards">
            {infoCards.map(x => 
                <li className="mmi-info__cards__item">
                    <InfoCard {...x}/>
                </li>)}
        </ul>
    </Wrapper>
    </section>
}

export default HomeMMI