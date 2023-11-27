// public/client.js
const btnsBotones = document.querySelectorAll('.card .btn');
const carrito = document.getElementById('carrito');
const idTemplate = document.getElementById('idTemplate');
const fragment = document.createDocumentFragment();
const carritoObjeto = {};

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1
  };

  if (carritoObjeto.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }

  carritoObjeto[producto.titulo] = producto;
  pintarCarrito(producto);
};

const pintarCarrito = (producto) => {
  carrito.textContent = "";
  Object.values(carritoObjeto).forEach(item => {
    const clone = idTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('.lead').textContent = item.titulo;
    clone.querySelector('.badge').textContent = item.cantidad;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btnsBotones.forEach(btn => {
  btn.addEventListener("click", agregarAlCarrito);
});
