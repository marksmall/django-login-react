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
  });
});
