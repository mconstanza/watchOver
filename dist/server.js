var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
console.log('dirname', __dirname)
app.use(serveStatic(__dirname +'/watchOver'));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
