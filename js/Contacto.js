function registrar() {
    let var2 = [
        [
            $('input:radio[name=inlineRadioOptions]:checked').val(),
            $("#Nombre").val(),
            $("#Email").val(),
            $("#Tel").val(),
            $("#Asunto").val(),
            $("#Descripcion").val()
        ],
        "1XxqyLq72WQ3h75d-9JSzTOjb58WQs_MmA9K8mJt7cbM"
    ];
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "https://cebiacapi.herokuapp.com/googlesheet",


        success: function(response) {
            console.log(response);
            console.log("Pronto estaremos contactándote");
            alert("Pronto estaremos contactándote");
            window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Ha ocurrido un problema, inténtalo más tarde");
        }
    });

}