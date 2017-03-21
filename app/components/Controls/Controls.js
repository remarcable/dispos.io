import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import className from 'classnames';

import windowDimensions from 'react-window-dimensions';
import debounce from 'lodash.debounce';

import {
  requestNewFile,
  requestOpenFile,
  requestCloseFile,
  requestSaveFile,
  requestPrint,
} from '../../actions';

import styles from './Controls.css';

import ControlBox from './ControlBox';

const propTypes = {
  width: PropTypes.number.isRequired,
  dispatchRequestNewFile: PropTypes.func.isRequired,
  dispatchRequestOpenFile: PropTypes.func.isRequired,
  dispatchRequestCloseFile: PropTypes.func.isRequired,
  dispatchRequestSaveFile: PropTypes.func.isRequired,
  dispatchRequestPrint: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatchRequestNewFile: () => dispatch(requestNewFile()),
  dispatchRequestOpenFile: () => dispatch(requestOpenFile()),
  dispatchRequestCloseFile: () => dispatch(requestCloseFile()),
  dispatchRequestSaveFile: () => dispatch(requestSaveFile()),
  dispatchRequestPrint: () => dispatch(requestPrint()),
});

const Controls = ({
  width,
  dispatchRequestNewFile,
  dispatchRequestOpenFile,
  dispatchRequestSaveFile,
  dispatchRequestPrint,
  dispatchRequestCloseFile }) => (
    <div className={styles.controlsWrapper}>
      <div className={className([styles.controls, { [styles.isSmall]: width < 935 }])}>
        <ControlBox
          letter="N"
          caption="New"
          onClick={dispatchRequestNewFile}
        />
        <ControlBox
          letter="O"
          caption="Open"
          onClick={dispatchRequestOpenFile}
        />
        <ControlBox
          letter="S"
          caption="Save"
          onClick={dispatchRequestSaveFile}
        />
        <ControlBox
          letter="P"
          caption="Print"
          onClick={dispatchRequestPrint}
        />
        <ControlBox
          letter="W"
          caption="Close"
          onClick={dispatchRequestCloseFile}
        />
      </div>
    </div>
);

Controls.propTypes = propTypes;

const ControlsWithWindowProps = windowDimensions({
  debounce: onResize => debounce(onResize, 150),
})(Controls);

export default connect(
  null,
  mapDispatchToProps,
)(ControlsWithWindowProps);
