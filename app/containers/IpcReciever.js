import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { ipcRenderer } from 'electron';
import { readFile as readJSONFile } from 'jsonfile';
import { setSheet, setEmptySheet } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchSetSheet: (
    general,
    schedule,
    requirements,
    additionalDetails,
    actions,
  ) => dispatch(setSheet(general, schedule, requirements, additionalDetails, actions)),
  dispatchSetEmptySheet: () => dispatch(setEmptySheet()),
});

const propTypes = {
  dispatchSetEmptySheet: PropTypes.func.isRequired,
  dispatchSetSheet: PropTypes.func.isRequired,
};

class IpcReciever extends Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    const { dispatchSetEmptySheet, dispatchSetSheet } = this.props;

    ipcRenderer.on('new-file', () => {
      dispatchSetEmptySheet();
    });

    ipcRenderer.on('open-file', (e, filePath) => {
      readJSONFile(filePath, (err, obj) => {
        if (err) {
          console.log('myError', err);
          return;
        }
        const { general, schedule, requirements, additionalDetails, actions } = obj;
        dispatchSetSheet(general, schedule, requirements, additionalDetails, actions);
      });
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('new-file');
    ipcRenderer.removeListener('open-file');
  }

  render() {
    return null;
  }
}

IpcReciever.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps,
)(IpcReciever);
