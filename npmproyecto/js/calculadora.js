
window.onload= function(){
	var operador="";

	var colorAmarillo= function(){
		this.style.background = "yellow";
	}
	var colorBlanco= function(){
		this.style.background = "white";
	}
	var operando1=document.getElementById("operando1");
	operando1.addEventListener("focus",colorAmarillo);
	operando1.addEventListener("focusout",colorBlanco);

	var numeros=function(){
		var valor=this.value;
		if(operador==""){//operando1
			var valorInput=document.getElementById("operando1").value;
			if (valorInput=="0"){
				document.getElementById("operando1").value="";
			}
			document.getElementById("operando1").value+=valor;
		}
		else{//operando2
			var valorInput=document.getElementById("operando2").value;
			if (valorInput=="0"){
				document.getElementById("operando2").value="";
			}
			document.getElementById("operando2").value+=valor;
		}
	}
	var operadores = function(){
		operador = this.value
	}
	var resultadoIgual = function(){
		oper1=document.getElementById('operando1').value;
		oper2=document.getElementById('operando2').value;
		document.getElementById('resultado').value=eval(oper1+operador+oper2);
	}
	var reinicio = function(){
		document.getElementById('operando1').value="0"
		document.getElementById('operando2').value="0"
		document.getElementById('resultado').value="0"
		operador=""

	}
	var cero=document.getElementById("cero");
	cero.addEventListener("click",numeros);
	var uno=document.getElementById("uno");
	uno.addEventListener("click",numeros);
	var dos=document.getElementById("dos");
	dos.addEventListener("click",numeros);
	var tres=document.getElementById("tres");
	tres.addEventListener("click",numeros);
	var cuatro=document.getElementById("cuatro");
	cuatro.addEventListener("click",numeros);
	var cinco=document.getElementById("cinco");
	cinco.addEventListener("click",numeros);
	var seis=document.getElementById("seis");
	seis.addEventListener("click",numeros);
	var siete=document.getElementById("siete");
	siete.addEventListener("click",numeros);
	var ocho=document.getElementById("ocho");
	ocho.addEventListener("click",numeros);
	var nueve=document.getElementById("nueve");
	nueve.addEventListener("click",numeros);
	var suma=document.getElementById("suma")
	suma.addEventListener('click',operadores)
	var resta=document.getElementById("resta")
	resta.addEventListener('click',operadores)
	var multiplicacion=document.getElementById("multiplicacion")
	multiplicacion.addEventListener('click',operadores)
	var division=document.getElementById("division")
	division.addEventListener('click',operadores)
	var reiniciar=document.getElementById("reiniciar")
	multiplicacion.addEventListener('click',operadores)