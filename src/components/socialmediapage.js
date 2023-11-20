import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { buyerReview, sellerReview } from './components/Review';
import Contect from './components/Contect';
function socialmediapage(){
    return(
  
    <div className="App">
      
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
   
      
    </div>
    );
    }


export default socialmediapage;