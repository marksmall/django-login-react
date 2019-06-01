import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
  };

  state = { on: this.props.on || false };

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );

  getStateAndHelpers() {
    return { on: this.state.on, toggle: this.toggle };
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}
