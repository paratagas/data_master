const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors');
var path = require("path");
const app = express();
const port = 3000;

// use to parse json data
app.use(bodyParser.json());

// use to create cross-domain requests (CORS)
app.use(cors());

// create path aliases to use them in index.html file
// otherwise the assets in it will not work and icons will not be shown
// scheme:
// app.use('/my_path_alias', express.static(path.join(__dirname, '/path_to_where/my_assets_are')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/skins', express.static(path.join(__dirname, '/codebase/skins')));
app.use('/bundle', express.static(path.join(__dirname, '/')));
app.use('/codebase', express.static(path.join(__dirname, '/codebase')));
app.use('/i18n', express.static(path.join(__dirname, '/codebase/i18n')));
app.use('/fonts', express.static(path.join(__dirname, '/codebase/fonts')));

const filePath = __dirname + '/data/';
const fileName = "data.json";

/**
 * Get index page
 *
 * @param {string} URL
 * @param {function} Callback
 */
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});


/**
 * Send GET request to get data
 *
 * @param {string} URL
 * @param {function} Callback
 */
app.get('/data', (req, res) => {
	const options = {
		root: filePath
	};
  
	res.sendFile(fileName, options, function (err) {
		if (err) {
			console.log('Error:', err);
		} else {
			console.log('Received:', fileName);
		}
	});
});

/**
 * Send POST request to save data
 *
 * @param {string} URL
 * @param {function} Callback
 */
app.post('/data', (req, res) => {
	// use JSON.stringify() 2nd and 3rd param to create pretty JSON data
	// remove them for minified JSON
	fs.writeFile(filePath + fileName, JSON.stringify(req.body, null, 4), 'utf-8', (err) => {
		if (err) {
			console.log('Error:', err);
		}
		res.status(200).send(req.body);
	});
});

/**
 * Listen to server with specified port
 *
 * @param {string} Port
 * @param {function} Callback
 */
app.listen(port, () => {
	// open browser on http://localhost:3000
	console.log('Server is running on http://localhost:' + port);
});
