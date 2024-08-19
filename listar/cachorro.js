const tableBody = document.getElementById("table-body");
document.addEventListener("DOMContentLoaded", function () {
  let pets = buscarPets();
  if (pets.length > 0) {
    pets.forEach((pet) => {
      tableBody.innerHTML += `
        <tr>
          <tr>
            <th scope="row">${pet.nome}</th>
            <th scope="row">${pet.raca}</th>
            <th scope="row">${pet.apelido}</th>
            <th scope="row">${pet.idade}</th>
            <th scope="row">${pet.perfume}</th>
            <th scope="row">${pet.porte}</th>
            <th scope="row">${pet.pelagem}</th>
            <th scope="row">${pet.tutor}</th>
            <th scope="row">${pet.telefoneTutor}</th>
            <th scope="row">${pet.observacao}</th>
            <th scope="row"><button type="button" class="btn btn-secondary" onclick="window.location.href='../editar/cachorro.html?pet=${pet.id}'">Editar</button></th>
          </tr>
        </tr>
      `;
    });
  }
});
