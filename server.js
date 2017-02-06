const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

const options = {
	root: __dirname + '/data/'
	//dotfiles: 'deny',
	/*headers: {
		'x-timestamp': Date.now(),
		'x-sent': true,
		//'Content-Type': 'text/json'
		"If-Modified-Since": "Wed, 21 Oct 2015 07:28:00 GMT"

	}*/
};

const fileName = "data.json";

app.get('/data', (req, res, next) => {
	res.set('If-Modified-Since', 'Wed, 21 Oct 2015 07:28:00 GMT');
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			//res.statusCode = 200;
			//res.setHeader("Status Code:", "*");
			//res.status(200).end();
			//res.sendStatus(200);

			console.log('Sent:', fileName);
		}
	});
});

/*app.get('/data', (req, res) => {
  	res.sendFile(__dirname + '/data/data.json');
});*/

app.post('/new_data', (req, res) => {
	fs.writeFile('data/new_data.json', JSON.stringify(req.body), (err) => {
		if (err) {
			return res.status(500).send(`Error: ${err.message}`)
		}
		res.status(200).send(req.body);
	});
});

app.listen(port, () => {
  	console.log('Server is running on http://localhost:' + port);
});
