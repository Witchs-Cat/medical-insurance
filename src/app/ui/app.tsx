import { BrowserRouter } from 'react-router-dom'

import Routing from '@/pages'

import './styles.css'
import './reset.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  )
}

export default App