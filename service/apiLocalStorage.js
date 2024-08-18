var chavePet = "pets"

var chaveAtendimento = "atendimentos"


// Função para criar objeto de cachorro
function criarPet(tutor, telefone, nomeCachorro, raca, idade, perfume, apelido, porte, pelagem, observacao){
    const pet = {
        tutor: tutor,
        telefoneTutor: telefone,
        perfume: perfume,
        nome: nomeCachorro,
        raca: raca,
        idade: idade,
        apelido: apelido,
        porte: porte,
        pelagem: pelagem,
        observacao: observacao,
    };
    return pet;
}

// Função para criar objeto de atendimento
function criarAtendimento(petId, servico, horario, funcionario, status, valor){
  const pet = buscarPet(petId);

  const atendimento = {
      pet: petId,
      nome: pet.nome,
      raca: pet.raca,
      servico: servico,
      horario: horario,
      funcionario: funcionario,
      status: status,
      valor: valor,
  }
  return atendimento;
}

// Função para gerar um ID único
function gerarIdUnico() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Função para salvar pet no localStorage
function salvarPet(pet) {
    pet.id = gerarIdUnico()
    const pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    pets.push(pet);
    localStorage.setItem(chavePet, JSON.stringify(pets));
}

// Função para atualizar pet no localStorage
function atualizarPet(petAtualizado) {
    let pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    pets = pets.map(pet => pet.id === petAtualizado.id ? petAtualizado : pet);
    localStorage.setItem(chavePet, JSON.stringify(pets));
}

// Função para carregar e exibir a lista de pets
function buscarPets() {
    const pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    return pets
}

// Função para buscar pet
function buscarPet(id) {
    const pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    const pet = pets.find(p => p.id === id);
    return pet
}


// Função para salvar atendimento no localStorage
function salvarAtendimento(atendimento) {
    atendimento.id = gerarIdUnico()
    const atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    atendimentos.push(atendimento);
    localStorage.setItem(chaveAtendimento, JSON.stringify(atendimentos));
}

// Função para carregar e exibir a lista de atendimentos
function buscarAtendimentos() {
    const atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    return atendimentos
}


// Função para atualizar atendimento no localStorage
function atualizarAtendimento(atendimentoAtualizado) {
    let atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    atendimentos = atendimentos.map(atendimento => atendimento.id === atendimentoAtualizado.id ? atendimentoAtualizado : atendimento);
    localStorage.setItem(chaveAtendimento, JSON.stringify(atendimentos));
}


// Função para buscar atendimento
function buscarAtendimento(id) {
    const atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    const atendimento = atendimentos.find(p => p.id === id);
    return atendimento
}

//Editar Cachorro para a pagina
//mudar o caminho de acordo com a pagina de cadastro de cachorro
function editarCachorro(cachorro) {
    // Monta a URL com o parâmetro idCachorro
    const url = `../cachorro/cadastro.html?idCachorro=${cachorro.id}`;
    // Redireciona para a URL construída
    window.location.href = url;
}

   // Função para obter os parâmetros da query string
function obterValorParametroURL(nomeDoParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeDoParametro);
}
/*
 exemplo de uso
 const idCachorro = obterValorParametroURL('idCachorro');
*/
// Obtém o valor do parâmetro "nome"
