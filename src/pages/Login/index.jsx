import React from 'react';
import { spotifyHelper } from './../../helper/spotify'; 
import { Container} from './styles';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={spotifyHelper.authorization}>Login</button>
    </div>
  );
}

export default Login;