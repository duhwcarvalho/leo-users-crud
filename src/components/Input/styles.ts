import styled, { css } from "styled-components";
import { ContentInputProps } from "../interfaces";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 11px;
`;

export const ContentInput = styled.div<ContentInputProps>`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 2px solid #f5f5f5;
  padding: 7px 10px;
  width: 100%;
  color: #767676;

  &::placeholder {
    color: #767676;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    margin-left: 20px;
    color: #313131;
  }

  ${props => props.error && css`
    border: 2px solid #FF6969;
  `}
`;

export const InputError = styled.div`
  color: #FF6969;
  font-size: 12px;
  line-height: 14px;
  font-weight: 800;
  align-self: flex-end;
  margin-top: 3px;
  height: 14px;
`