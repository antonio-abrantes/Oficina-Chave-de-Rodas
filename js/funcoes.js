$(function () {

    $("#gerar-pagamento").on("click", function () {
        var total = calcularDesconto($("#total-ordem").html());
        if(total > 0){
            $("#status-pagamento").css("background", "#05c46b");
            $("#status").html("PAGO");
            console.log("Processando pagamento...");
        }
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

    $("#gerar-ordem-servico").on("click", function () {
        $.ajax({
            url: 'cadastros/create-ordem-servico.html',
            type: "GET",
            success: function (retorno) {
                var lista = document.getElementById('tabela-lista-servicos');

                $("#cadastros").html(retorno).fadeIn(1000);
                $("#lista-servicos-gerada").html(lista);
                atualizaTotalOrdem();
            }
        });
    });

    function atualizaTotalOrdem() {
        var valorTotal = calcularDesconto($("#valor-total").html());
        $("#total-ordem").html(number_format(valorTotal, 2, '.', ','));
        if(parseFloat(valorTotal) < 200){
            $("#desconto").val("0%");
        }
    }

    //Atualiza os campos para os valores iniciais
    atualizaValores();

    function calcularDesconto(valor){
        var temp = valor.replace(",", "");
        var custo = parseFloat(temp);
        if(custo >= 200.00 && custo <= 1000.00){
            $("#desconto").val("5%");
            return custo - ((custo * 5) / 100);
        }
        if(custo > 1000.00){
            $("#desconto").val("10%");
            return custo - ((custo * 10) / 100);
        }
        return custo;
    }

    /*
     * Cada select ao ser povoado pelo PHP, o seu atributo value rece o preço do do produco que preenche o campo
     * Quando um select é selecionado, o campo com a classe preco referente a seu bloco é atualizado
     * **/
    $('body').on("change", ".selecionar", function () {

        var produto = $(this).parent().parent();
        var tagPreco = $(produto).find(".preco");
        var preco = parseFloat($(this).val());

        var subTotal = $(this).parent().parent();
        var tagSubTotaol = subTotal.find(".subtotal");

        //Implementar calculo do subtotal baseado no tempo decorrido...
        tagSubTotaol.text(number_format(custoDuracaoServico(1.32, preco), 2, '.', ','));

        //Atribui o valor do produto a celula "valor" da tabela
        tagPreco.text(number_format(preco, 2, '.', ','));
        atualizaValores();

    });

    function custoDuracaoServico(duracao, custoHora){
        var minutos = duracao * 60;
        var custo = (minutos * custoHora) / 60;
        return custo;
    }


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

            resultado += custoDuracaoServico(1.32, preco);
        }

        $("#valor-total").html(number_format(resultado, 2, '.', ','));
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

    /*
     * Função do botão remover
     * **/
    remover = function (item) {
        var tr = $(item).closest('tr');

        tr.fadeOut(400, function () {
            tr.remove();
            atualizaValores();
            atualizaTotalOrdem();
        });
    };

    /*
    * Função para formatar em formato decimal
    * Exemplo de chamada: number_format( 5000.000000, 2, '.', ',' )
    */
    function number_format(number, decimals, dec_point, thousands_sep) {
        number = (number+'').replace(',', '').replace(' ', '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }

    console.log("Iniciado..."); //Só pra testar o load do jQuery na pagina...
});