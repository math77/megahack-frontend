import { useEffect, useState } from 'react';
import Routes from './routes';

import './styles/global.css'
import logoDesktop from './images/logo-desktop.png'
import logoMobile from './images/logo-mobile.png'

function App() {
  const [logo, setLogo] = useState(null)

  useEffect(() => {
    const newLogo = window.matchMedia('(max-width: 500px)').matches ? logoMobile : logoDesktop

    setLogo(newLogo)
  }, [])
  
  return (
    <>
      <img src={logo} alt="Lyze" className="logo" />
      <Routes />
    </>
  );
}

export default App;