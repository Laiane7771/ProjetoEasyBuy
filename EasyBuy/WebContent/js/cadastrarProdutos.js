
$(document).ready(function(){

	$('#categorias').load('http://carrinhocompras-visecitecfsa.rhcloud.com/categoryList');
	$('#idSubCategorias').load('http://carrinhocompras-visecitecfsa.rhcloud.com/subCategoryList?idCategoria='+$("#idSubCategorias").val()),

	$('#categorias').change(function(){
		$('#idSubCategorias').load('http://carrinhocompras-visecitecfsa.rhcloud.com/subCategoryList?idCategoria='+$("#idSubCategorias").val()),

		$('#label-cad').click(function(){
			$.ajax({
				url:'http://carrinhocompras-visecitecfsa.rhcloud.com/registerProduct?descricao='+$("#area-text-desc")+'&valorAtual='+$("#entradavaloratual")+'&valorAnterior='+$("#entradavaloranterior")+'&idSubcategoria='+$("#idSubCategorias").val(),
				crossDomain:true,		

				sucess:function(data){
					alert(data);
				},
				error:function(){
					alert("erro");
				},
				beforeSend:function(){
					/* $('#carregando').show();*/
				},
				complete:function(){
					/* $('#carregando').hide();*/
					alert("produto cadastrado");
				}  

			});
			return false;
		});	

	});
});
