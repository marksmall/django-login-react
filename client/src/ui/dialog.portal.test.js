import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import DialogPortal from './dialog.portal';

describe('Dialog Portal', () => {
  afterEach(cleanup);

  it('should render a Dialog Portal', () => {
    const { container, getByText, debug } = render(
      <DialogPortal isVisible="true">
        <p>Some Text</p>
      </DialogPortal>
    );

    // debug();
    // expect(container.querySelector('modal-overlay')).toBeInTheDocument();
    // let element = container.querySelector('button');
    // expect(element).toBeInTheDocument();
    // expect(element).toHaveClass('close');

    // element = getByText('close.svg');
    // expect(element).toBeInTheDocument();
    // expect(element).toHaveClass('icon');
  });

  // it('should append custom class', () => {
  //   const { container } = render(<CloseButton className="foo" />);

  //   expect(container.querySelector('button')).toHaveClass('foo');
  // });

  // it('handle onClick event', () => {
  //   const handler = jest.fn();
  //   const { container } = render(<CloseButton onClick={handler} />);

  //   fireEvent.click(container.querySelector('button'));
  //   expect(handler).toHaveBeenCalled();
  // });
});
