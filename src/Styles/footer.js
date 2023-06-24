import styled from "styled-components"


export const Container = styled.section`
  display: flex;
  grid-area: footer;
  background: linear-gradient(130deg,rgb(32,10,97),rgb(173,16,121));
  justify-content: center;
  gap: 36px;
  padding: 24px;
  
  h3 {
    font-family: 'Gill Sans','Gill Sans MT', Calibri,'Trebuchet MS',sans-serif;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    margin: 10px;
    color: #fff;

    @media(max-width: 415px) {
      font-size: 12px;
    }
  }
  
  
  div {
    display: flex;
    gap: 36px;

    img {
      position: relative;
      width: 48px;
      height: 48px;
    }
  }
  
  
  
`
