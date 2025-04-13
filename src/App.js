
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Newsbox from './components/Newsbox';
import{

  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

const App = ()=> {

const [mode, setMode] = useState('light');

const [progress, setProgress] = useState();

    return (
      <div className={`bg-${mode}`}>

      
      <Router>
      <Navbar mode={mode} setMode={setMode}/>
      <LoadingBar height={3} color='white'  progress={progress}></LoadingBar>
      <div className="text-center mb-5" style={{backgroundColor: '#c4c3bf'}}>
      <h2>NewsViews - Get The Daily News Updates Quicker</h2>
      </div>
      <div className='container'>
        
        

          <Routes>

          <Route exact path='/' element={<Newsbox setProgress = {setProgress} key="general" catagory = 'general' mode={mode}/>}></Route>
          <Route exact path='/business' element={<Newsbox setProgress = {setProgress} key="business" catagory = 'business' mode={mode}/>}></Route>
          <Route exact path='/sports' element={<Newsbox setProgress = {setProgress} key="sports" catagory = 'sports' mode={mode}/>}></Route>
          <Route exact path='/entertainment' element={<Newsbox setProgress = {setProgress} key="entertainment" catagory = 'entertainment' mode={mode}/>}></Route>
          <Route exact path='/health' element={<Newsbox setProgress = {setProgress} key="health" catagory = 'health' mode={mode}/>}></Route>
          <Route exact path='/science' element={<Newsbox setProgress = {setProgress} key="science" catagory = 'science' mode={mode}/>}></Route>
          <Route exact path='/technology' element={<Newsbox setProgress = {setProgress} key="technology" catagory = 'technology' mode={mode}/>}></Route>
          
          </Routes>

      </div>
        </Router>
        
      </div>);
  
}

export default App;
