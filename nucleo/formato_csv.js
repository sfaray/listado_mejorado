/*
aqui va el filtro de proveedores con formato CSV
*/

'use strict';
let ruta_origen = require('../configuraciones/ruta_origen_y_respaldo'); // importa las rutas donde lee los archivos originales
let ruta_destino = require('../configuraciones/ruta_origen_y_respaldo'); // importa las rutas donde se guardan los listados ya procesados
let cabecera_inicial = require('../configuraciones/cabecera'); // importa los titulos del csv original en caso que no vengan para identificar los datos
let cabecera_final = require('../configuraciones/cabecera'); // importa los titulos del csv final que se sube a BL
let proveedor_csv = require('../configuraciones/datos_proveedores'); // importa todos los proveedores de todos los paises
let contacto = require('../configuraciones/datos_contacto_proveedor'); // importa todos los contactos comerciales
let dias_validez = require('../configuraciones/datos_dias_validez'); // importa la informacion de dias de vigencia de cada listado
let descuento = require('../configuraciones/datos_descuento_comercial'); // importa todos los descuentos comerciales de cada proveedor
let impuesto = require('../configuraciones/datos_impuestos'); // importa todos los iva de cada pais
let cantidad_isbn = require('../configuraciones/datos_promedio_isbn'); // importa un promedio de cuantos isbn maneja cada proveedor
let variables_busqueda = require('../configuraciones/datos_variables_de_busqueda'); // importa las variables que indique los isbn stock pvp
const { creacion_carpetas } = require('./funciones/crear_carpetas'); // llama la funcion de crear carpetas en la ruta de respaldo de listados
const { conexion_ftp } = require('./funciones/conexiones_ftp');

let carpetas_original_y_subir = async () => {
    await creacion_carpetas();
    await lectura_ftp_original();
}

let lectura_ftp_original = async () => {
    await conexion_ftp();
    await proceso_csv();
}

let proceso_csv = async () => {
    // en esta linea va el codigo donde procesa el listado una vez terminado el proceso ejecuta la funciona de tamaño archivo
    await tamaño_archivo() 
}

let tamaño_archivo = async () => {
    // en esta linea va el codigo que calcula el tamaño del csv ya procesado y si pesa mas de 84 kilos pasa al siguiente proceso 
    await conteo_de_isbn();
}

let conteo_de_isbn = async () => {
    // aqui va el codigo que hace el conteo de isbn y a su vez hace comparacion entre lo que se tiene como promedio y si coincide pasa la prueba
    await carga_ftp_final();
}

carpetas_original_y_subir();