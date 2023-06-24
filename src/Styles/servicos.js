import styled from "styled-components"


export const Container = styled.section`
  display: grid;
  grid-area: servicos;
  grid-template-rows: 50px 1fr;
`

export const Title = styled.div`
    text-align:center;
    align-content: center;
    color: #191958;
    border-bottom: 1px solid lightgray;

    
  h2 {
    justify-content: center;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    color: black;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    text-align: center;
  }
`
export const ContainerServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 5px 0.7fr;
  background: linear-gradient(90deg,rgb(129 15 91),rgb(220 195 229));

  @media(max-width: 415px){
    grid-template-columns: 1fr;
  }

`
export const Groover = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.8fr;
  justify-items: center;
  align-items: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 8px;

  a {
    width: 250px;
    height: 300px;
    border: 1px solid black;
    border-radius: 15px;
    background: linear-gradient(145deg, #270e41, #2e104d);
    /* box-shadow:  25px 25px 75px #1f0b34,
             -25px -25px 75px #37135c; */
  }
  img{
    border-radius: 16px;
    height: 235px;
    width: 250px;
    display: inline-block;
    box-shadow: 1px 7px 8px rgb(0 0 0 / 87%);
  }

  h3 {
    display:flex;
    align-items: center;
    margin: 16px;
    font-size: 24px;
    color: white;
    position: relative;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
  }

  @media(max-width: 415px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 300px;

    }

  
`

export const VideoDiv = styled.div`
    width: 250px;
    height: 260px;
    display: flex;


  video {
    position: absolute;
    top: 0px;

    @media(max-width: 415px) {
      display: none;
    }
  }
`

export const ContainerMusicGroover = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 24px;

  h3 {
    font-size: 18px;
    color: #191958;
    text-align: justify;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    gap: 24px;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;

    @media(max-width: 415px) {
      text-align: center;
    }

  }

  p {
    color: #191958;
    margin: 0px 30px 30px 30px;
    text-align: justify;

    @media(max-width: 415px) {
      letter-spacing: 1.84px;
    }
    
  }
`

