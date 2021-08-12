import styled from "styled-components";

export const ContentForm = styled.form`
  width: 100%;
  margin-bottom: 30px;

  @media(min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      width: 49%;
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;

  @media(min-width: 768px) {
    justify-content: space-between;
  }
`

export const NavBack = styled.a`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media(min-width: 768px) {
    margin-top: 0;
    width: 260px;
  }
`