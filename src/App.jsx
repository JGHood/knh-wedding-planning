import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { AuthProvider } from './Authentication';
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer';
const Home = loadable(() => import('./pages/Home'));
const SignUp = loadable(() => import('./pages/SignUp'));
const SignIn = loadable(() => import('./pages/SignIn'));
const VenueMatcher = loadable(() => import('./pages/VenueMatcher'));
const Services = loadable(() => import('./pages/Services'));
const About = loadable(() => import('./pages/About'));

function App() {
  return (
      <Router>
        <div style={{ height: "100%", width: "100%" }}>
          <Navigation/>
          <div
          style={{margin: "0 auto;", minHeight: '60vh'}}
          >
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/matcher" component={VenueMatcher} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/" component={Home} />
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
