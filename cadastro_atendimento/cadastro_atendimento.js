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

let pets = buscarPets();
pets.forEach(p => {
  let opcao = document.createElement("option");
  opcao.value = p.id;
  opcao.innerText = `${p.nomeCachorro} | ${p.raca}`;
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

function limparCampos(){
  notify.innerHTML = "";
  petLista.value = "";
  horario.value = "";
  antendente.value = "";
}

function getDadosAtendimento(){
  notify.innerHTML = "";
  if(verificarCampos()){
      let valorData = 0;
      if(document.getElementById("banho").checked){
        valorData += valorBanho;
        servicos.push(banho.value);
      }
      if(document.getElementById("tosa").checked){
        valorData += valorTosa;
        servicos.push(tosa.value)
      }
      if(document.getElementById("tosa-hig").checked){
        valorData += valorTosaHig;
        servicos.push(tosaHig.value)
      }
      if(document.getElementById("corte").checked){
        valorData += valorCorte;
        servicos.push(corte.value)
      }

      const atendimento = criarAtendimento(petLista.value, servicos, horario.value, antendente.value, "Em espera", valorData);
      salvarAtendimento(atendimento);
      const success = document.createElement("p");
      limparCampos();
      success.innerText = "Atendimento Cadastrado Com Sucesso";
      success.style.color = "green";
      notify.appendChild(success);
      valorData = 0;
  } else {
      const error = document.createElement("p")
      error.innerText = "Preencha Todos Os Campos";
      error.style.color = "red";
      notify.append(error);
  }
}

