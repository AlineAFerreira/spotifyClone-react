import React, {useEffect, useState} from 'react';
import {spotifyHelper} from './../../helper/spotify';
import { RiMusicLine, RiPlayLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { Container, TrackList } from './styles';

const Album = () => {
  const { id } = useParams();
  const [playlistItems, setPlaylistItems] = useState([]);

  const handlePreview = (id, url) => {
    const parent = document.getElementById(`item_${id}`);
    const elem = document.getElementById(`audio_${id}`);

    if (!elem) {      
      let audio = document.createElement('audio');
      audio.id = 'audio_' + id;
      audio.src = url;
      parent.classList.add('active');
      parent.appendChild(audio);
      audio.play();
      audio.onended = function() {
        parent.classList.remove('active');
    };
    } else {
      if(elem.paused) {
        elem.play();
        parent.classList.add('active');
      } else { 
        elem.pause();
        parent.classList.remove('active');
      }
    }
    stopAll(id);
  }

  const stopAll = (id) => {
    let audioElem, i;
    audioElem = document.querySelectorAll('audio:not([id=audio_' + id + '])');
    for (i = 0; i < audioElem.length; i++) {
      audioElem[i].parentElement.classList.remove('active');
      audioElem[i].pause();
      audioElem[i].currentTime = 0;
    }
  }

  useEffect(()=> {
    spotifyHelper.getPlaylistItem(id)
    .then(res => {
      const result = res.tracks.items.map(item => {
        return (
          <li 
            id={`item_${item.track.id}`} 
            className={` ${item.track.preview_url == null ? 'disabled' : ''}`}
            key={item.track.id} 
            onClick={ 
              (item.track.preview_url != null) ? 
              ()=> handlePreview(item.track.id, item.track.preview_url) : 
              () => {return} 
            }
          >            
            <div className="track-icon"><RiMusicLine/></div>
            <div className="track-name">{item.track.name}</div>
            <div className="track-duration">{spotifyHelper.convertDuration(item.track.duration_ms)}</div>            
          </li>
        )
      })
     
      return setPlaylistItems(result);
    })
  }, []);

  return (
    <div>
        <div>Voltar</div>
        <div>
            <div>
                <img />
            </div>
            <TrackList>
                <ol>
                  {playlistItems}
                </ol>
            </TrackList>
        </div>
    </div>
  );
}

export default Album;