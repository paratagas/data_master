/**
 * main Electron logic
 * 
 * @author Yauheni Svirydzenka <partagas@mail.ru>
 * @version 0.0.1
 * @copyright Yauheni Svirydzenka 2017
 */

/*
 * Commands:
 * npm init - initialize npm in current directory
 * npm install - install modules
 * npm install --save-dev electron-prebuilt - install module for pred-build
 * npm install --save-dev electron-packager - install module for build
 * npm start - to start app
 * npm run-script package - to compile app
 */

const electron = require('electron');
// lifecycle of our app
const app = electron.app;
// create window for our app
const BrowserWindow = electron.BrowserWindow;

// To send crash reports to Electron support
// electron.crashReporter.start();

// set global link
// if not, the window will be closed after garbage collection
var mainWindow = null;

/**
 * Check that all windows are closed before quiting app
 */
app.on('window-all-closed', function() {
    // OS X apps are active before "Cmd + Q" command. Close app
    if (process.platform != 'darwin') {
        app.quit();
    }
});

/**
 * Create main window menu
 */
function createMenu() {
    var Menu = electron.Menu;
    var menuTemplate = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'New window',
                    click: function() {
                        createSubWindow();
                    }
                },
                {type: "separator"},
                {
                    label: 'Exit',
                    click: function() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Cut',
                    role: 'cut'
                },
                {
                    label: 'Copy',
                    role: 'copy'
                },
                {
                    label: 'Paste',
                    role: 'paste'
                }
            ]
        },
        {
            label: 'About',
            submenu: [
                {
                    label: 'Name',
                    click: function() {
                        console.log(app.getName());
                    }
                },
                {
                    label: 'Version',
                    click: function() {
                        console.log(app.getVersion());
                    }
                },
                {
                    label: 'About',
                    click: function() {
                        console.log('ToDo list');
                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Node.js docs',
                    click: function() {
                        require('electron').shell.openExternal("https://nodejs.org/api/");
                    }
                },
                {
                    label: 'Webix docs',
                    click: function() {
                        require('electron').shell.openExternal("http://docs.webix.com/");
                    }
                },
                {
                    label: 'Electron docs',
                    click: function() {
                        require('electron').shell.openExternal("http://electron.atom.io/docs/all");
                    }
                }
            ]
        }
    ];

    var menuItems = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menuItems);
}

/**
 * Create main window
 */
function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: "Data master",
        resizable: false,
        width: 910,
        height: 800,
        // set path to icon for compiled app
        icon: 'resources/app/img/icon.png',
        // set path to icon for launched app
        //icon: 'img/icon.png'
        center: true
        // to open dev console: The first way
        //devTools: true
    });

    createMenu();

    // load entry point for desktop app
    //mainWindow.loadURL('npm//' + __dirname + '/index.html');
    mainWindow.loadURL('http://localhost:3000/');
    
    // to open dev console: The second way
    //mainWindow.webContents.openDevTools();

    // Close all windows when main window is closed
    mainWindow.on('closed', function() {
        mainWindow = null;
        newWindow = null;
    });
}

/**
 * Create sub menu window
 */
function createSubWindow() {
    newWindow = new BrowserWindow({
        title: "Go to GitHub",
        resizable: false,
        // imitate mobile device
        width: 360,
        height: 640,
        icon: 'resources/app/img/mobile.png',
        center: true
    });
    
    newWindow.loadURL("https://github.com/");

    newWindow.on('closed', function() {
        newWindow = null;
    });
}

/**
 * When Electron finish initialization and is ready to create browser window
 */
app.on('ready', function() {
    createMainWindow();
});
