function menu(){
	x=window.location.href="index.html";
}


function contc(){

		x = window.location.href="tasbih.html";
	}

	function statu(){
		x = window.location.href="relogio.html";
	}


	function todo(){

		x = window.location.href="salat.html";
}


var counter = 0;

function count(){

document.getElementById('count').innerHTML=++counter;

	if (counter===33) {

		document.getElementById('suplicas').innerHTML="al-hamudillah";
	}else if(counter===66){
		document.getElementById('suplicas').innerHTML="allah Akbar";
	}else if(counter ===99){

			document.getElementById('suplicas').innerHTML="Subhan allah";
			contc();
	}
}


