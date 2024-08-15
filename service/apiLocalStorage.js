var chavePet = "pets"

var chaveAtendimento = "atendimentos"


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

