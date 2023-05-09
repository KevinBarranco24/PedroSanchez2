
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark2').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark2').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel

    $(".header-carousel").owlCarousel({

        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        items: 1,
        dots: true,
        navText : [
            '<i class="bi bi-chevron-left" ></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
    });



    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    var logotipograndeA = document.getElementById("logotipograndeA");
    logotipograndeA.style.background = "rgba(0,0,0,0.0)"
    let ancho = 350;
    let logotipogrande = document.getElementById('logotipogrande');
    let down = document.getElementById('down');

    if (window.scrollY == 0) {
        logotipogrande.style.width = (ancho - window.scrollY) + "px";
        down.style.display = 'block';
    } else if  (window.scrollY < 250){
        logotipogrande.style.width = (ancho - window.scrollY) + "px";
        down.style.display = 'block';
    } else {
        logotipogrande.style.width = "100px";
        down.style.display = 'none';
    }

    var fondo01 = document.getElementById("imagenfondo01");
    //var posicionY = 1000;
    var sizefondo = 100;
    fondo01.style.backgroundSize = sizefondo + "%";

    var botondescargar = document.getElementById("botondescargar");
    botondescargar.style.display = 'none'
    var botonflotante = document.getElementById('botonflotante');
    var botonSize = 75;

    window.addEventListener("scroll", () => {
        //fondo01.style.backgroundPositionY = (posicionY - window.scrollY) + "px";
        fondo01.style.backgroundSize = (sizefondo + (window.scrollY / 10)) + "%";
        if (window.scrollY <= 0) {
            logotipogrande.style.width = "350px";
            down.style.display = 'block';
            logotipograndeA.style.background = "rgba(0,0,0,0.0)"
        } else {
            if (window.scrollY < 250) {
                logotipogrande.style.width = (ancho - window.scrollY) + "px";
                down.style.display = 'block';
            } else if (window.scrollY > 250) {
                down.style.display = 'none';
            }
        }

        const relativePosition1 = new ScrollUtility.Scroll().getRelativeElementPosition("#Fondo03");
        const relativePosition2 = new ScrollUtility.Scroll().getRelativeElementPosition("#final");
        if (relativePosition1 < 1 && relativePosition2 > 0) {
            //console.log("Existe")
            botondescargar.style.display = 'block'
            if (botonSize > 50) {
                botonSize = botonSize - 0.2;
                botonflotante.style.width = (botonSize) + '%';
            }

        } else {
            //console.log("No existe")
            botondescargar.style.display = 'none'
        }
    })
    // Tamaño logo

    setTimeout(function () {
        var video = document.getElementById('video');
        //video.removeAttribute('muted');
    }, 2000);

    setTimeout(() => {
        maximizar()
    }, 90000);//90000

    var map = new GMaps({
        el: '#map',
        lat: 20.672828690525364,
        lng: -103.39748986065388,
        draggable: false,
        scrollwheel:false,
        zoom: 15
    });

    var sound = new buzz.sound("/sound/music.mp3", {
        formats: [ "ogg", "mp3", "aac" ]
    });

    sound.play()
        .fadeIn()
        .loop()
        .bind("timeupdate", function() {
            var timer = buzz.toTimer(this.getTime());
            document.getElementById("timer").innerHTML = timer;
        });
})(jQuery);

function gotoInicio() {
    $("html, body").animate({scrollTop: 0}, 1000, 'easeInOutExpo');
}

function goToProyecto() {
    $("html, body").animate({scrollTop: $("#divProyecto").offset().top}, 1000, 'easeInOutExpo');
}

function goToNosotros() {
    $("html, body").animate({scrollTop: $("#divNosotros").offset().top}, 1000, 'easeInOutExpo');
}

function goToUbicacion() {
    $("html, body").animate({scrollTop: $("#divubicacion").offset().top}, 1000, 'easeInOutExpo');
}


function goToContacto() {
    console.log("Presionado Contacto")
    $("html, body").animate({scrollTop: $("#divContacto").offset().top}, 1000, 'easeInOutExpo');
}

function compartir() {
    var modal = document.getElementById("modalcompartir");
    modal.style.display = "block";
    var modalminimizado = document.getElementById('modalminimizado');
    modalminimizado.style.display = 'none';
}

function CerrarCompartir() {
    var modal = document.getElementById("modalcompartir");
    modal.style.display = "none";
    var modalminimizado = document.getElementById('modalminimizado');
    modalminimizado.style.display = 'none';
}

function minimizar() {
    var modal = document.getElementById("modalcontenedor");
    modal.style.display = "none";
    var modalminimizado = document.getElementById('modalminimizado');
    modalminimizado.style.display = 'block';
    setTimeout(() => {
        maximizar()
    }, 90000)
}

function maximizar() {
    var imagen1 = document.getElementById("invitacion1");
    var imagen2 = document.getElementById("invitacion2");
    var imagen3 = document.getElementById("invitacion3");
    var imagen4 = document.getElementById("invitacion4");
    var imagen5 = document.getElementById("invitacion5");
    var minimizado1 = document.getElementById("minimizado1");
    var minimizado2 = document.getElementById("minimizado2");
    var minimizado3 = document.getElementById("minimizado3");
    var minimizado4 = document.getElementById("minimizado4");
    var minimizado5 = document.getElementById("minimizado5");
    var numero = (Math.floor(Math.random() * 10) + 1);
    imagen1.style.display = numero === 1 || numero === 2 ? "block" : "none";
    imagen2.style.display = numero === 3 || numero === 4 ? "block" : "none";
    imagen3.style.display = numero === 5 || numero === 6 ? "block" : "none";
    imagen4.style.display = numero === 7 || numero === 8 ? "block" : "none";
    imagen5.style.display = numero === 9 || numero === 10 ? "block" : "none";

    minimizado1.style.display = numero === 1 || numero === 2 ? "block" : "none";
    minimizado2.style.display = numero === 3 || numero === 4 ? "block" : "none";
    minimizado3.style.display = numero === 5 || numero === 6 ? "block" : "none";
    minimizado4.style.display = numero === 7 || numero === 8 ? "block" : "none";
    minimizado5.style.display = numero === 9 || numero === 10 ? "block" : "none";

    var modal = document.getElementById("modalcontenedor");
    modal.style.display = "block";
    var modalminimizado = document.getElementById('modalminimizado');
    modalminimizado.style.display = 'none';
}

function guardar() {
    var inputNombre = document.getElementById("inputNombre");
    var inputTelefono = document.getElementById("inputTelefono");
    var inputCorreo = document.getElementById("inputCorreo");
    if (inputNombre.value.trim().length === 0) {
        swal.fire({
            title: 'Atención',
            text: 'Es necesario escribir el nombre',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
    } else if (inputTelefono.value.trim().length === 0) {
        swal.fire({
            title: 'Atención',
            text: 'Es necesario escribir el teléfono',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
    } else {
        var modal = document.getElementById("modalcontenedor");
        modal.style.display = "none";
        var modalminimizado = document.getElementById('modalminimizado');
        modalminimizado.style.display = 'none';
    }

}



function NoMuted() {
    var video = document.getElementById("video");
    video.muted = false;
}

function ValidarForm() {
    function ValidarForm() {
        var name = document.getElementById('inputNombre').value;
        var correo = document.getElementById('inputCorreo').value;
        var telefono = document.getElementById('inputTelefono').value;
        var comentarios = document.getElementById('inputMensaje').value;
        if (name === '') {
            document.getElementById('inputNombre').focus();
            return false;
        } else if (correo === '') {
            document.getElementById('inputCorreo').focus();
            return false;
        } else if (telefono === '') {
            document.getElementById('inputTelefono').focus();
            return false;
        } else if (comentarios === '') {
            document.getElementById('inputMensaje').focus();
            return false;
        } else {
            return true;
        }
    }
}


/*


setTimeout(function () {
    var video = document.getElementById('video');
    video.removeAttribute('muted');
}, 2000);
 */






