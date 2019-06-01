import React from 'react';
import { shallow, mount } from 'enzyme';

import Toggle from './toggle.component';
import Switch from './switch.component';

describe('Toggle Component', () => {
  it('should toggle state on', () => {
    const onToggle = jest.fn();

    const testee = mount(
      <Toggle onToggle={() => {}}>
        {({ on, toggle }) => <Switch on={on} onClick={toggle} />}
      </Toggle>
    );

    expect(testee).toMatchSnapshot();
    expect(onToggle.mock.calls.length).toEqual(0);
    expect(testee.find('.toggle-btn').length).toEqual(1);
  });
});
