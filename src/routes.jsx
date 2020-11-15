import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Questions from './pages/Questions'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes