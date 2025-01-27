let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo'); 
    const nomeAmigo = input.value.trim(); 

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.'); 
        return; 
    }

    amigos.push(nomeAmigo);

    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);

    input.value = '';
}

function exibirAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); 

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li); 
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione nomes primeiro.');
        return; 
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
