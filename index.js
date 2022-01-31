let express = require('express');
route = require('../Api_Jtaylor/Routes/routes.js');

var app = express();

app.use(function(req_, res, next){res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
next();});

app.use(express.static(__dirname + '/public'));

app.get('/', route.index);
app.get('/API', route.api);

app.listen(3000);