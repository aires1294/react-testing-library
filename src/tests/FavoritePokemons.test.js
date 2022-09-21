// import { render } from '@testing-library/react';
import React from 'react';
import { screen } from '@testing-library/react';
// import App from '../App';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';
// import userEvent from '@testing-library/user-event';

test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);
  const text = screen.getByText(/No favorite pokemon found/i);
  expect(text).toBeInTheDocument();
});
