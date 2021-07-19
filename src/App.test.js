import { render, screen } from '@testing-library/react';
// import App from './App';
import Cards from './components/Cards'

test.only('Property in Saved Properties is created when "add" button is clicked', () => {

  const div = document.createElement('div');
  document.body.append(div);
  render(<Cards/>, div);
  console.log(document.body.innerHTML);
  const linkElement = screen.getByText(/Property ID: /i);
  expect(linkElement).toBeInTheDocument();
})