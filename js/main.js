/**
 * Created by Antonio Abrantes on 06/06/2017.
 */


$(function () {

    function htmlbodyHeightUpdate(){
        var height3 = $( window ).height()
        var height1 = $('.nav').height()+50
        height2 = $('.main').height()
        if(height2 > height3){
            $('html').height(Math.max(height1,height3,height2)+10);
            $('body').height(Math.max(height1,height3,height2)+10);
        }
        else
        {
            $('html').height(Math.max(height1,height3,height2));
            $('body').height(Math.max(height1,height3,height2));
        }

    }
    $(document).ready(function () {
        htmlbodyHeightUpdate()
        $( window ).resize(function() {
            htmlbodyHeightUpdate()
        });
        $( window ).scroll(function() {
            height2 = $('.main').height()
            htmlbodyHeightUpdate()
        });
    });

});

function verifica(homeId) {
    if(homeId === "tab-principal"){
        $("#_home").addClass("active-inicio");
        // $("#_home").addClass("active-inicio").attr({
        //     "href" : "#"
        // });
    }else if(homeId === "tab-servicos"){
        $("#_servico").addClass("active-servico")
        // $("#_servico").addClass("active-servico").attr({
        //     "href" : "#"
        // });
    }else if(homeId === "tab-estudio"){

        $("#_estudio").addClass("active-o-estudio");

    }else if(homeId === "tab-portifolio"){

        $("#_portifolio").addClass("active-portfolio");

    }else if(homeId === "tab-contato"){

        $("#_contato").addClass("active-contato");

    }
}