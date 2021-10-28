const express = require('express');

const router = express.Router();

const vagas = [
    {
        id: Date.now(),
        titulo: "Desenvolvedor Front-End",
        empresa: "Blue",
        logo: 'url logo', 
        salário: '3500',
        descricao: 'Desenvolvedor React',
        senioridade: "Junior"
    },
    {
        id: Date.now(),
        titulo: "Desenvolvedor Back-End",
        empresa: "Blue",
        logo: 'url logo', 
        salário: '5000',
        descricao: 'Desenvolvedor .Net',
        senioridade: "Pleno"
    }
]

router.get('/', (req, res) =>{
    res.send(vagas);
});

router.get('/:id', (req, res) =>{
    const idParam = req.params.id;
    const vaga = vagas.find((vaga) =>{
        return vaga.id == idParam;
    });
    res.send(vaga);
});

router.post('/add',(req,res) =>{
    const vaga = req.body;
    vaga.id = Date.now();
    vagas.push(vaga);
    res.status(201).send({
        message: 'Cadastrado com sucesso', 
        data: vaga
    })

});

router.put('/edit/:id', (req,res) =>{
    const vagaEdit = req.body;
    const idParam = req.params.id;
    let index = vagas.findIndex((vaga) => {
        return vaga.id == idParam; 
    });
    vagas[index] = {
        ...vagas[index],
        ...vagaEdit
    };

    res.send({
        message: `vaga ${vagas[index].titulo} atualizada com sucesso`,
        data: vagas[index]
    })
});

router.delete('/delete/:id', (req,res) =>{
    const idParam = req.params.id;

    const index = vagas.findIndex((vaga) =>{
        return vaga.id = idParam;
    });

    let vagaExcluida = vagas[index];
    
    vagas.splice(index, 1);
    res.send({
        message: `Vaga ${vagaExcluida.titulo} excluída com sucesso`
    });
});

module.exports = router;