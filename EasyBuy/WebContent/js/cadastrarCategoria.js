
$(document).ready(function(){
	$('#est-botao-cadastrar').click(function(){
		$.ajax({
			url:'http://carrinhocompras-visecitecfsa.rhcloud.com/registerCategory?nomeCategoria='+ $('#categoriasNome').val(),
			
			crossDomain: true,
			
			sucess: function(data){
				altert(data);
				},
				error: function(){
					alert("erro");
				},
				beforeSend: function(){
					/*$('#carregando...').show();*/
				},
				complete:function(){
					/*$('#carregando').hide();*/
					alert("Categoria Cadastrada com sucesso!");
				}
		});
	
		return false;
	});
});			                	
			                	
	
	     