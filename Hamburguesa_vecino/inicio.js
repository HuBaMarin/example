let tiempoLocal= setInterval(function() {
    let mostrarFecha = document.getElementById("mostrarFecha");
    let fecha = new Date();
    const month = fecha.toLocaleString('default', { month: 'long' }); 
    mostrarFecha.innerHTML=fecha.getDate()+" de "+month+" de "+fecha.getFullYear()+"\n"+fecha.getHours() + ":"
    + fecha.getMinutes() + ":" + fecha.getSeconds();
  }, 1000);
