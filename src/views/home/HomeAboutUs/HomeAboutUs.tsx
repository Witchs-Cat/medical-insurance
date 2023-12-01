import React from 'react'

import "../HomeMMI/homeMMI.css"
import './aboutUs.css'

import Wrapper from '../../../components/warapper/Wrapper'
import { IInfoCardArgs } from '../../../components/InfoCard/InfoCard'
import InfoCard from '../../../components/InfoCard/InfoCard'

const ourTeam: Array<IInfoCardArgs> = [
    {
        title: 'Левшенко Иван',
        image: require("./images/ivan.jpg"),
        subTitle: `Знаете, а ведь именно Ваня первым придумал перехитрить большую страховую компанию! В далеком 2011 году, когда ему было всего 5 лет, он решил застраховать свою любимую игрушку от пожара, наводнения и прочих опасностей. И знаете что? Он успешно это сделал!
        С тех пор Ваня стал нашим главным идейным вдохновителем.`,

        link: 'https://vk.com/lazy__soul'
    },
    {
        title: 'Андреев Даниил',
        image: require("./images/daniil.jpg"),
        subTitle: `Даниил - это человек, который всегда знает, как правильно поступить. Он очень умный и эрудированный, но иногда бывает слишком серьезным. Даниил очень любит читать книги и узнавать что-то новое. Он также увлекается спортом и старается вести здоровый образ жизни.`,
        link: 'https://vk.com/witchs_cat'
    },
    {
        title: 'Васильев Александр',
        image: require("./images/aleksandr.jpg"),
        subTitle: `Александр - это человек, который умеет находить выход из любой ситуации. Он обладает прекрасным чувством юмора и всегда готов поддержать разговор. Александр также является очень талантливым музыкантом и певцом. Он умеет играть на нескольких инструментах и писать песни. Кроме того, Александр очень любит путешествовать и открывать для себя новые места.`,
        link: 'https://vk.com/jiucm'
    },
] 

const HomeAboutUs = () => {
  return <Wrapper>
        <h1 className='advanteges__title'>О нашей компании.</h1>
        <ul className="mmi-info__cards">
            {ourTeam.map((x, index) => 
                <li key={index} className="mmi-info__cards__item">
                    <InfoCard {...x}/>
                </li>)}
        </ul>
  </Wrapper>
}

export default HomeAboutUs