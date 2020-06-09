import React, {useState, useEffect} from 'react';
import { Container, Label, InputText, TextTerm, Results} from './styles';

const Home = () => {
  const [term, setTerm] = useState('');
  
  useEffect(()=>{
    console.log('testeX');

  },[])
  return (
    <Container>
      <Label>Busque por artistas, álbuns ou músicas</Label>
      <InputText placeholder="Comece a escrever..." onChange={(e)=> {setTerm(e.target.value)}} />
      <TextTerm className={term != '' ? 'show' : ''}>Resultados encontrados para "{term}"</TextTerm>
      <Results>
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
        </div>
        <div className="item loading">
          <div className="box-img"><img src="" /></div>
          <span></span>
          <span></span>
        </div> 
      </Results>
    </Container>
  );
}

export default Home;