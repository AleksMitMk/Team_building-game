import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import FirstSite from './Components/FirstSite/firstSite';
import CardDetails from './Components/CardDetails/CardDetails';
import Contact from './Components/Contact/Contact';
import LogIn from './Components/LogIn/LogIn';
import Navigon from './Components/Navbar/Navigon';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import AboutUs from './Components/AboutUs/AboutUs';


function App() {
  return (
    <Router>
      
      <ScrollToTop>
        <div className="App">
          <Navigon />
          <Switch>
            <Route exact path="/" component={FirstSite} />
            <Route path="/gameDetail/:gameid" component={CardDetails} />  
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={AboutUs} />
          </Switch>
        <Footer />
        </div>
      </ScrollToTop>

    </Router>
  );
}

export default App;
