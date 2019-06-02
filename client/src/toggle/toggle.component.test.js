import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Toggle from './toggle.component';
import Switch from './switch.component';

describe('Toggle Component', () => {
  afterEach(cleanup);

  it('should toggle state from off to on', () => {
    const handler = jest.fn();
    const { container, rerender } = render(
      <Toggle onToggle={handler}>{({ on, toggle }) => <Switch on={on} onClick={toggle} />}</Toggle>
    );

    const element = container.querySelector('button');

    expect(element).toHaveClass('toggle-btn-off');
    expect(element).not.toHaveClass('toggle-btn-on');

    fireEvent.click(element);

    expect(handler).toHaveBeenCalled();

    rerender(<Toggle onToggle={handler}>{({ on, toggle }) => <Switch on={on} onClick={toggle} />}</Toggle>);

    expect(element).toHaveClass('toggle-btn-on');
    expect(element).not.toHaveClass('toggle-btn-off');
  });
});
