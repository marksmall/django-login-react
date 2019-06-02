import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import CloseButton from './close-button.component';

describe('Close Button', () => {
  afterEach(cleanup);

  it('should render a button tag with an SVG', () => {
    const { container, getByText } = render(<CloseButton />);

    let element = container.querySelector('button');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('close');

    element = getByText('close.svg');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('icon');
  });

  it('should append custom class', () => {
    const { container } = render(<CloseButton className="foo" />);

    expect(container.querySelector('button')).toHaveClass('foo');
  });

  it('handle onClick event', () => {
    const handler = jest.fn();
    const { container } = render(<CloseButton onClick={handler} />);

    fireEvent.click(container.querySelector('button'));
    expect(handler).toHaveBeenCalled();
  });
});
