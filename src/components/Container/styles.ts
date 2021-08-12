import styled from "styled-components";

export const ContainerDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1D5840;
  padding: 30px 50px;
  flex-wrap: wrap;
  border-radius: 0 0 2em 2em;
  width: 100%;
  position: absolute;
  top: 0;

  > img {
    max-width: 150px;
  }

  > h1 {
    font-size: 32px;
    color: #f2f2f2;
    text-align: center;
    margin-top: 10px;
  }

  @media(min-width: 768px) {
    width: 90%;
    justify-content: space-between;
    border-radius: 0 2em 2em;
    top: 8vh;

    > img {
      max-width: 100px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #494949;
  padding: 270px 50px 30px 50px;

  @media(min-width: 768px) {
    height: 70%;
    width: 89.90%;
    justify-content: space-between;
    border-radius: 2em 2em 0;
    padding-top: 100px;
  }
`;