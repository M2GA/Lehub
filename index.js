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

  // Cache le menu
  win.setMenuBarVisibility(false);
};

// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quand cet événement est émit.
app.whenReady().then(createWindow);

// Quitter si toutes les fenêtres ont été fermées.
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

app.addRecentDocument('/Users/USERNAME/Desktop/work.type')

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
      let dir = 'save.json';

      event.reply('selectedFile', name[3]);
        
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