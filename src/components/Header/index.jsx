import React from 'react';
import { SearchButton, Container, InputText, BoxUser } from './styles';
import { GoSearch } from "react-icons/go";


const Header = (props) => {

  return (
    <Container className={props.scrolled? 'filled' : ''}>
      
      <InputText placeholder="Type here..." onChange={(e)=> {setTerm(e.target.value)}} />
      <SearchButton><GoSearch size={18} /></SearchButton>
      <BoxUser>{props.userName}</BoxUser>
    </Container>
  );
}

export default Header;