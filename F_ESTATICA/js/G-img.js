/*Puedes crear una galería de imágenes estática para mostrar fotos del campus, eventos escolares, 
actividades extracurriculares, etc.*/


const galeria = document.querySelector('.galeria');
const imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];

imagenes.forEach(imagen => {
  const imgElemento = document.createElement('img');
  imgElemento.src = imagen;
  imgElemento.alt = 'Imagen';
  galeria.appendChild(imgElemento);
});
