/*
aqui va el filtro de proveedores con formato XlSX
*/

'use strict';
let ruta_origen = require('../configuraciones/ruta_origen_y_respaldo'); // importa las rutas donde lee los archivos originales
let ruta_destino = require('../configuraciones/ruta_origen_y_respaldo'); // importa las rutas donde se guardan los listados ya procesados
let cabecera_inicial = require('../configuraciones/cabecera'); // importa los titulos del csv original en caso que no vengan para identificar los datos
let cabecera_final = require('../configuraciones/cabecera'); // importa los titulos del csv final que se sube a BL
let proveedor_xlsx = require('../configuraciones/datos_proveedores'); // importa todos los proveedores de todos los paises
let contacto = require('../configuraciones/datos_contacto_proveedor'); // importa todos los contactos comerciales
let dias_validez = require('../configuraciones/datos_dias_validez'); // importa la informacion de dias de vigencia de cada listado
let descuento = require('../configuraciones/datos_descuento_comercial'); // importa todos los descuentos comerciales de cada proveedor
let impuesto = require('../configuraciones/datos_impuestos'); // importa todos los iva de cada pais
let cantidad_isbn = require('../configuraciones/datos_promedio_isbn'); // importa un promedio de cuantos isbn maneja cada proveedor
let variables_busqueda = require('../configuraciones/datos_variables_de_busqueda'); // importa las variables que indique los isbn stock pvp