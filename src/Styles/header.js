import styled from "styled-components"
import photo_header from "../image/image.webp"

export const Container = styled.header`
   grid-area: header;
   background-color: #1b0211;
   display: grid;
   grid-template-columns: 1fr 0.4fr;

  @media(max-width: 415px) {
    grid-template-columns: 1fr;
  }
`

export const Header = styled.section`

  background-image: url(${photo_header});
  min-height: 250px;
  background-size: cover;
  background-position: center;
  filter: saturate(150%);
  opacity: 90%;
  background-color: rgba(164, 25, 112, 0.8); /* Adiciona a cor neon com 80% de opacidade */
  filter: drop-shadow(2px 4px 20px black);

  @media(max-width: 415px) {
    width: 415px
  }

  @media(max-width: 375px) {
    width: 375px
  }

  @media(max-width: 360px) {
    width: 360px
  }

  @media(max-width: 320px) {
    width: 320px
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    margin: 28px;
    /* padding: 0px 10px; */
    color: #FFFFFF;
    font-size: 16px;
    font-family: Montserrat-Regular;

    border: 2px solid #FFFFFF;
    border-radius: 12px;
    padding: 16px;
    width: 350px;
    justify-content: space-between;

    li {
      
    }
  }
  .Sobre {
    border-left: 20px solid #063447;
  }
  
  a {
    color: #FFFFFF;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 1px;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    padding: 14px;
    z-index:  1000;
  }
  h1 {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 48px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 24px;
    margin-left: 48px;
    z-index: 1000;
    letter-spacing: 1px;

    @media(max-width: 415px) {
      width: 415px;
      font-size: 24px;
    } 
  }
  h2{
    color: #FFFFFF;
    font-weight: 700;
    font-size: 36px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 24px;
    margin-left: 48px;

    @media(max-width: 415px) {
      width: 415px;
      font-size: 24px;
    } 
  }
`

export const ContainerText = styled.section`
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  min-height: 250px;
  background-size: cover;
  background-position: center;
  filter: drop-shadow(2px 4px 20px black) blur(0px);
  position: relative;

  img {
    max-width: 100%;
    height: 100%;
    filter: blur(1px);
  }

  @media(max-width: 415px) {
    display: none;
  }
`

export const Profissao = styled.div`
    display: grid;
    grid-template-rows: 100px 1fr;

    @media(max-width: 415px){
    grid-template-rows: 1fr;
    margin-right: 10px;
  }

    p {
      font-size: 17px;
      margin: 6px 15px;
    }
    img {
      height: 30px;
    }    
`
export const Simbol = styled.div`
  position: relative;
  
  @media(max-width: 415px) {
    display: none;
    }
`
export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  justify-content: space-between;
  gap: 48px;

  img {
    position: relative;
    width: 48px;
    height: 48px;
  }

  @media(max-width: 415px){
    display: flex;
    justify-content: space-between;
    margin-right: 0px;
  }
`