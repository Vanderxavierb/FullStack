const express = require('express');

const router = express.Router();

const vagas = [
    {
        id: 1,
        titulo: "Desenvolvedor Front-End",
        empresa: "ProTech",
        logo: 'https://cdn3.f-cdn.com/contestentries/374094/15482618/56f4dd9ef192c_thumb900.jpg', 
        salario: '3500',
        descricao: 'Desenvolvedor React',
        senioridade: "Junior"
    },
    {
        id: 2,
        titulo: "Desenvolvedor Back-End",
        empresa: "Top-Tech",
        logo: 'https://logopond.com/logos/b6a699d5720f639fd5278a76add8283d.png', 
        salario: '5000',
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
    vaga.id = vagas[vagas.length - 1].id + 1;
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

    const index = vagas.findIndex(vaga => vaga.id == idParam);
    

    let vagaExcluida = vagas[index];
    
    vagas.splice(index, 1);
    console.log(index);
    res.send({
        message: `Vaga ${vagaExcluida.titulo} excluída com sucesso`
    });
});

module.exports = router;