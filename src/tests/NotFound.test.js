// import { render } from '@testing-library/react';
import React from 'react';
import { screen } from '@testing-library/react';
// import App from '../App';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';
// import userEvent from '@testing-library/user-event';

test('É exibido na tela um h2 com o texto Page requested not found', () => {
  renderWithRouter(<NotFound />);
  const text = screen.getByRole('heading', { name: /Page requested not found/i });
  expect(text).toBeInTheDocument();
});

test('Existe uma imagem com o src', () => {
  renderWithRouter(<NotFound />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
