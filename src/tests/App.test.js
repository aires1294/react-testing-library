import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se o topo da aplicação contém um conjunto fixo de links: Home ', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByRole('link', { name: /Home/i });
  expect(linkElement).toBeInTheDocument();
});

test('Teste se o topo da aplicação contém um conjunto fixo de links: About ', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByRole('link', { name: /About/i });
  expect(linkElement).toBeInTheDocument();
});

test('Teste se o topo da aplicação contém: Favorite Pokémons ', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(linkElement).toBeInTheDocument();
});
