

let creacion_carpetas = async () => {
    try {
        //para crear CARPETA correspondiente a cada proveedor
        let mkdirSync = (path) => {
            try {
                fs.mkdirSync(path);
            } catch (e) {
                if (e.code != "EEXIST")
                    throw e;
            }
        };
        mkdirSync(path.join(`${origen}`));
        mkdirSync(path.join(`${origen}`, `${pais}`));
        mkdirSync(path.join(`${origen}`, `${pais}`, `${proveedor}`));
        mkdirSync(path.join(`${origen}`, `${pais}`, `${proveedor}`, `${fecha}`));
        mkdirSync(path.join(`${origen}`, `${pais}`, `${proveedor}`, `${fecha}`, "original"));
        mkdirSync(path.join(`${origen}`, `${pais}`, `${proveedor}`, `${fecha}`, "subir"));
        console.log(gutil.colors.yellow(`SE CREO LA CARPETA ${proveedor} CON FECHA: ${fecha}`));
    } catch (error) {
        console.log(error);
        console.log('existe un error en la creacion de las carpetas')
    }
}

module.exports = {creacion_carpetas};