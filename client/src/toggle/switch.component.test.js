import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Switch from './switch.component';

describe('Switch Component', () => {
  afterEach(cleanup);

  it('should render in the off state', () => {
    const handler = jest.fn();
    const { container } = render(<Switch on={false} onClick={handler} />);

    let element = container.querySelector('button');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('toggle-btn');
    expect(element).toHaveClass('toggle-btn-off');
    expect(element).not.toHaveClass('toggle-btn-on');

    element = container.querySelector('.toggle-input');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('type', 'checkbox');
  });

  it('should render in the on state', () => {
    const handler = jest.fn();
    const { container } = render(<Switch on={true} onClick={handler} />);

    let element = container.querySelector('button');
    expect(element).toBeInTheDocument();
    expect(element).not.toHaveAttribute('disabled');
    expect(element).toHaveClass('toggle-btn');
    expect(element).toHaveClass('toggle-btn-on');
    expect(element).not.toHaveClass('toggle-btn-off');

    element = container.querySelector('.toggle-input');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('type', 'checkbox');
  });

  it('should switch from off to on state', () => {
    const handler = jest.fn();
    const { container, rerender } = render(<Switch on={false} onClick={handler} />);

    let element = container.querySelector('button');
    expect(element).toHaveClass('toggle-btn-off');
    expect(element).not.toHaveClass('toggle-btn-on');

    fireEvent.click(element);
    expect(handler).toHaveBeenCalled();

    rerender(<Switch on={true} onClick={handler} />);
    expect(element).toHaveClass('toggle-btn-on');
    expect(element).not.toHaveClass('toggle-btn-off');
  });

  describe('Switch Disabled', () => {
    afterEach(cleanup);

    it('should render in disabled state', () => {
      const handler = jest.fn();
      const { container } = render(<Switch on={false} onClick={handler} disabled />);

      let element = container.querySelector('button');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('disabled');
    });

    it('should not propagate onClick event', () => {
      const handler = jest.fn();
      const { container, debug } = render(<Switch on={false} onClick={handler} disabled />);
      debug();

      fireEvent.click(container.querySelector('button'));

      expect(handler).not.toHaveBeenCalled();
    });
  });
});
