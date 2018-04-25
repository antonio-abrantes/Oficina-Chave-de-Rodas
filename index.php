<!DOCTYPE html>
<html>
<head lang="pt-br">
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chave de Rodas</title>

    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
    <link href="css/layout.css" rel="stylesheet" type="text/css" media="all">
    <style>
        .centro {
            margin-top: 120px;
            position:relative;
            top: 50%;
            left: 50%;
            margin-right: -80%;
            transform: translate(-50%, -50%)
        }
    </style>

</head>
<body>

<div class="container">

    <div class="row">
        <div class="col-md-12">
            <header id="page-header">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button id="botao-menu-superior" type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Oficina Chave de Rodas</a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul id="menu-superior" class="nav navbar-nav navbar-right">
                                <!--<li><a href="#">Cadastro de Clientes</a></li>-->
                                <!--<li><a href="#">Ordens de Serviço</a></li>-->
                                <!--<li><a href="#">Serviços</a></li>-->
                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </div><!-- /.container-fluid -->
                </nav>
            </header>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-2">
            <nav class="nav-sidebar visible-sm-block visible-md-block visible-lg-block">
                <ul class="nav" id="nav-principal">
                    <li class="active"><a id="home" href="#">Home</a></li>
                    <li><a href="#" id="cadastro-cliente">Cadastro de Clientes</a></li>
                    <li><a href="#" id="#">Cadastro de veículos</a></li>
                    <li><a href="#" id="ordem-servico">Ordens de Serviço</a></li>
                    <li><a href="#" id="servicos">Serviços</a></li>
                </ul>
            </nav>
        </div>

        <!--Conteúdo principal inicio -->

        <div class="col-md-10" id="cadastros" style="font-size: 14px">
            <h1 style="text-align: center; margin-top: 10px" class="page-header">SEJA BEM VINDO!</h1>
            <img class="img-responsive centro" src="img/logo_chave-de-rodas.png" alt="">

                <div style="text-align: center; margin-top: -80px">
                    <h2>SERVIÇOS ESPECIALIZADOS EM</h2>
                    <h3> MOTOR  - SUSPENSÃO - FREIOS - ELETRICA/ELETRÔNICA</h3>
                    <h4>Oferecemos descontos especiais e parcelamos em até 3 vezes</h4>
                </div>
            <div class="text-bold text-center" style="color: royalblue; margin-top: 20px">
                &copy;
                <script>
                    document.write(new Date().getFullYear())
                </script>
                <a href="https://antonio-abrantes.github.io/" target="_blank">Designed and Coded by Antônio Gonçalves de Abrantes Neto</a>
            </div>
        </div>

        <!-- / Conteúdo principal -->

    </div>
</div>

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src='js/main.js' type='text/javascript'></script>

<script>

    $("#nav-principal li").on("click", function () {
        $('#nav-principal li').removeClass('active');
        $(this).addClass('active');

    });

    $("#botao-menu-superior").on("click", function () {
        $('#menu-superior').removeClass('visible-md-block');
        console.log('OK');
    });

</script>

</body>
</html>