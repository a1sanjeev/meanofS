/**
 * Created by SanJeev on 22-06-2017.
 */

var app = require('imapp');
global.app=app;


require('./lib/api_users');

app.get('/', function(req, res){
    res.send('Hello World!');
});

var port = 8181;
app.listen(port);
console.log('Listening on port...'+port);
