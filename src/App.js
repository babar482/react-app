import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Project from './components/Pro';
import Footer from './components/Footer';
import { Route, Routes} from 'react-router-dom';
import HeroSection from './components/HeroSection';



function App() {
  return (
    <div>
    <Header/><Routes>
      <Route path={'/'} element={<HeroSection/>}/>
      <Route path="/project" component={<Project/>} />

     </Routes>
     <Footer/>
     </div>
  );
}

export default App;
