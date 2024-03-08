import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`;

export const SearchFormContent = styled.form`
  margin-top: 72px;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 18px;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  input {
    width: 100%;
    height: 50px;
    margin-top: 12px;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    padding: 12px 16px;
    color: ${(props) => props.theme["base-text"]};
    border-radius: 6px;

    &::placeholder {
      font-size: 16px;
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["blue"]};
    }
  }
`;
