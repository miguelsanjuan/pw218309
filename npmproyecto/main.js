//cargar la aplicacion electron 
const app=require('require').app;
//crear ventanas del sistema operativo
const BrowserWindow=require('electron').BrowserWindow;
//Rut del sistema de archivos del S.O.
const path=require('path');
const url=require('url');
//Otra forma de declara una constante
//Pantalla Principal
let PantallaPrincipal;
function muestraPantallaPrincipal(){
	//Creamos una pantalla vacia
	PantallaPrincipal = new BrowserWindow({width:380,height:420});
	//Cargamos en la pantalla el contenido de nuestra pagina
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
		
	}));
	//Mostramos la pantalla
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal)
