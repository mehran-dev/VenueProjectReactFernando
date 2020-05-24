import React from 'react';
import './resources/styles.css';
import Header from './components/header-footer/Header';
import Featured from './components/Features/Features';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/location/location';
import Footer from './components/header-footer/Footer';
import { Element } from 'react-scroll';


function App() {
  return (
    <div className="App" style={{ height: '3200px', backgroundColor: '#eef' }}>

      <Header />
<Element name="start">
<Featured />
</Element>
  

      <Element name="nfo">
        <VenueInfo />
      </Element>

      <Element name="highlight">
        <Highlights />
      </Element>

<Element name="price"> 
<Pricing />
</Element>
      
<Element name="location">
<Location />
</Element>
  

      <Footer />
    </div>
  );
}

export default App;
