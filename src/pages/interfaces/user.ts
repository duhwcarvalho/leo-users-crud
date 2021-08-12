export interface User {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
};

export interface UserError {
  nome?: string;
  cpf?: string;
  telefone?: string;
  email?: string;
};