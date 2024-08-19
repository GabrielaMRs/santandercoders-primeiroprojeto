const nomeCachorro = document.getElementById("nomeCachorro");
const apelidoCachorro = document.getElementById("apelidoCachorro");
const nomeTutor = document.getElementById("nomeTutor");
const telefoneTutor = document.getElementById("telefoneTutor");
const raca = document.getElementById("raca");
const porte = document.getElementById("porte");
const pelagem = document.getElementById("pelagem");
const dataNascimento = document.getElementById("dataNascimento");
const perfume = document.getElementById("perfume");
const observacao = document.getElementById("floatingTextarea");
const notify = document.getElementById("notify");

function verificarCampos() {
  if (
    nomeCachorro.value != "" &&
    raca.value != "" &&
    dataNascimento.value != "" &&
    apelidoCachorro.value != "" &&
    porte.value != "" &&
    pelagem.value != "" &&
    nomeTutor.value != "" &&
    telefoneTutor.value != ""
  ) {
    return true;
  }
  return false;
}

function limparCampos() {
  nomeTutor.value = "";
  raca.value = "";
  dataNascimento.value = "";
  apelidoCachorro.value = "";
  porte.value = "";
  pelagem.value = "";
  nomeCachorro.value = "";
  telefoneTutor.value = "";
  observacao.value = "";
}

function cadastrarCachorro() {
  notify.innerHTML = "";
  if (verificarCampos()) {
    const cachorro = criarPet(
      nomeTutor.value,
      telefoneTutor.value,
      nomeCachorro.value,
      raca.value,
      dataNascimento.value,
      perfume.value,
      apelidoCachorro.value,
      porte.value,
      pelagem.value,
      observacao.value
    );
    salvarPet(cachorro);
    limparCampos();
    const success = document.createElement("p");
    success.innerText = "Cachorro Cadastrado Com Sucesso";
    success.style.color = "green";
    notify.appendChild(success);
  } else {
    const error = document.createElement("p");
    error.innerText = "Preencha Todos Os Campos";
    error.style.color = "red";
    notify.append(error);
  }
}
