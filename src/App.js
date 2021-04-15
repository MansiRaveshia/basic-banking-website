import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'


import Midpart from './components/Midpart';
import Footer from './components/Footer';
import Bar from './components/Bar';
import Title from './components/Title';
import Customers from './components/Customers';
import Transfer from './components/Transfer';
import {Provider} from "react-redux";
import store from "./store";
import  TransactionHistory from "./components/Transactionhistory";


function App() {
  return (
   <Provider store={store}>
      <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
    <Bar />
      <Title />
      <Midpart />
      <Footer/>
    </Route>

    
      <Route exact path='/customers'>
      <Customers />
      </Route>
      <Route exact path='/customers/transfer/:id'>
      <Transfer />
      </Route>

      <Route exact path='/transactionhistory'>
      <TransactionHistory />
      </Route>
      
    </Switch>
        
      
      
    </div>
    </Router>
   </Provider>
  );
}


export default App;
