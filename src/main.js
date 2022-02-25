const { app, BrowserWindow, ipcMain, screen } = require('electron')
const path = require('path');

/**
 * Electron Main进程函数
 */
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    resizable: false,
    center: true,
    webPreferences: {
      preload: path.join(__dirname, '/preload.js'),
      enableRemoteModule: true,
      contextIsolation: false,
    }
  })

  mainWindow.loadFile('./build/index.html')

  //监听登陆事件，改变窗口大小
  ipcMain.on('login', e => {
    const wt = screen.getPrimaryDisplay().size.width
    mainWindow.setBounds({
      x: wt / 2 - 450,
      width: 900,
    }, false)
  })
}

/**
 * 启动Electron
 */
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

/**
 * 关闭Electron
 */
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})