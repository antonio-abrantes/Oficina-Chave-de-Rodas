
<?php

$tamanhos = [
    "MOTOR"     => "",
    "SUSPENSÃO" => "P",
    "FREIOS"    => "M",
    "ELETRICO"  => "G",
    "ELETRONICO"=> ""
];

?>

<tr class='produto'>
    <td>
        <label class='btn btn-primary indice' for='indice' name='indice'>1</label>
    </td>
    <td>
        <select name="tipo" class="selecionar"  style="border-radius: 5px 5px 5px 5px; height: 32px; margin-top: 1px">
            <option style="display: none" value="" default>Selecione</option>
            <option value="100.00">MOTOR</option>
            <option value="200.00">SUSPENSÃO</option>
            <option value="300.00">FREIOS</option>
            <option value="150.00">ELETRICO</option>
            <option value="350.00">ELETRÔNICO</option>
        </select>
    </td>
    <td>
        <div class="product">
            <input type="text"  style="border-radius: 5px 5px 5px 5px; height: 32px; margin-top: 1px">
        </div>
    </td>
    <td>
        <select name="tipo" class="tecnico"  style="border-radius: 5px 5px 5px 5px; height: 32px; width: 150px; margin-top: 1px">
            <option style="display: none" value="" default>Selecione um funcionario</option>
            <option value="">Fulano de Tal</option>
            <option value="">Ciclano da Silva</option>
            <option value="">Jonas Malaquias</option>
            <option value="">Regina Falange</option>
            <option value="">Elias Maluco</option>
        </select>
    </td>
    <td>
        <div style='font-size: 18px; margin-top: 5px; text-align: left'>R$  <span class='preco'>0.0</span></div>
    </td>
    <td>
        <input disabled class="quantidade" type='text' style='width: 90px; margin-top: 1px; height: 32px' value="1 h 32 m">
    </td>
    <td>
        <!-- <input class='form-control' type='text' name='valor' id='valor1' value="0.0" readonly style='width: 70px;'/> -->
<!--        <input disabled class="subtotal" type='text' style='width: 90px; margin-top: 1px; height: 32px' value="R$ 0.00">-->
        <div style='font-size: 18px; margin-top: 5px; text-align: left'>R$  <span class='subtotal'>0.0</span></div>
    </td>
    <td>
        <!-- <button type='button' class='btn btn-default add'>ADICIONAR</button> -->
        <button type='button' style="font-size: 10px; margin-top: 3px" class='btn btn-danger btn-small remover' onclick='remover(this)'>REMOVER</button>
    </td>
</tr>