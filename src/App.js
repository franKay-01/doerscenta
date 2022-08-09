import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import WhatItMeans from './components/what_it_means';
import WhoWeAre from './components/who_we_are';
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">

      <Header/>
      <Banner/>
      <WhoWeAre/>
      <WhatItMeans/>
      <Footer/>
    </div>
  );
}

export default App;
