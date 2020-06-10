import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #282828;
  color: #fff;
  position: fixed;
  top: 15px;
  right: 15px;
  left: 15px;
  z-index: 12;
  border-radius: 6px;
  padding: 10px 20px;
  transition: .3s all;

  &.filled {
    top: 0;
    right: 0;
    left: 0;
    border-radius: 0;
  }
`;

export const SearchButton = styled.button`
  display: flex; 
  justify-content: center; 
  width: 40px;
  color: #fff;
  background-color: #282828;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const InputText = styled.input`
flex: 1;
  width: 100%;
  color: #fff;
  font-size: 15px;
  background-color: transparent;
  border: none;

  &::-webkit-input-placeholder {
    color: #626262;
  }

  &:focus {
    outline: none;
  }
`;

export const BoxUser = styled.div`
  color: #fff;
`;