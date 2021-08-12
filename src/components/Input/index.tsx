import React from 'react';
import { InputProps } from '../interfaces';

import InputMask from "react-input-mask";
import { ContainerInput, ContentInput, InputError } from './styles';

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  mask,
  error,
  onChangeValue,
  ...rest
}) => {

  function handleChangeData(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();

    onChangeValue(e.target.value, name);
  };

  return (
    <ContainerInput>
      <ContentInput error={error}>
        <Icon />
        {
          mask ?
            <InputMask mask={mask} {...rest} onChange={handleChangeData} />
            :
            <input {...rest} onChange={handleChangeData}/>
        }
      </ContentInput>
      <InputError>{ error }</InputError>
    </ContainerInput>
  );
};

export default Input;