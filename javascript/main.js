const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow ({
        width: 450,
        height: 600,
        frame: false, // Remove default title bar
        resizable: false,
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('startpage.html');
};

// Handle minimize event
ipcMain.on('minimize-app', () => {
    mainWindow.minimize();
})

// Ensure app is ready before creating window
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

