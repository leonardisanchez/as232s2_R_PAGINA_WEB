
/*******Puedes mostrar un contador de visitantes estático en la página principal 
 para dar una idea general de cuántas personas 
han visitado el sitio. Esto no requeriría interacción del usuario 
y podría ser simplemente un número estático que se actualiza manualmente********/

const visitantes = 1000; // Número estático de visitantes
document.getElementById('visitantes').textContent = visitantes.toLocaleString();
