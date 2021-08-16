const socket = io.connect();

export const addProduct = (e)=> {
  let newProduct = {
    title: document.getElementById('title').value,
    price: document.getElementById('price').value,
    thumbnail: document.getElementById('thumbnail').value,
  };
  let btn = document.getElementById('btn');

  btn.addEventListener('click', ()=>{
    console.log(newProduct)
    socket.emit('data-productos', newProduct);
    return false;
  })

}

/* socket.on('messages', function (data) {
  console.log('RECIBI MENSAJE');
  alert(JSON.stringify(data));
  render(data);
}); */