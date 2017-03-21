import { ipcRenderer } from 'electron';
import { readFile as readJSONFile, writeFile as writeJSONFile } from 'jsonfile';
import { setSheet, setEmptySheet, setFilePath } from '../';

export function requestNewFile() {
  return (dispatch, getState) => {
    const isEditMode = getState().editMode;
    let shouldProceed = true;

    if (isEditMode) {
      shouldProceed = confirm('There already is a file opened. Do you want to proceed?');
    }

    if (shouldProceed) dispatch(setEmptySheet());
  };
}

export function requestOpenFile() {
  return (dispatch, getState) => {
    const isEditMode = getState().editMode
    let shouldProceed = true;

    if (isEditMode) {
      shouldProceed = confirm('There already is a file opened. Do you want to proceed?');
    }

    if (shouldProceed) ipcRenderer.send('grant-open-file');
  }
}

export function openFile(filePath) {
  return (dispatch) => {
    readJSONFile(filePath, (err, obj) => {
      if (err) {
        console.log('myError', err);
        return;
      }
      const { general, schedule, requirements, additionalDetails, actions } = obj;
      dispatch(setSheet(general, schedule, requirements, additionalDetails, actions));
      dispatch(setFilePath(filePath));
    });
  };
}

export function requestCloseFile() {
  return () => {
    console.log('request-close-file');
  };
}

export function requestSaveFile() {
  return (dispatch, getState) => {
    const state = getState();
    const isEditMode = state.editMode;
    if (!isEditMode) return;

    const appData = {
      general: { ...state.general },
      schedule: { ...state.schedule },
      requirements: { ...state.requirements },
      additionalDetails: { ...state.additionalDetails },
      actions: [...state.actions],
    };

    const filePath = state.filePath;

    if (filePath) {
      writeJSONFile(filePath, appData, { spaces: 2 }, (err) => {
        if (err) {
          console.log('myError', err);
        }
      });
    } else {
      ipcRenderer.send('grant-save-file');
    }
  };
}

export function saveFile(filePath) {
  return (dispatch, getState) => {
    const state = getState();
    const isEditMode = state.editMode;
    if (!isEditMode) return;

    const appData = {
      general: { ...state.general },
      schedule: { ...state.schedule },
      requirements: { ...state.requirements },
      additionalDetails: { ...state.additionalDetails },
      actions: [...state.actions],
    };

    writeJSONFile(filePath, appData, { spaces: 2 }, (err) => {
      if (err) {
        console.log('myError', err);
      }
    });
  };
}

export function requestDuplicateFile() {
  return (dispatch, getState) => {
    const isEditMode = getState().editMode;
    if (!isEditMode) return;

    ipcRenderer.send('grant-save-file');
  };
}

export function requestExportToPdf() {
  return (dispatch, getState) => {
    const isEditMode = getState().editMode;
    if (!isEditMode) return;

    ipcRenderer.send('grant-export-to-pdf');
  };
}

export function requestPrint() {
  return (dispatch, getState) => {
    const isEditMode = getState().editMode;
    if (!isEditMode) return;

    ipcRenderer.send('grant-print');
  };
}
