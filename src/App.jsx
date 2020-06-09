import React from 'react';
import { spotifyHelper } from './helper/spotify';
import GlobalStyle, {Container} from './styles';
import Login from './pages/Login';
import Home from './pages/Home';
import Album from './pages/Album';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {
  componentDidMount(){
    spotifyHelper.getToken();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>          
          <Router>
            <Link to="/">Login</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Album">Album</Link>
            <Switch>
              <Route path="/" exact >
                <Login />
              </Route>  
              <Route path="/Home" exact >
                <Home />
              </Route>
              <Route path="/Album" exact >
                <Album />
              </Route>
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}
export default App