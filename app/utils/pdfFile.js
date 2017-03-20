import fs from 'fs';
import { dialog } from 'electron';

export default function pdfFile(mainWindow) {
  dialog.showSaveDialog(mainWindow, {
    filters: [
      { name: 'PDF File', extensions: ['pdf'] }
    ],
  }, (filePath) => {
    if (filePath === undefined) return;

    mainWindow.webContents.printToPDF({}, (error, data) => {
      if (error) throw error;

      fs.writeFile(filePath, data, (err) => {
        if (err) {
          throw err;
        }
      });
    });
  });
}
