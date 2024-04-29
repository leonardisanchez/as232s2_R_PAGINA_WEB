/*Puedes incluir una sección estática que muestre citas inspiradoras relacionadas
con la educación, el aprendizaje o la excelencia académica*/
const citas = [
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
    "La mente no es un vaso por llenar, sino una lámpara por encender. - Plutarco",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. - Vidal Sassoon"
];
const citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
document.getElementById('cita').textContent = citaAleatoria;
