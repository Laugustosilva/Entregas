
$(document).ready(function () {
    var n = 4;
    var $formWell = $('#form-well');
    var $formGroups = $('div.form-group');
    var $helpBlocks = $('span.help-block');
    var $nomeInput = $('#nome-input');
    var $quantInput = $('#quant-input');

  var $tabelaMaterial = $('#tabela-material')
    $formWell.hide();

  $('#botao-novo-material').click(function () {
    $formWell.fadeToggle();
  });
    function limparErros() {
      $formGroups.removeClass('has-error');
      $helpBlocks.text('');
  }


  $.get('http://localhost:8080/materiais/rest',function(materiais){
    console.log(materiais);
  },'json');
    function adicionarMaterial(material) {
        var linha = '<tr>';
        linha += '<td>' + material.nome + '</td>';
        linha += '<td>' + material.id + '</td>';
        linha += '<td>' + material.quantidade + '</td>';
        linha += '<td>';
        linha += '<button class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button>';

        linha += '</td ></tr>';
        var $linhaObjeto = $(linha);

        var $botao = $linhaObjeto.find('button.btn').click(function () {
            console.log(material.id);
            $linhaObjeto.remove();
        });

        $tabelaMaterial.append($linhaObjeto);
    }

    function listarMateriais(materiais){
      $.each(materiais, function(i, mat){
      adicionarMaterial(mat);
    })
  }
    var materialExemplo=[{"nome": "Caderno","id": 1, "quantidade": "12"}, {"nome": "Lapis", "id": 2, "quantidade": "22"}, {"nome": "Borracha","id": 3, "quantidade": "53"}];
    listarMateriais(materialExemplo);

  function mostrarErros(erros) {
    var helpBlockPrefixo = '#help-block-';
    var formGroupPrefixo = '#form-group-';
    $.each(erros, function (propriedade, valorDaPropriedade) {
      $(helpBlockPrefixo + propriedade).text(valorDaPropriedade);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

  $('#form-material').submit(function (evento) {
    evento.preventDefault();
    limparErros();
      var nome = $nomeInput.val();
      var quant = $quantInput.val();
      if(quant === '' && nome === '') {
          mostrarErros({'nome': 'Campo Obrigatorio'});
          mostrarErros({'quant': 'Campo Obrigatorio'});
      }
      else if(nome === '') {
          mostrarErros({'nome': 'Campo Obrigatorio'});

      }else if(quant === ''){
          mostrarErros({'quant': 'Campo Obrigatorio'});

      }else {
          adicionarMaterial({"nome": nome,
              "id": n,
              "quantidade": quant});
          $nomeInput.val('');
          $quantInput.val('');
          n++;
      }

  });

});
