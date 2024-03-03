import { 
  PageContainer, 
  SpaceExpandContainer } from '@/shared'
  
import {
    Header,
    Footer
  } from '@widgets'

import { 
  Presentation,
  Advanteges,
  AboutUs } from '@/widgets'

export const HomePage = () => {
  return (
    <PageContainer header={<Header/>} footer={<Footer/>}>
      <SpaceExpandContainer>
        <Presentation/>
        <Advanteges/>
        <AboutUs/>
      </SpaceExpandContainer>
    </PageContainer>
  )
}