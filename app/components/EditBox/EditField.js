import React, { Component, PropTypes } from 'react';
import AutosizeTextarea from 'react-textarea-autosize';
import classnames from 'classnames';

import styles from './EditField.css';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default class EditField extends Component {
  constructor() {
    super();

    this.state = {
      isFocused: false,
    };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnLabelClick = this.handleOnLabelClick.bind(this);
  }
  handleOnFocus() {
    this.setState({ isFocused: true });
  }
  handleOnBlur() {
    this.setState({ isFocused: false });
  }
  handleOnLabelClick() {
    // This is a convenience feature
    this.textArea.focus();
  }
  render() {
    const labelClassNames = classnames(styles.label, {
      [styles.activeLabel]: this.state.isFocused,
    });

    return (
      <div className={styles.wrapper}>

        <h4 // eslint-disable-line jsx-a11y/no-static-element-interactions
          className={labelClassNames}
          onClick={this.handleOnLabelClick}
        >
          {this.props.label}
        </h4>
        <AutosizeTextarea
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          ref={c => { this.textArea = c; }}
          className={styles.input}
        />
      </div>
    );
  }
}

EditField.propTypes = propTypes;
