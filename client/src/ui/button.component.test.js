import React from 'react';
import Button from './button.component';
import { shallow } from 'enzyme';

describe('Button', () => {
  it('renders a button tag under normal circumstsances', () => {
    const component = shallow(<Button>Some Text</Button>);
    expect(component.find('button')).toExist();
  });
  it('renders an `a` tag if passed a `href` attribute', () => {
    const component = shallow(<Button href="foo">Some Text</Button>);
    expect(component.find('button')).not.toExist();
    expect(component.find('a')).toExist();
  });
  it('renders an `a` tag even if `onClick` is present and propagets it', () => {
    const handler = jest.fn();
    const component = shallow(
      <Button href="foo" onClick={handler}>
        Some Text
      </Button>
    );
    expect(component.find('button')).not.toExist();
    expect(component.find('a')).toExist();
    component.find('a').simulate('click');
    expect(handler).toHaveBeenCalled();
  });
  it("shows the button's children", () => {
    const component = shallow(<Button>Some Text</Button>);
    expect(component.find('button').text()).toEqual('Some Text');
    const linkComponent = shallow(<Button href="foo">Some Text</Button>);
    expect(linkComponent.find('a').text()).toEqual('Some Text');
  });
  it('has the correct class for styling', () => {
    const component = shallow(<Button>Some Text</Button>);
    expect(component.find('button').hasClass('button')).toBe(true);
    expect(component.find('button').hasClass('disabled')).toBe(false);
    const linkComponent = shallow(<Button href="foo">Some Text</Button>);
    expect(linkComponent.find('a').hasClass('button')).toBe(true);
  });
  it('propagates the click event properly', () => {
    const handler = jest.fn();
    const component = shallow(<Button onClick={handler}>Some Text</Button>);
    component.find('button').simulate('click');
    expect(handler).toHaveBeenCalled();
  });
  describe('disabled', () => {
    it('adds the disabled class for styling', () => {
      const component = shallow(<Button disabled={true}>Some Text</Button>);
      expect(component.find('button').hasClass('disabled')).toBe(true);
      expect(component.props('disabled')).toBeTruthy();
    });
    it("doesn't propaget the click event", () => {
      const handler = jest.fn();
      const component = shallow(
        <Button disabled={true} onClick={handler}>
          Some Text
        </Button>
      );
      component.find('button').simulate('click');
      expect(handler).not.toHaveBeenCalled();
    });
    it('is set on the button, not just the style', () => {
      const handler = jest.fn();
      let component = shallow(
        <Button disabled={true} onClick={handler}>
          Some Text
        </Button>
      );
      expect(component.props('disabled')).toBeTruthy();

      // Re-render to check disabled attribute switches
      component = shallow(<Button onClick={handler}>Some Text</Button>);
      expect(component.prop('disabled')).toBeFalsy();
    });
  });
  describe('active', () => {
    it('adds the active class for styling', () => {
      const component = shallow(<Button active={true}>Some Text</Button>);
      expect(component.find('button').hasClass('active')).toBe(true);
    });
  });
  describe('type', () => {
    it('adds the round class for styling, when type attribute provided', () => {
      const component = shallow(
        <Button active={true} type="round">
          Some Text
        </Button>
      );
      expect(component.find('button').hasClass('round')).toBe(true);
    });
  });
});
