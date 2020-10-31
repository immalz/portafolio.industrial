const ver = document.getElementById('ver');
const cerrar = document.getElementById('cerrar');


const toggle = () => {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');

    let popup = document.getElementById('popup');
    popup.classList.toggle('active');
}


ver.addEventListener('click', toggle);
cerrar.addEventListener('click', toggle);