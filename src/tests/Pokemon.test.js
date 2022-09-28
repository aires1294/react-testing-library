import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

const pokemonInfos = pokemons[0];

test('A imagem do pokemon possui o src correto', () => {
  renderWithRouter(<App />);
  const img = screen.getByRole('img', { name: /pikachu sprite/i });
  const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  const text = screen.getByText(/Pikachu/i);
  const type = screen.getAllByText(/Electric/i);
  const weight = screen.getByText(/Average weight: 6.0 kg/i);
  expect(img).toBeInTheDocument();
  expect(img.src).toBe(url);
  expect(text).toBeInTheDocument();
  expect(type.length).toBe(2);
  expect(weight).toBeInTheDocument();
});

test('imagem de favorito  possui o alt <name>', () => {
  renderWithRouter(<App />);
  const img = screen.getByRole('link', { name: /more details/i });
  userEvent.click(img);

  const fav = screen.getByRole(
    'checkbox',
    { name: /pokémon favoritado?/i },
  );
  userEvent.click(fav);

  const novo = screen.getByRole('link', { name: /home/i });
  userEvent.click(novo);

  const favoriteIcon = screen.getByRole(
    'img',
    { name: `${pokemonInfos.name} is marked as favorite` },
  );

  expect(favoriteIcon).toHaveAttribute('src', '/star-icon.svg');
});

test('Texto com o tipo do pokemon', () => {
  renderWithRouter(<App />);
  const type = screen.getByTestId('pokemon-type');
  expect(type).toHaveTextContent(pokemonInfos.type);
});
