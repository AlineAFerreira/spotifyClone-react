import axios from 'axios';
const querystring = require('querystring');

const client_id = '95f2169faa5945e88ad679425b129b43'; // Your client id
const client_secret = 'c2236aa86d65448c960a3ad2d554c648'; // Your secret
const redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri

export const spotifyHelper = {
    TOKEN_DATA_KEY: 'tokenData',    

    authorization() {
        console.log('teste')
        const scope = 'user-read-private user-read-email';
        window.location.href = 'https://accounts.spotify.com/authorize?' +
          querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri
          });
    },
    getToken() {
        if (window.location.search.indexOf('code=') == -1) return;
        const code = window.location.search.split('&')[0].split('=')[1];
        
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
            const tokenData = {
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token
            };
            localStorage.setItem(btoa(this.TOKEN_DATA_KEY), btoa(JSON.stringify(tokenData)));
            window.location.href = window.location.origin + '/Home';
        })
    },
    refreshToken() {
        const tokenData = JSON.parse(window.atob(localStorage.getItem(window.btoa(this.TOKEN_DATA_KEY))));
        const refreshToken = tokenData.refresh_token;
        
        console.log('refresh', refreshToken)

        const url = 'https://accounts.spotify.com/api/token';
        const requestBody = {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
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
            const tokenData = {
                access_token: response.data.access_token,
                refresh_token: refreshToken
            };
            localStorage.setItem(btoa(this.TOKEN_DATA_KEY), btoa(JSON.stringify(tokenData)));
            window.location.href = window.location.origin + '/Home';
        })
    },
    getUserData() {
        const token = JSON.parse(window.atob(localStorage.getItem(window.btoa(this.TOKEN_DATA_KEY))));
        const AuthStr = 'Bearer ' + token.access_token;

        return axios.get('https://api.spotify.com/v1/me', { headers: { Authorization: AuthStr } })
        .then(res => { 
            return res.data.display_name 
        })
        .catch(err => {
            if(err.response.status === 401) {
                this.refreshToken();
            }
        })
    },
    getUserPlaylists() {
        const token = JSON.parse(window.atob(localStorage.getItem(window.btoa(this.TOKEN_DATA_KEY))));
        const AuthStr = 'Bearer ' + token.access_token;

        return axios.get('https://api.spotify.com/v1/me/playlists', { headers: { Authorization: AuthStr } })
        .then(res => { 
            return res.data.items; 
        })
        .catch(err => {
            if(err.response.status === 401) {
                this.refreshToken();
            }
        })
    },
    getPlaylistItem(id) {
        console.log('playlist id', id)
        const token = JSON.parse(window.atob(localStorage.getItem(window.btoa(this.TOKEN_DATA_KEY))));
        const AuthStr = 'Bearer ' + token.access_token;

        return axios.get(`https://api.spotify.com/v1/playlists/${id}`, { headers: { Authorization: AuthStr } })
        .then(res => { 
            console.log(res.data)
            return res.data;
        })
        .catch(err => {
            if(err.response.status === 401) {
                this.refreshToken();
            }
        })
    },
    convertDuration(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
} 