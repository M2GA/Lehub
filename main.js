"use strict";

const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const ejs                                     = require('ejs-electron');
const fs                                      = require('fs');
const path                                    = require('path');
const url                                     = require('url');

// DATA
const config = JSON.parse(fs.readFileSync('./config.json', 'UTF-8'));

app.disableHardwareAcceleration();

app.allowRendererProcessReuse = false;

let update = false;
function checkUpdate() {
  console.log('Sarting Check Update');
  if (update || update == true) startUpdate();
  return update;
};

function startUpdate() {
  console.log('Sarting Updater');
  // Module updater
};

let win;
app.whenReady().then(startApp);
async function startApp() {
  const update = await checkUpdate();
  if (update == false) {
  console.log('Starting app');
    win = new BrowserWindow({
    width: 1435,
    height: 800,
    icon: getPlatformIcon(('icon')),
    webPreferences: {
      devTools : true,
      nodeIntegration: true
    }
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'views', 'app.ejs'),
    protocol: 'file:',
    slashes: true
  }));

  // Disable comment on public version
  //win.removeMenu();

  // Activate comment on production
  win.setMenuBarVisibility(false);

  win.resizable = true;

  win.on('closed', () => {
      win = null
  });
};
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

function getPlatformIcon(filename) {
  let ext
  switch(process.platform) {
    // Change ext to ico
    case 'win32':
      ext = 'png'
      break
    case 'darwin':
    case 'linux':
    default:
      ext = 'png'
      break
  };
  return path.join(__dirname, 'resources', `${filename}.${ext}`);
};

ipcMain.on('open-file-dialog', (event) => {

  dialog.showOpenDialog({
    title: 'Selectionner Votre jeu !',
    defaultPath: 'C:',
    buttonLabel: "Valider",
    properties: ['openFile'],
    filters: [
      {name: '.exe', extensions: ['exe']},
    ]
  }).then(result => {
    console.log(result);
    if (result.canceled) return;
      // var str = 'C:\\Riot Games\\VALORANT\\live\\VALORANT.exe';
      // var arr = str.split('\\ *REGEX');
      // var exe = arr[arr.length-1];
      // var res = exe.split('.')[0];
      // console.log(res);
      console.log(result);
    if (result.filePaths) {
      let name = result.filePaths[0].split(/(\\\\?([^\\/]*[\\/])*)([^\\/]+)$/g); 
      var path = result.filePaths;
      let content = result.filePaths;
      let dir = 'db/save.json';

      event.reply('selectedFile', path);
        
      fs.writeFile(dir, JSON.stringify(content), (err) => {
        if (err) {
          console.error(err);
        }
        console.log('Saved!');
      });
    };
  }).catch(err => {
  console.error(err);
});
});