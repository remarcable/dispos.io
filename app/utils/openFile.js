import { dialog } from 'electron';

export default function openFile(mainWindow) {
  dialog.showOpenDialog(mainWindow, {
    filters: [
      { name: 'Dispos.io file', extensions: ['dispo'] }
    ],
    properties: ['openFile', 'createDirectory', 'promtToCreate'],
  }, (files) => {
    if (files === undefined) return;
    const filePath = files[0];

    setTimeout(() => {
      mainWindow.webContents.send('open-file', filePath);
    }, 200);  // To make app appear faster
  });
}
