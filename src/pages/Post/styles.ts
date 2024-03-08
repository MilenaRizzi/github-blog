import styled from "styled-components";

export const PostContainer = styled.div`
  width: 864px;
  margin: auto;
`;

export const PostInfo = styled.div`
  height: 180px;
  background: ${(props) => props.theme["base-profile"]};
  padding: 30px;
  margin-top: -90px;
  position: relative;
  border-radius: 10px;

  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    div {
      display: flex;
      align-items: center;
      gap: 8px;

      a {
        color: ${(props) => props.theme["blue"]};
        font-size: 12px;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 24px;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 32px;
  color: ${(props) => props.theme["base-span"]};
  margin-top: 12px;

  div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 10px;
  }

  a {
    color: ${(props) => props.theme["base-span"]};
    text-decoration: none;
  }
`;

export const Content = styled.div`
  padding: 32px;
  color: ${(props) => props.theme["base-text"]};
`;
