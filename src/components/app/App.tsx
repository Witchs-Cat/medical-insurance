import React, {useContext} from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import './app.css'
import PublicRoutes from '../routing/PublicRoutes/PublicRoutes';
import { useAppStore } from '../context/StoreContext';

const App: React.FC = () => {
  const store = useAppStore()
  return <PublicRoutes/>
}

export default App;
