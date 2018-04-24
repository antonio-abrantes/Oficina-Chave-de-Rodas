
<!-- Inicio da parte dos itens -->
<div class="row col-md-8" style="margin-top: 20px;width:920px;height: 500px; overflow: auto;padding: 0;">
    <table class="table" id="tabela-lista-servicos">
        <thead class="thead-inverse">
        <tr style="background: #55595c; color: white;">
            <th>CÓDIGO</th>
            <th>CATEGORIA</th>
            <th style="width: 180px;">DESCRIÇÃO</th>
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
                <tr class="footer pull-right">
                    <td style="width: 150px;">Total da compra</td>
                    <td style="width: 150px; text-align: right"><div>R$ <span id='valor-total'>0.0</span></div></td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>
    <div>
        <button id="add-item" class="btn btn-success">ADD SERVIÇO</button>
        <input id="gerar-ordem-servico" class="btn btn-warning" type="button" value="GERAR ORDEM">
    </div>
</div>

<script src='./js/funcoes.js' type='text/javascript'></script>