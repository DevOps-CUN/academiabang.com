function registrar() {
    let var2 = [
        [
            $("#Nombre_p").val(),
            $("#Email_p").val(),
            $("#Facilitador").val()
        ],
        "1HrGhEIin-lGBbD9RgMUWyR4hLKfUTkDnKKQCI9ZxPc0"
    ];
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "https://cebiacapi.herokuapp.com/googlesheet",


        success: function(response) {
            console.log(response);
            console.log("Te esperamos");
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Ha ocurrido un problema, inténtalo más tarde");
        }
    });

}

function registrar2() {
    let var3 = [
        [
            $("#Nombre").val(),
            $("#Email").val(),
            $("#Codigo").val(),
            $("#Fecha").val(),
            $('#Desplegable').val()
        ],
        "1c11A0Vs4ExYXkOkMKLh0CAZe-K0_7hWe9LBuZrqTuFI"
    ];
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),

        url: "https://cebiacapi.herokuapp.com/googlesheet",


        success: function(response) {
            console.log(response);
            console.log("Te esperamos");
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Ha ocurrido un problema, inténtalo más tarde");
        }
    });
}