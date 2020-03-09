const app = require('./config/custom-express')();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
