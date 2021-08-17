const socket = io.connect();

function addProduct() {
  let newProduct = {
    title: document.getElementById('title').value,
    price: document.getElementById('price').value,
    thumbnail: document.getElementById('thumbnail').value,
  };
  let btn = document.getElementById('btn');
  socket.emit('data-productos', newProduct);

}

function render(data) {
  var html = data
    .map(function (item) {
      return `
      <tr>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td style="text-align: center;">
              <img width="40px" src="${item.thumbnail}" alt="product_img">
          </td>
      </tr> 
        `;
    })
    .join(' ');

  document.getElementById('productos').innerHTML = html;
}

socket.on('response', function (data) {
  console.log('Recibí un nuevo producto');
  render(data);
});
