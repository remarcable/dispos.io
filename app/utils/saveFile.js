import { dialog } from 'electron';

export default function saveFile(mainWindow) {
  dialog.showSaveDialog(mainWindow, {
    filters: [
      { name: 'Dispos.io file', extensions: ['dispo'] }
    ],
  }, (filePath) => {
    if (filePath === undefined) return;

    setTimeout(() => {
      mainWindow.webContents.send('save-file', filePath);
    }, 200);  // To make app appear faster
  });
}
