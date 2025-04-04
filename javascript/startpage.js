/*const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    //and load the startpage.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'startpage.html'));

    //open the DevTools
    mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quite();
    }
}); */

const { ipcRenderer } = require('electron');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Minimize button
    const shrinkIcon = document.querySelector('.shrink-icon');
    if (shrinkIcon) {
        shrinkIcon.addEventListener('click', () => {
            ipcRenderer.send('minimize-app');
        });
    }

    // Close button
    const closeIcon = document.querySelector('.close-icon');
    if (closeIcon) {
        closeIcon.addEventListener('click', () => {
            window.close();
        });
    }

    // Play background music automatically when the page loads
    const bgMusic = new Audio("sounds/bg-music.mp3"); // Use correct path
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    bgMusic.play().catch(err => console.error("BG Music failed:", err));

    // Start button
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Play click sound when the start button is clicked
            const clickSound = new Audio("sounds/click.mp3");
            clickSound.volume = 1.0;
            clickSound.play().catch(err => console.error("Click sound failed:", err));

            // Redirect after short delay
            setTimeout(() => {
                window.location.href = 'menupage.html';
            }, 400);
        });
    }
});