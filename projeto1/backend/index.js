// SERVER API
//Importação de Express 
const express = require('express');
const cors = require('cors');
// Inicializar o express 
const app = express();


//informar ao express que o app irá trabalhar com arquivo json
app.use(express.json());
app.use(cors());

const tarefas = [
    {
        id: 163545,
        texto: 'ir ao mercado',
        prazo: '3 dias'
    },
    {
        id: 28764,
        texto: 'estudar JS',
        prazo: '1 dias'
    },
    {
        id: 365473,
        texto: 'TCC',
        prazo: '15 dias'
    }
]

//API - REST endpoints (GET, PUT, UPDATE , DELETE)
//criar uma rota (server) que retorna uma mensagem para o (client) - 

app.get('/mensagem', (req, res) =>{
    //request(req) -> (requisição para o server)
    //response(res) -> (resposta para o client)
    res.send('Olá Bluemers!');
});

//[GET] - tarefas - rota para retorno de constante padrão json
app.get('/tarefas', (req, res) =>{
    res.send(tarefas);
})

//[GET] - única tarefa pelo id
//acessar o id via parametro da requisição
app.get('/tarefas/:id', (req,res) =>{
    //acessar id via parametro da requisição 
    // const id = req.params.id;
    // const indice = id - 1; 
    // const tarefa = tarefas[indice];
    // console.log(id);
    // res.send(tarefa);

    //método usando find
    const idParam = req.params.id;
    const tarefa = tarefas.find((tarefa) => tarefa.id == idParam);
    res.send(tarefa);
})










//definição de constante para porta onde será executado o backend
const port = 3000;

//inicializar o servidor.
app.listen(port, () => {
    console.log(`app executando na porta ${port}`);
});
