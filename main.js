const { app, BrowserWindow } = require('electron');

const { join } = require('path');

let mainWindow;

app.on('window-all-closed', function(){
  if(process.platform != 'darwin') app.quit();
});

app.on('ready', function(){
  mainWindow = new BrowserWindow({ width: 1200, height: 1000 });

  mainWindow.loadURL('http://localhost:8080/index.html');

  mainWindow.on('closed', function(){

    mainWindow = null;

  });
});