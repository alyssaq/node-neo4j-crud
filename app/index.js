var express = require('express');
var bodyParser = require('body-parser');
var morgan  = require('morgan');
var compression = require('compression');
var neo4j = require('node-neo4j');

var config = require('./config');
var routes = require('./routes');
var app = express();

app.use(bodyParser.json());
app.use(morgan());
app.use(compression());

app.listen(config.port);
routes.setup(app);

var db = new neo4j(
  process.env['NEO4J_URL'] ||
  process.env['GRAPHENEDB_URL'] ||
  'http://localhost:7474'
);

// db.deleteNode(0, function(err, node) {
//   console.log(node);
// });

db.insertNode({
    name: 'Alyssa Quek',
    sex: 'female'
}, function(err, node) {
    if(err) throw err;

    // Output node properties.
    console.log(node.name);


    // Output node id.
    console.log(node._id)

});
console.log('Server up at port %d', config.port);