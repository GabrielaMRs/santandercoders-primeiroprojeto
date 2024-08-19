let valor = 0;
const valorBanho = 50;
const valorTosa = 50;
const valorTosaHig = 50;
const valorCorte = 50;
let servicos = [];

const petLista = document.getElementById("petlista");
const horario = document.getElementById("horario-atendimento");
const banho = document.getElementById("banho");
const tosa = document.getElementById("tosa");
const tosaHig = document.getElementById("tosa-hig");
const corte = document.getElementById("corte");
const antendente = document.getElementById("antendente");
const notify = document.getElementById("notify")
let atendimento;

let pets = buscarPets();
pets.forEach(p => {
  let opcao = document.createElement("option");
  opcao.value = p.id;
  opcao.innerText = `${p.nome} | ${p.raca}`;
  petLista.appendChild(opcao);
});

const span = document.getElementById("valor");
span.innerText = ` R$ ${valor}`;
banho.addEventListener("change", function(event){
  if(event.target.checked){
    valor += valorBanho;
    span.innerText = ` R$ ${valor}`;
  }
  else {
    if(valor > 0){
      valor -= valorBanho;
      span.innerText = ` R$ ${valor}`;
    }
  }
})

tosa.addEventListener("change", function(event){
  if(event.target.checked){
    valor += valorTosa;
    span.innerText = ` R$ ${valor}`;
  }
  else {
    if(valor > 0){
      valor -= valorTosa;
      span.innerText = ` R$ ${valor}`;
    }
  }
})

tosaHig.addEventListener("change", function(event){
  if(event.target.checked){
    valor += valorTosaHig;
    span.innerText = ` R$ ${valor}`;
  }
  else {
    if(valor > 0){
      valor -= valorTosaHig;
      span.innerText = ` R$ ${valor}`;
    }
  }
})

corte.addEventListener("change", function(event){
  if(event.target.checked){
    valor += valorCorte;
    span.innerText = ` R$ ${valor}`;
  }
  else {
    if(valor > 0){
      valor -= valorCorte;
      span.innerText = ` R$ ${valor}`;
    }
  }
})

function verificarCampos(){
  if(horario.value != "" && antendente.value != "" && petLista.value != "" && valor > 0){
    return true
  }
  return false;
}

function recuperarAtendimento(){
    let idAtendimentoURL = obterValorParametroURL("atendimento")
    try{
        if(idAtendimentoURL){
            atendimento = buscarAtendimento(idAtendimentoURL);
            if(atendimento != null){
                petLista.value = atendimento.pet;
                petLista.disabled = true;
                horario.value = atendimento.horario;
                antendente.value = atendimento.funcionario;
                banho.checked = atendimento.servico.some(servico => servico === banho.value);
                tosa.checked = atendimento.servico.some(servico => servico === tosa.value);
                tosaHig.checked = atendimento.servico.some(servico => servico === tosaHig.value);
                corte.checked = atendimento.servico.some(servico => servico === corte.value);
                span.innerText = `R$ ${atendimento.valor}`;
                valor = atendimento.valor;
                const success = document.createElement("p");
                success.innerText = "Informações restauradas para edição";
                success.style.color = "green";
                notify.appendChild(success);
            } else {
                throw new Error("Cadastrao Inexistene")
            }
        } else{
            throw new Error("Id Inválido")
        }
    }catch(erro) {
        const error = document.createElement("p")
        error.innerText = erro.message;
        error.style.color = "red";
        notify.append(error);
    }
}

function editarAtendimento(){
    notify.innerHTML = "";
    try {
        if(atendimento != null){
            if(verificarCampos()){
                let valorData = 0;
                if(banho.checked){
                    valorData += valorBanho;
                    servicos.push(banho.value);
                }
                if(tosa.checked){
                    valorData += valorTosa;
                    servicos.push(tosa.value)
                }
                if(tosaHig.checked){
                    valorData += valorTosaHig;
                    servicos.push(tosaHig.value)
                }
                if(corte.checked){
                    valorData += valorCorte;
                    servicos.push(corte.value)
                }

                atendimento.horario = horario.value;
                atendimento.funcionario = antendente.value;
                atendimento.servico = servicos;
                atendimento.valor = valorData;
                atualizarAtendimento(atendimento);
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