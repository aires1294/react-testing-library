// import { render } from '@testing-library/react';
import React from 'react';
import { screen } from '@testing-library/react';
// import App from '../App';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';
// import userEvent from '@testing-library/user-event';

// test('É exibido na tela um h2 com texto About Pokédex', () => {
//   const { history } = renderWithRouter(<App />);
//   console.log(history);
//   const { pathname } = history.location;
//   expect(pathname).toBe('/');
// });

test('É exibido na tela um h2 com texto About Pokédex', () => {
  renderWithRouter(<About />);
  const text = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
  expect(text).toBeInTheDocument();
});

test('O atributo src da imagem é', () => {
  renderWithRouter(<About />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  expect(img).toBeInTheDocument();
});
