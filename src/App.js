import React from 'react';
import Cakes from './components/CakeContainer'
import IceCream from './components/IceCreamContainer'
import Items from './components/ItemContainer'
import Newcake from './components/NewCakeContainer'
import {Provider} from 'react-redux'
import User from './components/UserContainer'

import store from './redux/store'

import './App.css';

function App() {
  return (

    <Provider store={store}>
    <div className="App">
      <User/>
      {/* <HookCakes/> */}
      {/* <Items cake/>
      <Items/>
      <IceCream />
      <Cakes />
      <Newcake/> */}
    </div>
    </Provider>
  );
}

export default App;
