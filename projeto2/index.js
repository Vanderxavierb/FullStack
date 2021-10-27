const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


const discos = [
    {
        id:1,
        titulo: "Please Please Me",
        ano: 1963
    },
    {
        id:2,
        titulo: "A Hard Day's Night",
        ano: 1964
    },
    {
        id:3,
        titulo: "Help!",
        ano: 1965
    },
    {
        id:4,
        titulo: "Rubber Soul",
        ano: 1965
    },
    {
        id:5,
        titulo: "Revolver",
        ano: 1966
    },
    {
        id:6,
        titulo: "Sgt. Pepper's Lonely Hearts Club Band",
        ano: 1967
    },
    {
        id:7,
        titulo: "Magical Mystery Tour",
        ano: 1967
    },
    {
        id:8,
        titulo: "White Album",
        ano: 1968
    },
    {
        id:9,
        titulo: "Yellow Submarine",
        ano: 1969
    },
    {
        id:10,
        titulo: "Abbey Road",
        ano: 1969
    },
    {
        id:11,
        titulo: "Let It Be",
        ano: 1970
    }
]

app.get('/discos', (req,res) => {
   res.send(discos); 
});

app.post('/novodisco', (req,res) => {
    const disco = req.body
    const id = discos.length
    disco.id = id
    discos.push(disco)
    res.send(discos)
})


app.put('/discos/:id', (req,res) => {
    const id = req.params.id - 1
    const {titulo, ano} = req.body;
    discos[id].titulo = titulo;
    discos[id].ano = ano;
    res.send(discos); 
})


app.delete('/discos/:id', (req,res) =>{
    const id = req.params.id -1
    delete discos[id]
    res.send(discos)
})




const port = 3001;

app.listen(port, () => {
    console.log(`App rodando no endereço: http://localhost:${port}`)
});