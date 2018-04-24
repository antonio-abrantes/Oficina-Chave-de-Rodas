/**
 * Created by Antonio Abrantes on 06/06/2017.
 */


$(function () {

    /**
     * Funções do menu lateral principal
     * */

    $("#home").on("click", function () {
        $.ajax({
            url: 'cadastros/home.html',
            type: "GET",
            success: function (retorno) {
                $("#cadastros").html(retorno).fadeIn(1000);
            }
        });
    });


    $("#cadastro-cliente").on("click", function () {
        console.log("Teste");
        $.ajax({
            url: 'cadastros/create-cliente.html',
            type: "GET",
            success: function (retorno) {
                $("#cadastros").html(retorno).fadeIn(1000);
            }
        });
    });

    $("#ordem-servico").on("click", function () {
        $.ajax({
            url: 'cadastros/create-ordem-servico.html',
            type: "GET",
            success: function (retorno) {
                $("#cadastros").html(retorno).fadeIn(1000);
            }
        });
    });

    $("#servicos").on("click", function () {
        $.ajax({
            url: 'cadastros/create-servicos.html',
            type: "GET",
            success: function (retorno) {
                $("#cadastros").html(retorno).fadeIn(1000);
            }
        });
    });

    console.log("Iniciou o MAIN");

});