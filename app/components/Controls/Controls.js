import React, { PropTypes } from 'react';
import className from 'classnames';

import windowDimensions from 'react-window-dimensions';
import debounce from 'lodash.debounce';

import styles from './Controls.css';

import ControlBox from './ControlBox';

const propTypes = {
  width: PropTypes.number.isRequired,
};

const Controls = ({ width }) => (
  <div className={styles.controlsWrapper}>
    <div className={className([styles.controls, { [styles.isSmall]: width < 935 }])}>
      <ControlBox
        letter="N"
        caption="New"
        onClick={console.log}
      />
      <ControlBox
        letter="O"
        caption="Open"
        onClick={console.log}
      />
      <ControlBox
        letter="S"
        caption="Save"
        onClick={console.log}
      />
      <ControlBox
        letter="P"
        caption="Print"
        onClick={console.log}
      />
      <ControlBox
        letter="W"
        caption="Close"
        onClick={console.log}
      />
    </div>
  </div>
);

Controls.propTypes = propTypes;

export default windowDimensions({
  debounce: onResize => debounce(onResize, 150),
})(Controls);
