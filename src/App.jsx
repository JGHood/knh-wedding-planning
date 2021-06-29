import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import styled from 'styled-components';
import VenueMatcher from './pages/VenueMatcher';
import { AuthProvider } from './Authentication';
import Navigation from './components/Navigation';

const PageContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 100px;
    `;


const navRoutes = ["/", "matcher", "signin"]

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ height: "100%", width: "100%" }}>
          <Navigation/>
          <PageContainer>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/matcher" component={VenueMatcher} />
            <Route exact path="/" component={Home} />
          </PageContainer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
