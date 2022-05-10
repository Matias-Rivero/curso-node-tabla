const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5,listar = false, hasta = 10) => {

  try {

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    if(listar){ // == true

      console.log('======================='.green);
      console.log('   Tabla del '.green,colors.green(base));
      console.log('======================='.green);

    console.log(consola);
   }
    // Mas simple el writeFileSync
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;

    /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if(err) throw err; // si hay error devolve el error
        console.log(`tabla-${base} creado con exito!!`);

    }); */

  } catch (err) {
      throw err;
  }
};

module.exports = {
  crearArchivo,
};

// CrearArchivo = CrearArchivo -- Redundante tener una propiedad cuyo valor apunta a una constante con el mismo nombre
// Estoy exportando la funcion que tiene el mismo nombre
