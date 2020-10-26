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

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li a');

li.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    })
})

$(document).ready(function() {

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});