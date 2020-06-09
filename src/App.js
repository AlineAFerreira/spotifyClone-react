import React from 'react';
import GlobalStyle, {Container} from './styles';
import Login from './pages/Login';
import Home from './pages/Home';
import Album from './pages/Album';
import Callback from './pages/Callback';
import {spotifyHelper} from './helper/spotify'; 
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
          <button onClick={spotifyHelper.authorization}>Login</button>
          <Router>
            <Link to="/">Login</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Album">Album</Link>
            {/* <Link to="/Callback">Callback</Link> */}
            <Switch>
              {/* <Route path="/Callback">
                <Callback />
              </Route> */}
              <Route path="/Album">
                <Album />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/">
                <Login />
              </Route>  
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}
export default App