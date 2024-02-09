import './App.css'
import React from 'react';
import Headersec from './components/Headersec'
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import Roadmap from './components/Roadmap'
import Faq from './components/Faq';
import Footer from './components/Footersec';
import Backtotop from './components/Backtotop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Preloder from './components/Preloder';


function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  }, [])
  return (
    <div className='bg-[#0a4740] overflow-x-clip'>
      <Preloder />
      <div className='bg-[url(./assets/images/bgheader.webp)] lg:bg-BgSize bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px]'>
        <Headersec />
      </div>
      <About />
      <Tokenomics />
      <Utility />
      <Roadmap />
      <Faq />
      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;

