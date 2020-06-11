import React from 'react';
import { spotifyHelper } from './helper/spotify';
import GlobalStyle, {Container} from './styles';
import Header from './components/Header';
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
  constructor() {
    super();
    this.state = {
      scrolled : false,
      userName: ''
    }
  }
  componentDidMount(){
    spotifyHelper.getToken();
    spotifyHelper.getUserData()
    .then(res => this.setState({userName: res}));
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const isTop = window.scrollY < 100;
    !isTop ? this.setState({scrolled:true}) : this.setState({scrolled:false})
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>   
          <Header userName={this.state.userName} scrolled={this.state.scrolled} />       
          <Router>
            {/* <Link to="/">Login</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Album">Album</Link> */}
            <Switch>
              <Route path="/" exact >
                <Login />
              </Route>  
              <Route path="/Home" exact >
                <Home />
              </Route>
              <Route path="/Album/:id" exact >
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