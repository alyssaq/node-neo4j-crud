function index(req, res) {
  res.send('Alyssa says Hi!');
}

function setup(app) {
  app.get('/', index);
}

exports.setup = setup;