import { Button } from '@material-ui/core'

import '../styles/pages/home.css'

export default function Home() {
  return (
    <div className="home-page">
      <form>
        <label htmlFor="search">Como podemos te ajudar hoje?</label>
        <input type="text" id="search" autoFocus />
        <Button variant="contained" type="submit">Enviar</Button>
      </form>
    </div>
  )
}