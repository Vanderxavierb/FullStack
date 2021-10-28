const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const vagasRouter = require('./routes/vagas.routes')
app.use('/vagas', vagasRouter);

const port = 3003;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});