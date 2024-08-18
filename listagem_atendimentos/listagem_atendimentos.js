const tableBody = document.getElementById("table-body");
document.addEventListener("DOMContentLoaded", function() {
  let atendimentos = buscarAtendimentos();
  if(atendimentos.length > 0){
    atendimentos.forEach(atendimento => {
      tableBody.innerHTML += `
      <tr>
        <tr>
            <th scope="row">${atendimento.nome}</th>
            <th scope="row">${atendimento.raca}</th>
            <th scope="row">
              <input type="datetime-local" value="${atendimento.horario}" disabled
              class="horario-atendimento form" name="atendimento" id="horario-atendimento">
            </th>
            <th scope="row">${atendimento.servico}</th>
            <th scope="row">${atendimento.funcionario}</th>
            <th scope="row">${atendimento.status}</th>
            <th scope="row">${atendimento.valor}</th>
            <th scope="row"><button type="button" class="btn btn-secondary" onclick="window.location.href='?pet=${atendimento.petId}'">Editar</button></th>
        </tr>
      </tr>
      `
    })
  }
});