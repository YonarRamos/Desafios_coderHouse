const socket = io.connect();

function validarEmail(email) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
   return true;
  } else {
   return false
  }
}

function starting(){
  let greeting = {
    "user": "Chat-Bot",
    "msg": "Bienvenido al chat",
  };
  socket.emit('chat', greeting);  
}

function addProduct() {
  let newProduct = {
    title: document.getElementById('title').value,
    price: document.getElementById('price').value,
    thumbnail: document.getElementById('thumbnail').value,
  };
  socket.emit('data-productos', newProduct);
}

function sendMsg() {
if(validarEmail(document.getElementById('user').value)){
  let newMsg = {
    "user": document.getElementById('user').value,
    "msg": document.getElementById('msg').value,
  };
  socket.emit('chat', newMsg);  
}else{
  alert(
    ` Por favor agregar un usuario válido
      Ej: user@correo.com
    `
  )
}


}

function render(data) {
  let html = data
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

function renderChat(data) {
  let html = data
    .map(function (item) {
      return `
          <li>
            <span style="color: blue;">${item.user}</span>
            <span style="color: red;">[${item.timeStamp}]</span>
            <span style="color: green;">${item.msg}</span>
          </li>
        `;
    })
    .join(' ');

  document.getElementById('chat').innerHTML = html;
}

socket.on('response', function (data) {
  console.log('Recibí un nuevo producto');
  render(data);
});

socket.on('response-msg', function (data) {
  console.log('Recibí un nuevo mensaje', data);
  renderChat(data)
  document.getElementById('msg').value = ""
});

starting();