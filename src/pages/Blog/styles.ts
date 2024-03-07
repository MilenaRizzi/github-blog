import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr); /* Duas colunas */
  gap: 32px; /* Espaço entre os itens */
  justify-items: center;
  padding: 20px 0;

`;

export const PostContent = styled.div`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme["base-post"]};
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 20px;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 16px;
    line-height: 28px;
    overflow: hidden; 
   display: -webkit-box;
    -webkit-line-clamp: 4; // número de linhas que você deseja exibir
    -webkit-box-orient: vertical;
  }

  &:hover{
    border: 2px solid ${(props) => props.theme["base-label"]};

  }
`;
