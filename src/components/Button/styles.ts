import styled from "styled-components";

export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 0;
  border-radius: 8px;
  width: 300px;
  background: #1D5840;
  color: #F9E900;
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid #F9E900;
  line-height: 22px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  transition: all .33s ease-in-out;

  &:hover {
    background: #F9E900;
    border: 1px solid #1D5840;
    color: #1D5840;
  }
`;