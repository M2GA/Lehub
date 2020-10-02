const { app, BrowserWindow, ipcMain, dialog } = require('electron')

const fs = require('fs')
const { dir } = require('console')

let win

function createWindow () {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({
    title: "PlayHub",
    width: 800,
    height: 600,
    webPreferences: {
      devTools : true,
      nodeIntegration: true
    }
  })

  // et charger le fichier index.html de l'application.
  win.loadFile('index.html')

  // Cache le menu
  win.setMenuBarVisibility(false)
}

// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quand cet événement est émit.
app.whenReady().then(createWindow)

// Quitter si toutes les fenêtres ont été fermées.
app.on('window-all-closed', () => {
  // Sur macOS, il est commun pour une application et leur barre de menu
  // de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Sur macOS, il est commun de re-créer une fenêtre de l'application quand
  // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('open-file-dialog', (e, args) => {
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

        e.reply('selectedFile', name[3]);
        
        fs.writeFile(dir, JSON.stringify(content), (err) => {
          if (err) {
            console.error(err);
          }
          console.log('Saved!');
        });
    }
  }).catch(err => {
    console.error(err);
  })
})