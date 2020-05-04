import React from 'react';
import {Route} from 'react-router-dom';

import Home from './components/';
import Graph from './Graph/Graph'
import BeSafe from './BeSafe/BeSafe'
import Surveyjs from './Survey/surveyjs'
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './App.module.css';


function App() {
  return (
    
    <div  style={{
      backgroundColor: '#fff',
      width: '100vw',
      height: '100vh'
    }}>

      <CssBaseline />
      <Route exact path ="/" component ={Home} />
      <Route path ="/graph" component ={Graph} />
      <Route path ="/safe" component ={BeSafe} />
      <Route path ="/contact" component ={Surveyjs} />
      



    </div>
  )
}

export default App;
