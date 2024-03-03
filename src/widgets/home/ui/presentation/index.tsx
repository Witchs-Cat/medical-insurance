import { WidthWrapper } from '@/shared'
import { BlueRoundedButton, WhiteRoundedButton } from "@/shared/ui"
import { usePublicNavigation } from "@/features/navigaton"

import "./styles.css"
import { AboutMMI } from '../about-mmi'

export const Presentation = () => {
  const [toHome, toSignup] = usePublicNavigation()
  return (
    <section className='presentation'>
      <div className='presentation__background'>
        <WidthWrapper maxWidth="650px">
          <h2 className='presentation__title'>Мы гарантируем Наилучшее медецинское страхование</h2>
          <p className='presentation__subtitle'>Если болеть то только с нами - АО "FunAss"</p>
          <ul className='presentation__links'>
            <li className='presentation__links__item'>
              <BlueRoundedButton onClick={toSignup}>
                  Присоединиться
              </BlueRoundedButton>
            </li>
            <li className='presentation__links__item'>
              <WhiteRoundedButton onClick={toHome}>
                  Узнать больше
              </WhiteRoundedButton>
            </li>
          </ul>
        </WidthWrapper>
      </div>
      <div className='presentation__about-mmi'>
        <AboutMMI/>
      </div>
    </section>
  )
}