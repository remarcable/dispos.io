import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { ipcRenderer } from 'electron';
import { readFile as readJSONFile, writeFile as writeJSONFile } from 'jsonfile';
import { setSheet, setEmptySheet, setFilePath } from '../actions';

const propTypes = {
  appData: PropTypes.object.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  filePath: PropTypes.string.isRequired,
  dispatchSetEmptySheet: PropTypes.func.isRequired,
  dispatchSetSheet: PropTypes.func.isRequired,
  dispatchSetFilePath: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appData: {
    general: { ...state.general },
    schedule: { ...state.schedule },
    requirements: { ...state.requirements },
    additionalDetails: { ...state.additionalDetails },
    actions: [...state.actions],
  },
  isEditMode: state.editMode,
  filePath: state.filePath,
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
  dispatchSetFilePath: (filePath) => dispatch(setFilePath(filePath)),
});

class IpcReciever extends Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.getAppData = this.getAppData.bind(this);
    this.getFilePath = this.getFilePath.bind(this);
    this.getIsEditMode = this.getIsEditMode.bind(this);
  }

  componentDidMount() {
    const { dispatchSetEmptySheet, dispatchSetSheet, dispatchSetFilePath } = this.props;

    ipcRenderer.on('request-new-file', () => {
      const isEditMode = this.getIsEditMode();
      let shouldProceed = true;
      if (isEditMode) {
        shouldProceed = confirm('There already is a file opened. Do you want to proceed?');
      }

      if (shouldProceed) dispatchSetEmptySheet();
    });

    ipcRenderer.on('request-open-file', () => {
      const isEditMode = this.getIsEditMode();
      let shouldProceed = true;
      if (isEditMode) {
        shouldProceed = confirm('There already is a file opened. Do you want to proceed?');
      }

      if (shouldProceed) ipcRenderer.send('grant-open-file');
    });

    ipcRenderer.on('open-file', (e, filePath) => {
      readJSONFile(filePath, (err, obj) => {
        if (err) {
          console.log('myError', err);
          return;
        }
        const { general, schedule, requirements, additionalDetails, actions } = obj;
        dispatchSetSheet(general, schedule, requirements, additionalDetails, actions);
        dispatchSetFilePath(filePath);
      });
    });

    ipcRenderer.on('request-close-file', () => {
      console.log('request-close-file');
    });

    ipcRenderer.on('request-save-file', () => {
      const isEditMode = this.getIsEditMode();
      if (!isEditMode) return;

      const appData = this.getAppData();
      const filePath = this.getFilePath();

      if (filePath) {
        writeJSONFile(filePath, appData, { spaces: 2 }, (err) => {
          if (err) {
            console.log('myError', err);
          }
        });
      } else {
        ipcRenderer.send('grant-save-file');
      }
    });

    ipcRenderer.on('save-file', (e, filePath) => {
      const isEditMode = this.getIsEditMode();
      if (!isEditMode) return;

      const appData = this.getAppData();
      writeJSONFile(filePath, appData, { spaces: 2 }, (err) => {
        if (err) {
          console.log('myError', err);
        }
      });
    });

    ipcRenderer.on('request-duplicate-file', () => {
      const isEditMode = this.getIsEditMode();
      if (!isEditMode) return;

      ipcRenderer.send('grant-save-file');
    });

    ipcRenderer.on('request-export-to-pdf', () => {
      const isEditMode = this.getIsEditMode();
      if (!isEditMode) return;

      ipcRenderer.send('grant-export-to-pdf');
    });

    ipcRenderer.on('request-print', () => {
      const isEditMode = this.getIsEditMode();
      if (!isEditMode) return;

      ipcRenderer.send('grant-print');
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('request-new-file');
    ipcRenderer.removeListener('request-open-file');
    ipcRenderer.removeListener('request-close-file');
    ipcRenderer.removeListener('request-save-file');
    ipcRenderer.removeListener('request-duplicate-file');
    ipcRenderer.removeListener('request-export-to-pdf');
    ipcRenderer.removeListener('request-print');
    ipcRenderer.removeListener('open-file');
    ipcRenderer.removeListener('save-file');
  }

  getAppData() {
    return this.props.appData;
  }

  getFilePath() {
    return this.props.filePath;
  }

  getIsEditMode() {
    return this.props.isEditMode;
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
