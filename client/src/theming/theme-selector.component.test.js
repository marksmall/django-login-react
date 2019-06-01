import React from 'react';
import { mount, shallow } from 'enzyme';

import ThemeSelector from './theme-selector.component';

describe('Theme Selector Component', () => {
  let testee = null;
  let selectedTheme = null;
  let selectTheme = null;

  const THEMES = [
    {
      value: 'light',
      label: 'Light'
    },
    {
      value: 'dark',
      label: 'Dark'
    }
  ];

  beforeEach(() => {
    selectTheme = jest.fn();
    selectedTheme = THEMES[1];
    testee = mount(
      <ThemeSelector
        themes={THEMES}
        selectedTheme={selectedTheme}
        selectTheme={selectTheme}
      />
    );
  });

  it('should render all Theme options', () => {
    expect(testee.find('Select').prop('options')).toEqual(THEMES);
  });

  it('should render with the `Dark` Theme selected', () => {
    expect(testee.find('Select').prop('value')).toEqual(selectedTheme);
  });

  it('should call the selectTheme with the `Light` Theme selected', () => {
    testee = shallow(
      <ThemeSelector
        themes={THEMES}
        selectedTheme={selectedTheme}
        selectTheme={selectTheme}
      />
    );

    testee
      .find('StateManager')
      .simulate('change', { target: { value: 'light' } });

    expect(selectTheme).toHaveBeenCalled();
  });
});
