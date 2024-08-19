const nomeCachorro = document.getElementById("nomeCachorro");
const apelidoCachorro = document.getElementById("apelidoCachorro");
const nomeTutor = document.getElementById("nomeTutor");
const telefoneTutor = document.getElementById("telefoneTutor");
const raca = document.getElementById("raca");
const porte = document.getElementById("porte");
const pelagem = document.getElementById("pelagem");
const dataNascimento = document.getElementById("dataNascimento");
const perfume = document.getElementById("perfume")
const observacao = document.getElementById("floatingTextarea");
const notify = document.getElementById("notify");
let pet;

function recuperarCachorro(){
    try{
        let petIdUrl = obterValorParametroURL("pet");
        if(petIdUrl){
            pet = buscarPet(petIdUrl);
            if(pet != null){
                nomeCachorro.value = pet.nome;
                apelidoCachorro.value = pet.apelido;
                nomeTutor.value = pet.tutor;
                telefoneTutor.value = pet.telefoneTutor;
                raca.value = pet.raca;
                porte.value = pet.porte;
                pelagem.value = pet.pelagem;
                dataNascimento.value = pet.idade;
                perfume.value = pet.perfume;
                observacao.value = pet.observacao
                const success = document.createElement("p");
                success.innerText = "Informações restauradas para edição";
                success.style.color = "green";
                notify.appendChild(success);
            } else {
                throw new Error("Cadastrao Inexistene")
            }
        } else {
            throw new Error("Id Inválido")
        }
    } catch(erro){
        const error = document.createElement("p")
        error.innerText = erro.message;
        error.style.color = "red";
        notify.append(error);
    }
 
}

function verificarCampos(){
    if(nomeCachorro.value != "" && raca.value != ""&& dataNascimento.value != ""&& apelidoCachorro.value != ""
       && porte.value != ""&& pelagem.value != ""&& nomeTutor.value != "" && telefoneTutor.value != "" && perfume.value != "")
       {
          return true;
       }
    return false;
 }

function editarCachorro(){
    notify.innerHTML = "";
    try{
        if(pet != null){
            if(verificarCampos()){
                pet.nome = nomeCachorro.value;
                pet.apelido = apelidoCachorro.value;
                pet.tutor = nomeTutor.value;
                pet.telefoneTutor = telefoneTutor.value;
                pet.raca = raca.value;
                pet.porte = porte.value;
                pet.pelagem = pelagem.value;
                pet.idade = dataNascimento.value;
                pet.perfume = perfume.value;
                pet.observacao = observacao.value;

                atualizarPet(pet);
                const success = document.createElement("p");
                success.innerText = "Informações Salvas";
                success.style.color = "green";
                notify.appendChild(success);
            } else {
                throw new Error("Preencha Todos os Campos");
            }
        } else {
            throw new Error("Cadastro Inexistente");
        }
        
    }catch(erro){
        const error = document.createElement("p")
        error.innerText = erro.message;
        error.style.color = "red";
        notify.append(error);
    }
}

