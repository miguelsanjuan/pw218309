<?php
$servidor="localhost"; //127.0.0.1
$usuario="root";
$password="";
$basededatos="pw09";

$conexion=msqli_connect($servidor, $usuario,$password,$basededatos);
$sql="select ncontrol,nombre,apellido,edad from alumnos";
$resultado=mysqli_query($conexion,$sql);
if (mysqli_num_row($resultado) > 0) {
	while ($registro=mysqli_fetch_array($resultado)) {
		$arregloDatos[]=$registro;
		// array_push($arregloDatos, $registro);
	}
	
}
//print($arregloDatos); //en pantalla
//y si quiero json
print json_encode($arregloDatos);

?>