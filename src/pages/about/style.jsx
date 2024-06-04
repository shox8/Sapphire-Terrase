import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  color: #2c2d2d;
  hr {
    margin-block: 40px;
    border: 0.1px solid #d8d8d8;
  }
  .head-img {
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
    .head-img {
      width: 100%;
      height: calc(100dvh - 140px);
      object-fit: cover;
    }
  }
`;
