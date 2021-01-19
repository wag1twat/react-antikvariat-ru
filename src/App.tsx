import { ChakraProvider, theme, ThemeProvider } from '@chakra-ui/react'
import Categories from 'components/Categories'

import Goods from 'components/Goods'
import { LocationsProvider } from 'context/locations'
import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import routes from 'utils/routes'
import DefaultLayout from './components/DefaultLayout'

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ThemeProvider theme={theme}>
        <LocationsProvider>
          <HashRouter>
            <DefaultLayout>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Redirect to={routes.goods} />}
                />
                <Route exact path={routes.goods} component={Goods} />
                <Route exact path={routes.categories} component={Categories} />
              </Switch>
            </DefaultLayout>
          </HashRouter>
        </LocationsProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App
