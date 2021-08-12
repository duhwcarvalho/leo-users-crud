import React from 'react';
import { ButtonProps } from '../interfaces';

import { ContainerButton } from './styles';

const Button: React.FC<ButtonProps> = (props) => (
  <ContainerButton type="button" {...props}>
    {props.label}
  </ContainerButton>
);

export default Button;