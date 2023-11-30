import React from 'react'

import './homeAdvanteges.css'

import Wrapper from '../../../components/warapper/Wrapper'

const HomeAdvanteges = () => {
  return  <section className='advantages'>
    <Wrapper>
        <h1 className='advanteges__title'>Почему вы должны выбрать нас?</h1>
        <ul className='advanteges__list'>
        <li className='advanteges__list__item control-sticker'>
            <h2 className='advanteges__item__title'>Тщательный контроль  </h2>
            <p>Контроль качества медицинской помощи</p>
        </li>
        <li className='advanteges__list__item quality-sticker'>
            <h2 className='advanteges__item__title'>Качество</h2>
            <p>Наивысший уровень надежности и качества услу</p>
        </li>
        <li className='advanteges__list__item consultation-sticker'>
            <h2 className='advanteges__item__title'>Консультация</h2>
            <p>Бесплатная консультация по вопросам ОМС</p>
        </li>
        <li className='advanteges__list__item speed-sticker'>
            <h2 className='advanteges__item__title'>Скорость</h2>
            <p>Рассмотрение обращений застрахованных в кратчайшие сроки</p>
        </li>
        </ul>
    </Wrapper>
    </section>
}

export default HomeAdvanteges