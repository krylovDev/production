import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import componentsWithRender from 'shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
  test('have number', () => {
    componentsWithRender(
      <Counter />,
      {
        initialState: {
          counter: {
            value: 10,
          },
        },
      },
    );
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentsWithRender(
      <Counter />,
      {
        initialState: {
          counter: {
            value: 10,
          },
        },
      },
    );
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentsWithRender(
      <Counter />,
      {
        initialState: {
          counter: {
            value: 10,
          },
        },
      },
    );
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
