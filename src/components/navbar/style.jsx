import styled from "styled-components";

export const Block = styled.div`
  padding-block: 20px;
  padding-inline: 50px;
  text-transform: uppercase;
  background-color: #ffffffa0;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  align-items: start;
  .line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-left: 20%;
    margin-right: 40px;
    a {
      color: #2c2d2d;
      white-space: nowrap;
    }
    .links,
    .socials,
    .services {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 10px;
    }
    .links {
      a {
        text-decoration: none;
      }
    }
    .languages {
      display: flex;
      gap: 15px;
      font-size: 12px;
      span {
        cursor: pointer;
      }
      :nth-child(2) {
        color: #b5b5b5;
      }
    }
  }
  .icons {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 15px;
    svg {
      cursor: pointer;
    }
    :nth-child(2) {
      font-size: 23px;
    }
  }
  @media screen and (max-width: 700px) {
    display: block;
    height: ${(p) => (p.open ? "auto" : "70px")};
    padding: 10px;
    overflow: hidden;
    .services {
      display: none !important;
    }
    img {
      height: 30px;
      margin-top: 10px;
    }
    .icons {
      position: absolute;
      top: calc(55px / 2);
      right: 20px;
    }
    .line {
      margin-top: 30px;
      margin-inline: 0;
      gap: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
