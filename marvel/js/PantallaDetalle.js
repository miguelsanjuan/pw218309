var indice=localStorage.getItem('indice')
var personaje=localStorage.getItem('personaje')

var buscaDetalleComics =function(){
	var url='https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=';
	fetch(url+personaje)
	.then(datos=>datos.json())
	.then(datos=>{
		var resultado="<ol>";
		var cantidad=datos.data.result[indice].comics.returned;
		for ( let i=0; i < cantidad; i++) {
			resultado += `
			<li>
			${datos.data.result[indice].comics.items[i].name}
			</li>
			`
		}
		resultado +="</ol>"
		document.getElementById('comics').innerHTML = resultado
	})
buscaDetalleComics();