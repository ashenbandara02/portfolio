import './App.css';
import 'react-slideshow-image/dist/styles.css'

import PersonalBrief from './components/content2';
import DemoIntro from './components/content1';
import Header from './components/header';
import Slideshow from './components/content3';
import MoreAbout from './components/content4';
import Footer from './components/content5';


function App() {
  return (
    <div className="App">
      <Header/>
      <DemoIntro/>
      <PersonalBrief/>
      <Slideshow/>
      <MoreAbout/>
      <Footer/>
    </div>
  );
}

export default App;
