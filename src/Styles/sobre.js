import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-area: sobre;
  background-color: #8c0d27;
  grid-template-columns: 1fr;
  overflow-y: auto;

  @media(max-width: 415px) {
    grid-template-columns: 1fr;
  }
`

export const TitleEvents = styled.h5`
  font-size: 24px;
  letter-spacing: 2px;
  font-weight: 700;
  margin: 8px;
  color: white;
  padding: 8px 0px 0px 16px;
  position: absolute;
  font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
`

export const About = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin: 64px 16px;

`
export const Card = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 10px;
  background-size: cover;
  color: white;
  transition: transform 0.3s ease-in-out;
  position: relative;
  border: 1px solid lightgray;
  
  &:hover {
    transform: scale(1.1);
    
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      opacity: 0;
    }
    
    &:hover::before {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      filter: blur(3px);
    }

    h6 {
      position: absolute;
      margin: 8px;
      z-index: 1;
      font-size: 24px;
      color: #FFFFFF;
    }
  }
  
  h6 {
    position: absolute;
    margin: 8px;
    z-index: 1;
    font-size: 24px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: blur(1px);
  }
`
    

export const ContainerButton = styled.div`
  width: 140px;

  a {
    font-size: 14px;
  }
`
export const Button = styled.div`
  margin: 20px 0px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  background-color: #4eaccf;

`
export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 600px) {
    display: none;
    }
`
export const Image = styled.img`
  display: flex;
  margin: 10px;
  padding: 10px;
  height: 145px;
  border: 5px solid black;
`
