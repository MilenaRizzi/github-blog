import styled from "styled-components";

export const CoverContainer = styled.div`
  height: 296px;
  display: flex;
  justify-content: center;
  position: relative;
  background-size: cover;
  width: 100%vw;

  img:nth-child(1) {
    width: 148px;
    position: absolute;
    margin-top: 64px;
  }

  img:nth-child(2) {
    width: 100vw;
    top: 0;
    left: 0;
    max-height: 544px;
    object-fit: cover;
  }
`;
