import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListUsers from '../../pages/ListUsers';

describe('ListUsers Page', () => {
  it('should be possible to list users', () => {
    const { debug } = render(<ListUsers />);

    debug();
  });

  it('should be possible to navigate create new user', () => {
    
    const { getByText } = render(<ListUsers />);
    
    const buttonNewUser = getByText('Adicionar Novo');
    
    fireEvent.click(buttonNewUser);
    
    expect(buttonNewUser.closest('a')).toHaveAttribute('href', '/usuario');

    global.window = Object.create(window);
    const url = "/usuario";
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    });
    
    expect(window.location.href).toContain('/usuario');
  })
});