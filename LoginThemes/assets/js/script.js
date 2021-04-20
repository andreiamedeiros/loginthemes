function dark() {
	limpaTema();
	document.getElementById('formulario').classList.add('tema2');
	document.querySelector("body").style.background = "url('assets/images/flores.jpg')";
}

function light() {
	limpaTema();
	document.getElementById('formulario').classList.add('tema1');
	document.querySelector("body").style.background = "url('assets/images/flores2.jpg')";
}

function limpaTema(){
	document.getElementById('formulario').classList.remove('tema1');
	document.getElementById('formulario').classList.remove('tema2');
}