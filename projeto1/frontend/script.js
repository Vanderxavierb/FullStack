
// mapear lista html 
const lista = document.getElementById("lista");

//FETCH - método js para e comunicar via requisições HTTP [GET,POST,DELETE,UPDATE]
//primeiro parâmetro (url API)
//segundo parâmetro (opcional) = configurações de requisição 
const chamadaApi = fetch('http://localhost:3000/tarefas');
console.log(chamadaApi);

chamadaApi.then(function (response) {
        return response.json();
    }).then((tarefasData) => {
    tarefasData.map((tarefa) =>{
        lista.insertAdjacentHTML('beforeend',`
        <li class= "list-item">
            <p><b>Título:</b>${tarefa.texto}</p>
            <p><b>Prazo:</b>${tarefa.prazo}</p>
        </li>`
        )

    })
})    
