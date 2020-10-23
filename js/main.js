window.addEventListener('scroll', function() {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 0);
})


const fechaPortafolio = () => {
    const fecha = document.getElementById('fecha');

    let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

    let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

    let f = new Date();
    fecha.innerText = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
}
fechaPortafolio();
