import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Os botões de filtragem por tipo possuem o nome correto', () => {
  renderWithRouter(<App />);
  const text = screen.getByRole('heading', { name: /Encountered pokémons/i });
  expect(text).toBeInTheDocument();
});

test('Teste se é exibido o próximo pokémon da lista quando o botão é clicado:', () => {
  renderWithRouter(<App />);
  const text = screen.getByRole('button', { name: /Próximo pokémon/i });
  userEvent.click(text);
  expect(text).toBeInTheDocument();
});

test('Teste se existe um botão de filtragem pelo tipo de pokémon:', () => {
  renderWithRouter(<App />);
  const pokemon = ['Electric',
    'Fire',
    'Bug',
    'Poison',
    'Psychic',
    'Normal',
    'Dragon'];
  const pokemonType = screen.getAllByTestId('pokemon-type-button');
  expect(pokemonType).toHaveLength(pokemonType.length);
  const typeButton = pokemonType.map((type) => type.textContent);
  expect(pokemon).toEqual(typeButton);
});

test('Teste do boitao all', () => {
  renderWithRouter(<App />);
  const button = screen.getByRole('button', { name: /All/i });
  userEvent.click(button);
  expect(button).toBeInTheDocument();
});
