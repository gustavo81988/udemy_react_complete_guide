import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsSwown,setCartIsSwown] = useState(false);

  const showCartHandler = () => {
    setCartIsSwown(true);
  }

  const hideCartHandler = () => {
    setCartIsSwown(false);
  }


  return (
    <Fragment>
      {cartIsSwown && <Cart onClose={hideCartHandler}/>}
      <Header 
        onShowCart={showCartHandler}
      />
      
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
