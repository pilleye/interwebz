import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders under construction', () => {
  render(<App />);
  const linkElement = screen.getByText((_, node) => {
    const hasText = (node: Element) =>
      node.textContent === 'under ~construction~.';
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
  expect(linkElement).toBeInTheDocument();
});
