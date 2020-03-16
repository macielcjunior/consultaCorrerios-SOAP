exports.consulta = async (req, res) => {
  const SOAPClient = require('../../services/correiosSOAPClient');

  const dadosConsult = req.body;

  SOAPClient.calculaPrazo(dadosConsult, function(error, resp) {
    if (error) {
      res.status(500).send(error);
      return;
    }
    console.log('Prazo calculado');
    res.json(resp);
  });
};
