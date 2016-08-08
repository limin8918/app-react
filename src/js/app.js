require('babel-register' );
require('./server');
var express = require('express'),
    app = express();

app.use('/public', express.static('./public'));

app.listen(process.env.PORT);