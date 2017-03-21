import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { ipcRenderer } from 'electron';

import {
  requestNewFile,
  requestOpenFile,
  openFile,
  requestCloseFile,
  requestSaveFile,
  saveFile,
  requestDuplicateFile,
  requestExportToPdf,
  requestPrint,
} from '../actions';

const propTypes = {
  dispatchRequestNewFile: PropTypes.func.isRequired,
  dispatchRequestOpenFile: PropTypes.func.isRequired,
  dispatchOpenFile: PropTypes.func.isRequired,
  dispatchRequestCloseFile: PropTypes.func.isRequired,
  dispatchRequestSaveFile: PropTypes.func.isRequired,
  dispatchSaveFile: PropTypes.func.isRequired,
  dispatchRequestDuplicateFile: PropTypes.func.isRequired,
  dispatchRequestExportToPdf: PropTypes.func.isRequired,
  dispatchRequestPrint: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatchRequestNewFile: () => dispatch(requestNewFile()),
  dispatchRequestOpenFile: () => dispatch(requestOpenFile()),
  dispatchOpenFile: (filePath) => dispatch(openFile(filePath)),
  dispatchRequestCloseFile: () => dispatch(requestCloseFile()),
  dispatchRequestSaveFile: () => dispatch(requestSaveFile()),
  dispatchSaveFile: (filePath) => dispatch(saveFile(filePath)),
  dispatchRequestDuplicateFile: () => dispatch(requestDuplicateFile()),
  dispatchRequestExportToPdf: () => dispatch(requestExportToPdf()),
  dispatchRequestPrint: () => dispatch(requestPrint()),
});

class IpcReciever extends Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on('request-new-file', () => {
      console.log('request-new-file');
      this.props.dispatchRequestNewFile();
    });

    ipcRenderer.on('request-open-file', () => {
      console.log('request-open-file');
      this.props.dispatchRequestOpenFile();
    });

    ipcRenderer.on('open-file', (e, filePath) => {
      console.log('open-file', filePath);
      this.props.dispatchOpenFile(filePath);
    });

    ipcRenderer.on('request-close-file', () => {
      console.log('request-close-file');
      this.props.dispatchRequestCloseFile();
    });

    ipcRenderer.on('request-save-file', () => {
      console.log('request-save-file');
      this.props.dispatchRequestSaveFile();
    });

    ipcRenderer.on('save-file', (e, filePath) => {
      console.log('save-file', filePath);
      this.props.dispatchSaveFile(filePath);
    });

    ipcRenderer.on('request-duplicate-file', () => {
      console.log('request-duplicate-file');
      this.props.dispatchRequestDuplicateFile();
    });

    ipcRenderer.on('request-export-to-pdf', () => {
      console.log('request-export-to-pdf');
      this.props.dispatchRequestExportToPdf();
    });

    ipcRenderer.on('request-print', () => {
      console.log('request-print');
      this.props.dispatchRequestPrint();
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

  render() {
    return null;
  }
}

IpcReciever.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps,
)(IpcReciever);
