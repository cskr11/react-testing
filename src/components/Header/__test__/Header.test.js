import { render, screen } from '@testing-library/react';
import Header from '../Header';

// it('render prop match into header', () => {
//   render(<Header title='Todos' />);
//   const headingElement = screen.getByText(/Todos/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it('render prop match into header by role', () => {
//   render(<Header title='Todos' />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// it('renders learn react link', () => {
//   render(<Header title='Todos' />);
//   const headingElement = screen.getByRole('heading', { name: 'Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// it('render getby testid', () => {
//   render(<Header title='Todos' />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

it('length of heading in headers', () => {
  render(<Header title='Todos' />);
  const elements = screen.getAllByRole('heading');
  expect(elements.length).toBe(2);
});
