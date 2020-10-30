const { app, 
        BrowserWindow, 
        ipcMain, 
        dialog } = require('electron');
const { readFileSync } = require('fs');

// DATA
const config = JSON.parse(readFileSync('./config.json', 'UTF-8'));
console.log(config.login);

let win;

function createWindow () {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      devTools : true,
      nodeIntegration: true
    }
  });

  win.loadFile('app/src/app.html');

  win.setMenuBarVisibility(false);
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  };
});


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