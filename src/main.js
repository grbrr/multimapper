const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        show: false // Hide the window initially
    });

    // Load the index.html file
    win.loadFile('src/index.html');

    // Maximize the window when it is ready to be shown
    win.once('ready-to-show', () => {
        win.maximize();
        win.show();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
