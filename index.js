const endereco = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

async function getDados(url){
  const response = await fetch(url);
  return await response.json();
}

function createCard(element) {
  document.getElementById('quartos').innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${element.photo}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${element.property_type}</h5>
            <p class="card-text"> ${element.name} <br><b>R$: ${element.price}</b></p>
        </div>
      </div>
    </div>
    `
  }

  function popular(dados) {
    dados.forEach(element => {
      createCard(element);
    })
  }


window.onload = async () => {

  const dados = await getDados(endereco);

  popular(dados);
  
}
