import React, {useState, useEffect} from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { spotifyHelper } from '../../helper/spotify';
import { Container, Label, TextTerm, Results} from './styles';

const Home = () => {
  const [term, setTerm] = useState('');
  const [userPlaylists, setUserPlaylists] = useState({});
  
  useEffect(()=>{
    spotifyHelper.getUserPlaylists()
    .then(res => {
      setUserPlaylists(res)
    });
  },[])

  const listPlaylists = () => {
    if (typeof userPlaylists != "undefined" && userPlaylists.length > 0) {
      return userPlaylists.map(item => 
        <div key={item.id} className="item" onClick={()=> spotifyHelper.getPlaylistItem(item.id)}>
          <div className="box-img"><img src={item.images[0].url}/></div>
          <span>
            <LinesEllipsis
              text={item.name}
              maxLine='3'
              ellipsis='...'
              trimRight={false}
              basedOn='letters'
            />
          </span>
          <span>de {item.owner.display_name}</span>
        </div>
      )
      console.log('state', userPlaylists)
    } else {
      return 'Você não possui playlists'
    }
  }
  
  return (
    <Container>
      <TextTerm className={term != '' ? 'show' : ''}>Resultados encontrados para "{term}"</TextTerm>
      <Results>
        {listPlaylists()}
        {/* <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div>
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div>
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div> 
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div>
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div>
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div> 
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div>
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div>
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div>  */}
      </Results>
    </Container>
  );
}

export default Home;