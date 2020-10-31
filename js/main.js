window.addEventListener('load', function() {
    window.addEventListener('scroll', function() {
        let header = document.querySelector('.navbar');
        header.classList.toggle('sticky', window.scrollY > 0);
    })



    ver.addEventListener('click', toggle);
    cerrar.addEventListener('click', toggle);

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
            ul.querySelector('.activado').classList.remove('activado');

            el.classList.add('activado');
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


    $(document).ready(function() {
        var galleryThumbs = new Swiper(".gallery-thumbs", {
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                480: {
                    direction: "vertical",
                    slidesPerView: 3,
                }
            }
        });
        var galleryTop = new Swiper(".gallery-top", {
            direction: "horizontal",
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
    });
})