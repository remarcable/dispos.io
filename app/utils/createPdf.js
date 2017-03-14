import fs from 'fs';
import os from 'os';
import path from 'path';
import { BrowserWindow, ipcMain, shell } from 'electron';

ipcMain.on('create-and-open-pdf', (event) => {
  const pdfPath = path.join(os.tmpdir(), 'print.pdf');
  const win = BrowserWindow.fromWebContents(event.sender);
  // Use default printing options
  win.webContents.printToPDF({}, (error, data) => {
    if (error) throw error;
    fs.writeFile(pdfPath, data, (error) => {
      if (error) {
        throw error;
      }
      shell.openExternal(`file://${pdfPath}`);
      event.sender.send('wrote-pdf', pdfPath);
    });
  });
});
