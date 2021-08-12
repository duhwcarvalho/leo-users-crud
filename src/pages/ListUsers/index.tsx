import React from 'react';
import { toast } from 'react-toastify';
import useLocalStorage from '../../hooks/useLocalStorage';

import Container from '../../components/Container';
import Button from "../../components/Button";
import { TiEdit, TiDeleteOutline } from "react-icons/ti";

import {
  ContentTable,
  TableUsers,
  ButtonAddNew,
  ContentTableActions,
  ButtonActionTable,
  ContentButtonEdit,
  EmptyUsers
} from './styles';
import { User } from '../interfaces';
import { addMask } from '../../utils';

const ListUsers: React.FC = () => {
  const [usersStorage, setUsersStorage] = useLocalStorage<User[]>('leo@users', []);

  function handleLocalStorage(index: number): void {
    const _usersStorage = [...usersStorage];

    _usersStorage.splice(index, 1);

    setUsersStorage(_usersStorage);
    
    toast.success(`Usuário removido com sucesso!`);
  };

  return (
    <Container title="Lista de usuários">
      <ContentTable>
        {
          usersStorage.length ?
          <TableUsers>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            {
              usersStorage.map((user, index) => (
                <tbody key={user.nome + index}>
                  <tr>
                    <td>{user.nome}</td>
                    <td>{addMask(user.cpf, '###.###.###-##')}</td>
                    <td>{addMask(user.telefone, '(##) #####-####')}</td>
                    <td>{user.email}</td>
                    <td>
                      <ContentTableActions>
                        <ContentButtonEdit href={'/usuario/' + index}>
                          <ButtonActionTable>
                            <TiEdit />
                            Editar
                          </ButtonActionTable>
                        </ContentButtonEdit>
                        
                        <ButtonActionTable red onClick={() => handleLocalStorage(index)}>
                          <TiDeleteOutline />
                          Excluir
                        </ButtonActionTable>
                      </ContentTableActions>
                    </td>
                  </tr>
                </tbody>
              ))
            }
          </TableUsers>
          :
          <EmptyUsers>Nenhum usuário encontrado..</EmptyUsers>
        }
      </ContentTable>
      <ButtonAddNew href="/usuario">
        <Button label="Adicionar Novo"/>
      </ButtonAddNew>
    </Container>
  );
};

export default ListUsers;