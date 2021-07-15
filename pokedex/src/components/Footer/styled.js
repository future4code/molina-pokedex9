import styled from "styled-components";

export const SocialMidia = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
`;

export const IconSocial = styled.div`
  height: 35px;
  width: 35px;
  display: flex;  
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: black;   
`;

export const FooterContainer = styled.div`
  display: flex;  
  align-items: center;
  height: 8vh;  
  justify-content: center;
  background-color: #CF1834;  
  position: relative;
`;

export const img = styled.img`
  width: auto;
  height: auto;
  max-height: 5px;
  max-width: 5px;
  margin-top: 5%;  
`;

export const Direitos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* margin: 1%; */
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: #FFFF;
  text-align: justify;
`;