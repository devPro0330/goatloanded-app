import React from 'react'
import RouteConfig from './routes/RouteConfig'
import { MenuProvider } from './context/MenuProvider'

function App() {

  return (
    <MenuProvider>
      <RouteConfig/>
    </MenuProvider>
  );
}

export default App;
