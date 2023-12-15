import React from 'react'
import Header from '../../components/header/Header'
import {useAppStore} from '../../components/context/StoreContext'
import InsuranceContracts from './InsuranceContracts/InsuranceContracts'
import InsuranceCases from './InsuranceCases/InsuranceCases'

import './PersonalAccount.css'

const PersonalAccount = () => {
    const sotre = useAppStore();
    if (!sotre.getIsAuth())
        return <p>Ошибка доступа</p>

  return <div> 
    <Header/>   
    <main>
    
      <InsuranceContracts/>
      <InsuranceCases/>
    </main>
  </div>
}

export default PersonalAccount