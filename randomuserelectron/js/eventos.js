
var muestraUsuarios= function(){
	fetch('https://randomuser.me/api/?results=20')
	.then(datos=>datos.json())
	.then(datos=>{
		document.getElementById('primerSeccion').innerHTML = ""
		for (let i = 0;i<20;i++) {
			document.getElementById('primerSeccion').innerHTML +=`
				<article id="artFoto">
			<img src="${datos.results[i].picture.large}" alt="" id="foto">
		</article>
		<article id="artDatos">
			<label for="txtNombre">Nombre</label>
			<div id="txtNombre" class="redondeadonorelieve">
			${datos.results[i].name.first}</div>
			<label for="txtApellido">Apellido</label>
			<div id="txtApellido" class="redondeadonorelieve">
			${datos.results[i].name.last}</div>
			<label for="txtGenero">Género</label>
			<div id="txtGenero" class="redondeadonorelieve">
			${datos.results[i].gender}</div>
			<label for="txtCorreo">Correo</label>
			<div id="txtCorreo" class="redondeadonorelieve">
			${datos.results[i].email}</div>
		</article>
		<hr>
			`
		}
	})
}

var muestraUsuario= function(){
	fetch('https://randomuser.me/api/')
	.then(datos=>datos.json())
	.then(datos=>{
		document.getElementById("txtNombre").innerHTML=datos.results[0].name.first
		document.getElementById("txtApellido").innerHTML=datos.results[0].name.last
		document.getElementById("txtGenero").innerHTML=datos.results[0].gender
		document.getElementById("txtCorreo").innerHTML=datos.results[0].email
		document.getElementById("foto").setAttribute('src',datos.results[0].picture.large)
	})
}
	var btnUsuario=document.getElementById('btnUsuario');
	btnUsuario.addEventListener('click',muestraUsuarios)
