// sinonimo de index.js

const { crearArchivo } = require('./helpers/multiplicar.js');
require('colors'); 
// const colors = require('colors'); 
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b,argv.l,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));

  // node modules se vuelve a crear con la info del package json
  // npm install
  // git init
  // git add .
  // git commit -m "Primer commit"
  // volver ultima version / git checkout -- .
