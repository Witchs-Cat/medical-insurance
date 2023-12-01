import React from 'react'
import './home.css'

import HomeIntro from './HomeIntro/HomeIntro'
import HomeMMI from './HomeMMI/HomeMMI'
import HomeAdvanteges from './HomeAdvanteges/HomeAdvanteges'
import HomeAboutUs from './HomeAboutUs/HomeAboutUs'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Home: React.FC = () => {
  return <div>
    <Header/>
    <main className='home'>
      <HomeIntro/>
      <HomeMMI/>
      <HomeAdvanteges/>
        <HomeAboutUs/>
     </main>
    <Footer/>
  </div> 
}

export default Home