# Data master

### Cross platform ToDo list created using Webix and complied to desktop using Electron

![Data master](http://i.imgur.com/QU1QNIS.png)

---

### Tech
Data master uses several open source projects to work properly:

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Webix] - Cross platform and cross browser UI library
* [Electron] - Cross platform tool to compile web-apps to desktop

---

### Requirements

* [Node.js](https://nodejs.org/) v4.4+

---

### Installation

* Download and extract the [latest version of Data Master](https://github.com/paratagas/data_master)
* Download and install the [latest version of Electron](http://electron.atom.io/releases/) for your platform
* Install the dependencies and devDependencies:
```sh
$ cd data_master
$ npm install
```

* Download the [latest standard version of Webix](http://webix.com/download/).
* Extract "codebase" folder from downloaded Webix archive to the root folder of your project
* **Run Node.js server:**
```sh
$ npm run server
```
* Run another shell

* Run desktop pre-building: 
```sh
$ npm start
```
* Run desktop compilation:
```sh
$ npm run package
```

**In "~/release/DataMaster" folder get version for your platform and launch it**

---

### Launching

***Nota bene:*** **Before launching WEB or desktop app version run Node.js local server:**
```sh
$ npm run server
```

After that your web application is available on:

```sh
http://localhost:3000
```

---

### Development


* To create your bundle.js (if source code is modified) run:
```sh
$ gulp bundle
```

* To watch your source code changing and restarting server in development run:
```sh
$ npm run nodemon
$ gulp watch
```

---

### Other

***Nota bene:*** You can istall Electron pre-builder and compiler modules manually by:
```sh
$ npm install --save-dev electron-prebuilt
$ npm install --save-dev electron-packager
```

---

### License

GNU GPLV3

 [Node.js]: <https://nodejs.org/>
 [Webix]: <http://webix.com/>
 [Electron]: <http://electron.atom.io/>
 