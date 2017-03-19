import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { ipcRenderer } from 'electron';
import { readFile as readJSONFile, writeFile as writeJSONFile } from 'jsonfile';
import { setSheet, setEmptySheet } from '../actions';

const propTypes = {
  appData: PropTypes.object,
  dispatchSetEmptySheet: PropTypes.func.isRequired,
  dispatchSetSheet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appData: {
    general: { ...state.general },
    schedule: { ...state.schedule },
    requirements: { ...state.requirements },
    additionalDetails: { ...state.additionalDetails },
    actions: { ...state.actions },
  },
});

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

class IpcReciever extends Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.getAppData = this.getAppData.bind(this);
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

    ipcRenderer.on('save-file', (e, filePath) => {
      const appData = this.getAppData();
      writeJSONFile(filePath, appData, (err) => {
        if (err) {
          console.log('myError', err);
        }
      });
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('new-file');
    ipcRenderer.removeListener('open-file');
  }

  getAppData() {
    return this.props.appData;
  }

  render() {
    return null;
  }
}

IpcReciever.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IpcReciever);
