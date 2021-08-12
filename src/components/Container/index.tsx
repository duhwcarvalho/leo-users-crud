import React from 'react';
import { ContainerProps } from '../interfaces';

import logo from '../../assets/logo.svg';
import { ContainerDiv, Header, Content } from './styles';


const Container: React.FC<ContainerProps> = ({ children, title, ...rest }) => (
  <ContainerDiv {...rest}>
    <Header>
      <img src={logo} alt="Leo" />
      <h1>{ title }</h1>
    </Header>
    <Content>
      { children }
    </Content>
  </ContainerDiv>
);

export default Container;