fetch('product.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const productElement = document.createElement('div');
      const productImage = document.createElement('img');

      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      `;
      
      productImage.src = product.image;
      productElement.appendChild(productImage);
      
      productList.appendChild(productElement);
    });
  })
  .catch(error => console.error(error));
