

var banners = ["Image/banner_s1.png", "Image/original.jpg"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('#banner_principal').style.backgroundImage = "url("+banners[bannerAtual]+")";
}

setInterval(trocaBanner, 4000);

var categorias = [ 
                  {
                	  nome: "Computador",
                	  valor: "1"
                  },
                  {
                	  nome: "livros",
                	  valor: "2"
                  }
 ];

function carregaCaixa(){
	document.getElementById("combobox1");
	for(var i = 0; i<categorias.length; i++){
	var apt = document.createElement("option");
		apt.value = categorias[i].valor;
		apt.text = categorias[i].nome;
		combobox1.add(apt, i);
	}
}

carregaCaixa();

function carregaCaixa(){
	var caixa  = $("combobox");
	for(var i = 0; i<categorias.length; i++){
		var apt = $("option");
		opt.value = categorias[i].valor;
		opt.text = categorias[i].nome;
		combobox1.appendChild(apt);
	}
}

function onChangeCaixa(){
	console.log("mudou");
}

$(combo)