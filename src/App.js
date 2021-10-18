// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route ,Switch  } from 'react-router-dom';

import CompOne from './Components/CompOne';
import CompTwo from './Components/CompTwo';
import CompThree from './Components/CompThree';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Trendius from './Components/Trendius';
import Career from './Components/Career';

function App() {
  return (
    <>
  
      <Switch>
          <Route exact path="/">
        <NavBar/>
            <CompOne/>
            <CompTwo/>
            <CompThree/>

          </Route>
          <Route  path="/products">
        <NavBar/>

              <Products/>
          </Route>
          <Route  path="/trendius">
          <NavBar/>

            <Trendius/>
          </Route>
          <Route  path="/company/career">
           <NavBar/>
            <Career/>
          </Route>
     
        

      </Switch>
  
      
    </>
  );
}

export default App;
