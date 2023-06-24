import styled from "styled-components"


export const Container = styled.section`
  display: grid;
  grid-area: meio;
  grid-template-rows: 250px 340px;
  color: #ffffff;
  border: 1px solid black;
  box-shadow: 0px 0px 3px 0px black;

  @media(max-width: 415px) {
    grid-template-rows: 150px 240px;
    }

  h1 {
    margin: 30px 30px;
    display: flex;
    justify-content: center;
    text-align: justify;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
  }

  h5 {
    margin: 0px 30px 15px;
    font-family: Montserrat-Regular;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.84px;
    color: #fff;
    text-align: justify;

  }
`

export const Images_events = styled.div`
  display: flex;

  img {
    box-shadow: 0px 0px 7px 1px white;
    width: 100%;
    object-fit: cover;
  }
`

export const Linha = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50px;
  animation: move 2s ease-in-out infinite,
             espiral 4s linear infinite;
  animation-direction: alternate;
  
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  @keyframes espiral {
    0% {
      transform: rotate(0) translateX(0);
    }
    100% {
      transform: rotate(360deg) translateX(50%);
    }
  }
`;

export const Linha2 = styled.div`
  width: 3px;
  height: 150px;
  background-color: #000;

  transform: translateY(-50%) skewY(10deg);
  animation: move 2s ease-in-out infinite alternate;
  
  @keyframes move {
    0% {
      transform: translateY(-30%) skewY(40deg) translateX(0);
    }
    100% {
      transform: translateY(-50%) skewY(40deg) translateX(20px);
    }
  }
`;


export const MessageMusic = styled.div`
  display: flex;
  background: linear-gradient(336deg,rgb(32,10,97),rgb(173,16,121));
  flex-direction: column;
  align-items: end;

  h2 {
    color: linear-gradient(135deg,rgb(32,10,97),rgb(173,16,121));
    display: flex;
    font-size: 24px;
    padding: 50px 80px 0px 80px;
    text-align: justify;
    letter-spacing: 1px;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    animation-name: wave;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    /* Defina a animação */
    @keyframes wave {
      0% {
        text-shadow: 0 0 0 #ffffff;
      }
      50% {
        text-shadow: 0 -10px 10px #ffffff;
      }
      100% {
        text-shadow: 0 0 0 #ffffff;
      }
    }
  }

  @media(max-width: 415px) {
    h2 {
      color: linear-gradient(135deg,rgb(32,10,97),rgb(173,16,121));
      display: flex;
      font-size: 14px;
      margin: 24px;
      text-align: center;
      letter-spacing: 1px;
      padding: 0px 12px 0px 12px;
      font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
      animation-name: wave;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      justify-content: center;
  }
  }

`

