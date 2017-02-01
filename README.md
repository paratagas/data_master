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

* Local server
* [Node.js](https://nodejs.org/) v4.4+
* [PHP](http://php.net/) v5.3+

---

### Installation

* Download and extract the [latest version of Data Master](https://github.com/paratagas/data_master)
* Put extracted content to your working server
* Download and install the [latest version of Electron](http://electron.atom.io/releases/) for your platform
* Install the dependencies and devDependencies:
```sh
$ cd data_master
$ npm install
```

* Download the [latest standard version of Webix](http://webix.com/download/).
* Extract "codebase" folder from downloaded Webix archive to the root folder of your project
* Run desktop pre-building: 
```sh
$ npm start
```
* Run desktop compilation:
```sh
$ npm run-script package
```

***Nota bene:*** You can istall Electron pre-builder and compiler modules manually by:
```sh
$ npm install --save-dev electron-prebuilt
$ npm install --save-dev electron-packager
```


**In "~/release/DataMaster" folder get version for your platform and launch it**

---

### License

GNU GPLV3

 [Node.js]: <https://nodejs.org/>
 [Webix]: <http://webix.com/>
 [Electron]: <http://electron.atom.io/>
 