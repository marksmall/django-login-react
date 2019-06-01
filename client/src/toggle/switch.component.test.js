import React from 'react';
import { shallow } from 'enzyme';

import Switch from './switch.component';

describe('Switch Component', () => {
  it('should be in the on style', () => {
    const on = true;
    const onClick = jest.fn();

    const testee = shallow(<Switch on={on} onClick={onClick} />);

    expect(testee).toMatchSnapshot();
    expect(testee.find('.toggle-btn-on').length).toEqual(1);
    expect(testee.find('.toggle-btn-off').length).toEqual(0);
  });

  it('should be in the off style', () => {
    const on = false;
    const onClick = jest.fn();

    const testee = shallow(<Switch on={on} onClick={onClick} />);

    expect(testee.find('.toggle-btn-on').length).toEqual(0);
    expect(testee.find('.toggle-btn-off').length).toEqual(1);
  });

  it('should switch from off to on style', () => {
    const on = true;
    const onClick = jest.fn();

    const testee = shallow(<Switch on={on} onClick={onClick} />);

    expect(testee.find('.toggle-btn-on').length).toEqual(1);
    expect(onClick.mock.calls.length).toEqual(0);

    testee.find('button').simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
