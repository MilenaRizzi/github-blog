import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 864px;
  height: 212px;
  background: ${props => props.theme["base-profile"]};
  color: ${(props) => props.theme["base-title"]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: -90px;
  gap: 20px;
  position: relative;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin: 0 32px 0 40px;
  }
 
`
export const ProfileInfos = styled.div`
display: flex;
flex-direction: column;

  h1 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  p {
    width: 612px;
    font-size: 16px;
    color: ${props => props.theme["base-text"]};
  }
  
 
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 32px;

    a {
      text-decoration: none;
      color:  ${props => props.theme["blue"]};
      font-size: 12px;
      text-transform: uppercase;
      margin-right: 8px;
    
     &:hover{
      text-decoration: underline;
     }
  }
`
export const SocialMedia = styled.div`
  display: flex;
  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 24px;

    span {
      color: ${props => props.theme["base-subtitle"]};
    }
  }

 
`