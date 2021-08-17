
import React from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';

import Home from './Home';
import Data from './Data';

  function App(){


  return(
    <div className="App">
      <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/data" component={Data}/> 
      </Switch>
      </BrowserRouter>

      </>
    </div>
  );
}; 
export default App;