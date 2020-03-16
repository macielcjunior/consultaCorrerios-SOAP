const soap = require('soap');

const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';

exports.calculaPrazo = function(args, callback) {
  soap.createClient(url, function(erro, cliente) {
    cliente.CalcPrazo(args, callback);
  });
};
