import React from 'react';
import GlobalStyle from './GlobalStyle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
import ContactUs from './pages/ContactUsPage';
import BrandDesign from './components/Services/BrandDesign/BrandDesign';
import VideoEditing from './components/Services/VideoEditing/VideoEditing';
import Visualisation from './components/Services/3DVisualisation/Visualisation';
import WebDevelopment from './components/Services/Web/WebDevelopment';
import Strategies from './components/Services/Strategies/Strategies';
import Survey from './components/Survey/Survey';
import ScrollToTop from './ScrollToTop';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/videoediting" component={VideoEditing} />
        <Route path="/webdevelopment" component={WebDevelopment} />
        <Route path="/3dvisualisation" component={Visualisation} />
        <Route path="/branddesign" component={BrandDesign} />
        <Route path="/strategies" component={Strategies} />
        <Route path="/survey" component={Survey} />
      </Switch>
    </Router>
  );
}

export default App;
