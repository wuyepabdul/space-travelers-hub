import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('Unit test', () => {
  const intialState = { rockets: { rockets: [] }, missions: [] };
  const mockStore = configureStore();
  const store = mockStore(intialState);

  test('Navbar is rendered in the DOM', () => {
    render(<Provider store={store}><App /></Provider>);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('Navbar should contain Space Travelers\' Hub', () => {
    render(<Provider store={store}><App /></Provider>);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });
});
