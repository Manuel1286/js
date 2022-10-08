function leerClientes() {
    $.ajax({
        url: 'https://g19f958a16ac41a-qnchivnrp8ig17dv.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        datatype: 'json',
        // Traer Clientes
        success: function (clientes) {
            let cs = clientes.items;
            $("#listaClientes").empty();
            for (i = 0; i < cs.length; i++) {
                $("#listaClientes").append(cs[i].id + " " + cs[i].name + " " + cs[i].email + " " + cs[i].age);
                $("#listaClientes").append("<button onclick='borrarCliente(" + cs[i].id + ")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un Problema');
        },
    });
}
//Vamos a crear una funcion que me guarde un cliente 
function guardarCliente() {
    let idCliente = $("#idCliente").val();
    let Nombre = $("#NombreCliente").val();
    let mailCliente = $("#mailCliente").val();
    let edad = $("#edadCliente").val();
    let data = {
        id: idCliente,
        name: Nombre,
        email: mailCliente,
        age: edad
    };
    let dataBd = JSON.stringify(data);
    
    $.ajax({
        url: 'https://g19f958a16ac41a-qnchivnrp8ig17dv.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        data: dataBd,
        contentType: 'application/json',
        success: function (pepito) {
            $("#idCliente").val("");
            $("#NombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            alert('ha sucedido un Problema');
        },
        complete: function () {
            leerClientes();
        }
    });
}

function editarCliente() {
    let idCliente = $("#idCliente").val();
    let Nombre = $("#NombreCliente").val();
    let mailCliente = $("#mailCliente").val();
    let edad = $("#edadCliente").val();
    let data = {
        id: idCliente,
        name: Nombre,
        email: mailCliente,
        age: edad
    };
    let dataBd = JSON.stringify(data);
    console.log(dataBd)
    $.ajax({
        url: 'https://g19f958a16ac41a-qnchivnrp8ig17dv.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        //datatype: 'json',
        data: dataBd,
        contentType: 'application/json',
        success: function (pepito) {
            $("#idCliente").val("");
            $("#NombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            alert('ha sucedido un Problema');
        },
        complete: function () {
            leerClientes();
        }
        });
}

function borrarCliente(idCliente) {

    let data = {
        id: idCliente

    };
    let dataBd = JSON.stringify(data);
    console.log(dataBd)
    $.ajax({
        url: 'https://g19f958a16ac41a-qnchivnrp8ig17dv.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        //datatype: 'json',
        data: dataBd,
        contentType: 'application/json',
        success: function (pepito) {
            $("#idCliente").val("");
            $("#NombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            alert('ha sucedido un Problema');
        },
        complete: function () {
            leerClientes();
        }
    });
}