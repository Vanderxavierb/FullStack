window.alert("Olá!");

// mapear lista html 
const lista = document.getElementById('lista');

//FETCH - método js para e comunicar via requisições HTTP [GET,POST,DELETE,UPDATE]
//primeiro parâmetro (url API)
//segundo parâmetro (opcional) = configurações de requisição 
const chamadaApi = ('http://localhost:3000/tarefas')

chamadaApi.then((response) => {
    return response.json();
}).then((tarefasData) => {
    tarefasData.map((tarefa) =>{
        
    }
            
