import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter
        numberOfIncompleteTasks={numberOfIncompleteTasks}
      ></TodoFooter>
    </BrowserRouter>
  );
};

describe('check point', () => {
  // it('should render task plural', () => {
  //   render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  //   const paragraphEl = screen.getByText(/5 tasks left/i);
  //   expect(paragraphEl).toBeInTheDocument();
  // });

  it('should render task singular', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphEl = screen.getByTestId(/para/i);
    expect(paragraphEl).toHaveTextContent('1 task left');
  });
});
