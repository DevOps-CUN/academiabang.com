numeroPersona;
numeroPHtml;
indflechas = 1;
ScrollReveal({ duration: 1000 })
ScrollReveal().reveal('.scroll', { delay: 800 });
ScrollReveal().reveal('headline', { delay: 800 });

/*$('#exampleModalCenter').on('hide.bs.modal', modalcerrado())

    function modalcerrado() {
        console.log("por lo menos entro")
        debugger
    }*/

function numeroP(numP) {
    numeroPersona = numP;
    numeroPHtml = numeroPersona + 1;
    if (numeroPersona == 0 || numeroPersona == 2 ||
        numeroPersona == 4 || numeroPersona == 7 ||
        numeroPersona == 8 || numeroPersona == 9 ||
        numeroPersona == 14 || numeroPersona == 16 ||
        numeroPersona == 18 || numeroPersona == 37 ||
        numeroPersona == 38 || numeroPersona == 39 ||
        numeroPersona == 40 || numeroPersona == 41 ||
        numeroPersona == 42 || numeroPersona == 43 ||
        numeroPersona == 44 || numeroPersona == 46 ||
        numeroPersona == 48 || numeroPersona == 49) {
        imagen = document.getElementById("imagenPersona");
        imagen.classList.add('classinvisible');
        video = document.getElementById("videoPersona");
        video.classList.remove('classinvisible');
        video.classList.add('classvisible');
        document.getElementById("videoPersona").src = "../images/Intraemprendedores/videos/" + (numeroPersona) + ".mp4";
    } else {
        imagen = document.getElementById("imagenPersona");
        imagen.classList.remove('classinvisible');
        imagen.classList.add('classvisible');
        video = document.getElementById("videoPersona");
        video.classList.add('classinvisible');
        document.getElementById("imagenPersona").src = "../images/Intraemprendedores/Fotos/" + (numeroPHtml) + ".png";
    }

    flecha = document.getElementById("btnizq");
    flecha.classList.add('classinvisible');
    flechader = document.getElementById("btnder");
    flechader.classList.remove('classinvisible');
    flechader.classList.add('classvisible');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../helpers/intremprendedores.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonPersonas = JSON.parse(this.responseText)
            datosPersonas = jsonPersonas.Personas;
            nombre = datosPersonas[numeroPersona].Nombre;
            titulo = datosPersonas[numeroPersona].Titulo;
            parrafo = datosPersonas[numeroPersona].Parrafo;
            titulohtml = document.getElementById('descripcion');
            parrafohtml = document.getElementById('descripciontxt');
            nombrehtml = document.getElementById('nombrePersona');
            titulohtml.innerHTML = titulo[0];
            parrafohtml.innerHTML = parrafo[0];
            nombrehtml.innerHTML = nombre;
            console.log(titulo[0])
        }
    }
}


function FbotonOn() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../helpers/intremprendedores.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonPersonas = JSON.parse(this.responseText)
            datosPersonas = jsonPersonas.Personas;
            titulo = datosPersonas[numeroPersona].Titulo;
            parrafo = datosPersonas[numeroPersona].Parrafo;
            titulohtml = document.getElementById('descripcion');
            parrafohtml = document.getElementById('descripciontxt');
            if (titulohtml.innerHTML == titulo[0]) {
                flecha = document.getElementById("btnizq");
                flecha.classList.remove('classinvisible');
                flecha.classList.add('classvisible');
                titulohtml.innerHTML = titulo[1];
                parrafohtml.innerHTML = parrafo[1];
            } else if (titulohtml.innerHTML == titulo[1]) {
                titulohtml.innerHTML = titulo[2];
                parrafohtml.innerHTML = parrafo[2];
                flecha = document.getElementById("btnder");
                flecha.classList.add('classinvisible');
            }

        }
    }
}

function FbotonOff() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../helpers/intremprendedores.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonPersonas = JSON.parse(this.responseText)
            datosPersonas = jsonPersonas.Personas;
            titulo = datosPersonas[numeroPersona].Titulo;
            parrafo = datosPersonas[numeroPersona].Parrafo;
            titulohtml = document.getElementById('descripcion');
            parrafohtml = document.getElementById('descripciontxt');
            if (titulohtml.innerHTML == titulo[1]) {
                flecha = document.getElementById("btnizq");
                flecha.classList.remove('classvisible');
                flecha.classList.add('classinvisible');
                titulohtml.innerHTML = titulo[0];
                parrafohtml.innerHTML = parrafo[0];
            } else if (titulohtml.innerHTML == titulo[2]) {
                titulohtml.innerHTML = titulo[1];
                parrafohtml.innerHTML = parrafo[1];
                flecha = document.getElementById("btnder");
                flecha.classList.remove('classinvisible');
                flecha.classList.add('classvisible');
            }
        }
    }
}