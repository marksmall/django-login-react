import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Button from './button.component';

describe('Button', () => {
  afterEach(cleanup);

  it('should render a button tag under normal circumstances', () => {
    const { getByText } = render(<Button>Some Text</Button>);
    expect(getByText('Some Text')).toBeInTheDocument();
  });

  it('should render an `a` tag if passed an `href` attribute', () => {
    const { container, getByText } = render(<Button href="foo">Some Text</Button>);

    expect(container.querySelector('button')).not.toBeInTheDocument();
    expect(container.querySelector('a')).toBeInTheDocument();
    const element = getByText('Some Text');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', 'foo');
  });

  it('should render an `a` tag even if `onClick` is present and propagates it', () => {
    const handler = jest.fn();
    const { container, getByText } = render(
      <Button href="foo" onClick={handler}>
        Some Text
      </Button>
    );

    expect(container.querySelector('button')).not.toBeInTheDocument();
    expect(container.querySelector('a')).toBeInTheDocument();
    const element = getByText('Some Text');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', 'foo');

    fireEvent.click(element);
    expect(handler).toHaveBeenCalled();
  });

  it('should have the correct class(s) for styling', () => {
    const { container, getByText, rerender } = render(<Button>Some Text</Button>);

    let element = getByText('Some Text');
    expect(element).toHaveClass('button');
    expect(element).not.toHaveClass('disabled');

    rerender(<Button href="foo">Some Text</Button>);
    expect(container.querySelector('a')).toHaveClass('button');
  });

  it('should propagate the click event', () => {
    const handler = jest.fn();
    const { getByText } = render(<Button onClick={handler}>Some Text</Button>);

    fireEvent.click(getByText('Some Text'));

    expect(handler).toHaveBeenCalled();
  });

  describe('Button disabled', () => {
    afterEach(cleanup);

    it('should add the disabled class for styling', () => {
      const { getByText } = render(<Button disabled>Some Text</Button>);

      const element = getByText('Some Text');
      expect(element).toHaveClass('disabled');
      expect(element).toHaveAttribute('disabled');
    });

    it('should not propagate the click event', () => {
      const handler = jest.fn();
      const { getByText } = render(
        <Button onClick={handler} disabled>
          Some Text
        </Button>
      );

      fireEvent.click(getByText('Some Text'));
      expect(handler).not.toHaveBeenCalled();
    });

    it('should switch between disabled and enabled', () => {
      const handler = jest.fn();
      const { getByText, rerender } = render(
        <Button onClick={handler} disabled>
          Some Text
        </Button>
      );

      let element = getByText('Some Text');
      expect(element).toHaveAttribute('disabled');
      expect(element).toHaveClass('disabled');
      fireEvent.click(element);
      expect(handler).not.toHaveBeenCalled();

      rerender(<Button onClick={handler}>Some Text</Button>);
      element = getByText('Some Text');
      fireEvent.click(element);
      expect(handler).toHaveBeenCalled();
    });
  });

  describe('Button active', () => {
    afterEach(cleanup);

    it('should add the active class for styling', () => {
      const { getByText } = render(<Button active={true}>Some Text</Button>);

      expect(getByText('Some Text')).toHaveClass('active');
    });

    describe('Button type', () => {
      afterEach(cleanup);

      it('adds the round class for styling, when type attribute provided', () => {
        const { getByText } = render(<Button type="round">Some Text</Button>);

        expect(getByText('Some Text')).toHaveClass('round');
      });
    });
  });
});
