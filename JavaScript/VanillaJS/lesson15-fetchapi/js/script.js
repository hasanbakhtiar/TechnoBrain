const productCards = document.querySelector(".row");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let card = "";
    data.map((fd) => {
        card += `
        <div class="card" style="width: 18rem;">
  <img height="300" src="${fd.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${fd.title}</h5>
    <p class="card-text">${fd.description.substring(1, 40)}...</p>
    <p class="card-text">${fd.price}$</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `;
    });
    productCards.innerHTML = card;
  });
