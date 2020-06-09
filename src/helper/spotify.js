import axios from 'axios';
var querystring = require('querystring');

const client_id = '95f2169faa5945e88ad679425b129b43'; // Your client id
const client_secret = 'c2236aa86d65448c960a3ad2d554c648'; // Your secret
const redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri

export const spotifyHelper = {
    authorization: () => {
        const scope = 'user-read-private user-read-email';
        window.location.href = 'https://accounts.spotify.com/authorize?' +
          querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri
          });
    },
    getToken: () => {
        if (window.location.search.indexOf('code=') == -1) return;
        const code = window.location.search.split('&')[0].split('=')[1];

        const key = btoa('code');
        const value = btoa(code)
        localStorage.setItem(key, value);
        
        const url = 'https://accounts.spotify.com/api/token';
        const requestBody = {
              code: code,
              redirect_uri: redirect_uri,
              grant_type: 'authorization_code'
        }
        const config = {
            headers: {
              'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
              'Accept': 'application/json',
              'Content-Type':'application/x-www-form-urlencoded'
            }
        };

        axios.post(url, querystring.stringify(requestBody), config)
        .then(response =>{
            console.log(response.data);
        })
    },
    storeCode: (code)=> {
        const key = btoa('code');
        const value = btoa(code)
        localStorage.setItem(key, value);
    }
} 