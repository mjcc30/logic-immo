const URL_SERVER = "http://localhost:3000";

const BODY = {
  titre: document.getElementById('titre').value,
  description: document.getElementById('description').value,
  adresse: document.getElementById('adresse').value,
  code_postal: parseInt(document.getElementById('code_postal').value),
  ville: document.getElementById('ville').value,
  prix: parseInt(document.getElementById('prix').value),
};

function addAnnonce() {
  console.log(id);
  event.preventDefault();

  fetch(URL_SERVER, {
    method: 'post',
    body: JSON.stringify(BODY),
    headers: {
      'Content-type': 'application/json',
    }
  })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
}

function changeAnnonce() {
  console.log(id);
  event.preventDefault();

  fetch(`${URL_SERVER}/${id}`, {
    method: 'put',
    body: JSON.stringify(BODY),
    headers: {
      'Content-type': 'application/json',
    }
  })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
}

function deleteAnnonce(id) {
  console.log(id);
  event.preventDefault();

  fetch(`${URL_SERVER}/${id}`, {
    method: 'delete',
  })
    .then((data) => data.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
}
