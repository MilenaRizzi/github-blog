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
  margin: 48px 0 20px;

`;

export const PostContent = styled.div`
  max-width: 416px;
  height: 260px;
  background: ${(props) => props.theme["base-post"]};
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid transparent;
  overflow: hidden;


    
    span {
      font-size: 14px;
      color: ${(props) => props.theme["base-span"]};
    }
  

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 20px;
    width: 100%vw;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 16px;
    line-height: 28px;
    margin-top: 20px;
    height: 112px;
    overflow: hidden; 
     /* display: -webkit-box;
    -webkit-line-clamp: 3; // número de linhas que você deseja exibir
    -webkit-box-orient: vertical; */
  }

  &:hover{
    border: 2px solid ${(props) => props.theme["base-label"]};

  }
`;
