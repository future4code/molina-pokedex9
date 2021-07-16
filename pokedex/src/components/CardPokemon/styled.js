import styled from "styled-components";


export const CardPokemonContainer = styled.div`
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: grid;
  grid-template-rows: 90% 10%;
  background-color: #fff5af;
`;

export const ImgContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonImg = styled.img`
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;  
`;