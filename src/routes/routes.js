const Sedexcontroller = require('../app/controller/sedex-consulta');

module.exports = function(app) {
  app.get('/', Sedexcontroller.consulta);
};
