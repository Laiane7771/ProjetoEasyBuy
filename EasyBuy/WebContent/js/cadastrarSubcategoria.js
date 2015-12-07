$(document).ready(function(){
		$('#categorias').load('http://carrinhocompras-visecitecfsa.rhcloud.com/categoryList');
		
		$('#botaoCadastrar').click(function(){
		     $.ajax({
			 url:'http://carrinhocompras-visecitecfsa.rhcloud.com/registerSubCategory?nomeSubCategoria='+ $("#idCategorias").val()+'&idcategoria='+$("#categorias").val(),
			 crossDomain:true,
			 
			     sucess:function(data){
				 alert(data);
				 },
				 error:function(){
					 alert("erro");
				 },
				 beforeSend:function(){
					 $('#carregando').show();
				 },
				 complete:function(){
					 $('#carregando').hide();
					 alert("subcategoria cadastrada");
				 }
		     });
		     return false;
		
		});
});
			                	
			                	
			       