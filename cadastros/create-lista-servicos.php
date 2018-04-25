
<!-- Inicio da parte dos itens -->
<div class="row col-md-8" style="margin-top: 20px;width:920px;height: 500px; overflow: auto;padding: 0;">
    <div id="tabela-lista-servicos" style="font-size: 10px">
        <table class="table">
            <thead class="thead-inverse">
            <tr style="background: #55595c; color: white;">
                <th>CÓDIGO</th>
                <th>CATEGORIA</th>
                <th style="width: 180px;">DESCRIÇÃO</th>
                <th>TÉCNICO</th>
                <th>VALOR/HORA</th>
                <th>DURAÇÃO</th>
                <th>SUB TOTAL</th>
                <th style="width: 100px; text-align: center">-</th>
            </tr>
            </thead>
            <tbody id="list-produtos">



            </tbody>
        </table>
        <div>
            <form action="" method="post" class="form">
                <table class="table" id="resultado">
                    <tbody>
                    <tr class="footer pull-right" style="font-size: 14px">
                        <td style="width: 200px; font-weight: bold">TOTAL DOS SERVIÇOS</td>
                        <td style="width: 150px; text-align: right"><div>R$ <span id='valor-total'>0.0</span></div></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
    <div>
        <button id="add-item" class="btn btn-success">ADD SERVIÇO</button>
        <input id="gerar-ordem-servico" class="btn btn-warning" type="button" value="GERAR ORDEM">
    </div>
</div>

<script src='./js/funcoes.js' type='text/javascript'></script>