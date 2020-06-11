import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {    
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #fafafa;
    background-color: #161616;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px 15px;
  position: relative;

  @media (min-width: 768px) {
      width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;