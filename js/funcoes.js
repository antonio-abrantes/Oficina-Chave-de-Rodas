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

    $("#gerar-ordem-servico").on("click", function () {
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

    $("#orcamento").on("click", function () {
        $.ajax({
            url: 'cadastros/create-lista-servicos.php',
            type: "GET",
            success: function (retorno) {
                $("#cadastros").html(retorno).fadeIn(1000);
            }
        });
    });

    //Atualiza os campos para os valores iniciais
    atualizaValores();

    /*
     * Cada select ao ser povoado pelo PHP, o seu atributo value rece o preço do do produco que preenche o campo
     * Quando um select é selecionado, o campo com a classe preco referente a seu bloco é atualizado
     * **/
    $('body').on("change", ".selecionar", function () {

        var produto = $(this).parent().parent().parent();

        console.log(produto);

        var tagPreco = $(produto).find("span");

        var preco = parseFloat($(this).val());

        //Buscar id para definir o tamanho
        var selectContext = this;
        var id = selectContext.options[selectContext.selectedIndex].id;
        var tagTamanho = $(produto).find(".tamanho");

        //Passa por parametro o select de tamanho para receber a definição de acordo com o id
        //REQ_BUSCA_TAMANHO(id, tagTamanho[0][0] );

        //Atribui o valor do produto a celula "valor" da tabela
        tagPreco.text(preco);
        atualizaValores();

    });


    /*
     * Função referente aos campos de quantidade, ao mudar o valor, o atulaizaValores é acionado para calcular o novo total
     * **/
    $("#list-produtos").on("change", ".quantidade", function () {
        atualizaValores();
    });


    /*
     * A funçao atualiza valores pega todos os campos com classe produto, e busca pelos seus preços e faz os calculos,
     * ao final do laço, é atribudo o valor total ao campo com id total.
     * **/
    function atualizaValores() {
        var produtos = document.getElementsByClassName("produto");

        var resultado = 0;
        var numIndece = 1;

        for (var pos = 0; pos < produtos.length; pos++) {

            var precoElements = produtos[pos].getElementsByClassName("preco");
            var precoText = precoElements[0].innerHTML;

            var qtdElements = produtos[pos].getElementsByClassName("quantidade");
            var qtdText = qtdElements[0].value;

            var indice = produtos[pos].getElementsByClassName("indice");
            indice[0].innerHTML = numIndece.toString();
            numIndece++;

            var preco = parseFloat(precoText);
            var qtd = parseInt(qtdText);

            resultado += preco * qtd;

            //console.log(resultado);
        }

        $("#total").val(resultado);
    }


    // Função que atribui o numeração visual das linhas da tabela
    function atualizaIndicesItens() {
        var produtos = document.getElementsByClassName("produto");

        var numIndece = 1;

        for (var pos = 0; pos < produtos.length; pos++) {

            var indice = produtos[pos].getElementsByClassName("indice");
            indice[0].innerHTML = numIndece.toString();
            numIndece++;
        }
    }

    //Função que escuta o botão de adicionar item e chama a função ajax
    $("#add-item").on("click", REQ_AJAX_GET);


    //Função que faz a requisição do fragmento de php que será colocado na tabela...
    function REQ_AJAX_GET() {
        console.log("Entrou");
        $.ajax(
            {
                url: './cadastros/item.php',
                type: "GET",
                done: function () {
                    $('.aguarde').html("Carregando...");  //No done, vc pode realizar uma ação enquanto agurda a resuisição, geralmente utilizada para loading
                },
                success: function (retorno) {
                    $("#list-produtos").append(retorno);  //Aqui vem o retorno, exitem outros metodos, append, load, facil de entender na documentação do jQuery
                    atualizaIndicesItens();
                }
            }
        );
    }



    //Função para buscar o tamanho e atribuir ao select de tamanho
    function REQ_BUSCA_TAMANHO(id, objeto) {

        $.ajax(
            {
                url: './inc/busca_tamanho.php',
                type: "GET",
                data: {_id: id}, //Id passado por parametro do javaScrip para o php
                dataType: 'text',
                success: function (retorno) {
                    objeto.innerHTML = retorno; //resposta de execução da requisição php
                }
            }
        );
    }

    /*
     * Função do botão remover
     * **/
    remover = function (item) {
        var tr = $(item).closest('tr');

        tr.fadeOut(400, function () {
            tr.remove();
            atualizaValores();
        });
    };

    console.log("Iniciado... novo"); //Só pra testar o load do jQuery na pagina...
});