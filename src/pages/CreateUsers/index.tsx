import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import useLocalStorage from '../../hooks/useLocalStorage';

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { TiUserOutline, TiDocument, TiPhoneOutline, TiMail, TiArrowLeft } from "react-icons/ti";

import { ContentForm, ContentButton, NavBack } from './styles';
import { MyRouteComponentProps, User, UserError } from '../interfaces';

import { userSchema } from './schema';
import { getValidationErros, removeAllCharactersExceptNumbers } from '../../utils';

const CreateUsers: React.FC<MyRouteComponentProps> = ({ history, match }) => {
  const [usersStorage, setUsersStorage] = useLocalStorage<User[]>('leo@users', []);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [errors, setErros] = useState<UserError | undefined | null>();
  const [data, setData] = useState<User>({
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  });

  function handleLocalStorage(usr: User): void {
    const _usersStorage = [...usersStorage];

    isEdit ? _usersStorage.splice(Number(match.params?.id), 1, usr) : _usersStorage.push(usr);

    setUsersStorage(_usersStorage);
    
    toast.success(`Usuário ${isEdit ? 'alterado' : 'adicionado'} com sucesso!`);

    history.push("/");
  };

  async function handleSubmit(): Promise<void> {
    try {
      const schema = yup.object().shape(userSchema);

      const _data: User = {
        ...data,
        cpf: removeAllCharactersExceptNumbers(data.cpf),
        telefone: removeAllCharactersExceptNumbers(data.telefone)
      };

      await schema.validate(_data, {
        abortEarly: false
      });

      handleLocalStorage(_data);
    } catch (error) {
      const errors = getValidationErros(error);

      setErros(errors);

      toast.error('Um ou mais campos não foram validados com sucesso!', {
        autoClose: 5000
      });
    }
  }

  function handleChangeData(value: string, name: string): void {
    setData({ ...data, [name]: value });
  };

  function handleInputFocus() {
    setErros(null);
  }

  useEffect(() => {
    if (match.params?.id) {
      if (!usersStorage.length) return;

      setIsEdit(true);
      setData(usersStorage[Number(match.params.id)]);
    }
  }, [match.params?.id]);

  return (
    <Container title="Adicionar novo usuário">
      <ContentForm>
        <Input
          name="nome"
          placeholder="Nome"
          icon={TiUserOutline}
          onChangeValue={handleChangeData}
          value={data.nome}
          error={errors?.nome}
          onFocus={handleInputFocus}
          />
        <Input
          name="cpf"
          placeholder="CPF"
          icon={TiDocument}
          mask="999.999.999-99"
          onChangeValue={handleChangeData}
          value={data.cpf}
          error={errors?.cpf}
          onFocus={handleInputFocus}
        />
        <Input
          name="telefone"
          placeholder="Telefone"
          icon={TiPhoneOutline}
          mask="(99) 9 9999-9999"
          onChangeValue={handleChangeData}
          value={data.telefone}
          error={errors?.telefone}
          onFocus={handleInputFocus}
        />
        <Input
          name="email"
          placeholder="Email"
          icon={TiMail}
          onChangeValue={handleChangeData}
          value={data.email}
          error={errors?.email}
          onFocus={handleInputFocus}
        />
      </ContentForm>
      <ContentButton>
        <NavBack href="/">
          <TiArrowLeft />
          Voltar para lista de usuários
        </NavBack>
        <Button label={isEdit ? "Alterar" : "Adicionar"} onClick={handleSubmit}/>
      </ContentButton>
    </Container>
  );
};

export default CreateUsers;