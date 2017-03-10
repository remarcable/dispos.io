import React, { Component, PropTypes } from 'react';
import AutosizeTextarea from 'react-textarea-autosize';

import FieldWithLabel from '../FieldWithLabel';

import styles from './TextField.css';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isMultiLine: PropTypes.bool,
};

const defaultProps = {
  isMultiLine: false,
};

// TODO: Remove boilerplate code and put this 'focused' behaviour into own component

export default class TextField extends Component {
  constructor() {
    super();

    this.state = {
      isFocused: false,
    };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  handleOnFocus() {
    this.setState({ isFocused: true });
  }
  handleOnBlur() {
    this.setState({ isFocused: false });
  }

  renderInput() {
    return (
      this.props.isMultiLine
      ? <AutosizeTextarea
        value={this.props.value}
        onChange={e => this.props.onChange(e.target.value)}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        className={styles.textarea}
      />
      : <input
        value={this.props.value}
        onChange={e => this.props.onChange(e.target.value)}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        className={styles.textarea}
      />
    );
  }

  render() {
    return (
      <FieldWithLabel
        label={this.props.label}
        isFocused={this.state.isFocused}
      >
        {this.renderInput()}
      </FieldWithLabel>
    );
  }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;
