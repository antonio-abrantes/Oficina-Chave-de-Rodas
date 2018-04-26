<!-- Modal -->
<div class="modal fade" id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="modalLabel">Excluir Item</h4>
            </div>
            <div class="modal-body">Deseja realmente excluir este item?</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">N&atilde;o</button>
            </div>
        </div>
    </div>
</div>

<!-- Inicio da parte dos itens -->
<div class="row col-md-8" style="width:920px;height: 500px; overflow: auto;padding: 0;">
    <h3 class="page-header">Lista de Serviços</h3>
    <div id="tabela-lista-servicos" style="font-size: 10px">
        <table class="table">
            <thead class="thead-inverse">
            <tr style="background: #55595c; color: white;">
                <th>ITEM</th>
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