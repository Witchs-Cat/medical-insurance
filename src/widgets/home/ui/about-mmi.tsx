import { 
  WidthWrapper,
  InfoCards,
  InfoCardProps
} from "@/shared"

const infoCards: Array<InfoCardProps> = [
  {
      title: 'Получить полис',
      image: './images/stickers/sticker2.png',
      subTitle: `Как получить полис ОМС в АО «FunAss»`,
      link: 'https://msk-21.ru/obyazatelnoe-medicinskoe-strahovani/#top'
  },
  {
      title: 'Проверка полиса',
      image: "./images/stickers/sticker1.png",
      subTitle: `Проверка полиса через Госуслуги.`,
      link: 'https://www.gosuslugi.ru/'
  },
  {
      title: 'Диспансеризация',
      image: './images/stickers/sticker3.png',
      subTitle: `Профилактический осмотр и диспансеризация`,
      link: 'https://msk-21.ru/obyazatelnoe-medicinskoe-strahovani/dispanserizaciya/'
  },
]

export const AboutMMI = () => {
return (
  <WidthWrapper>
    <InfoCards infoCards = {infoCards}/>
  </WidthWrapper>
  )
}
