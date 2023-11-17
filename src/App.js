import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Project from './components/Pro';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { buyerReview, sellerReview } from './components/Review';
import Contect from './components/Contect';
import Footer from './components/Footer';







function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Project/>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      
      <Tab eventKey="home" title="Buyer Review">
       {buyerReview()}
      </Tab>
      <Tab eventKey="profile" title="Seller Review">
       {sellerReview()}
       
      </Tab>
      
    </Tabs>
    
    <Contect/>
    <Footer/>
      
    </div>
  );
}

export default App;
