const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    hasta: "hasta",
    type: "number",
    default: 10,
    describe: "Marca el limite deseado para la tabla de multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;

// console.log(process.argv); // procesos propios de node
// console.log(argv); // el de yargs

// console.log("base: yargs", argv.b);

// const[,,arg3 = 'base=5'] = process.argv; // ventaja desestructuracion puedo mandar valor por defecto || Forma vieja sin paquetes
// const[,base = 5] = arg3.split('=');
// console.log(process.argv);

// console.log(base);

// node app --base=5

// const base = 9;

// siempre usar paquetes con muchas descargas https://www.npmjs.com/
// package.json - punto inicial de cualquier proyecto de node
// "base3": "node app --base=3"
// npm run base3
// uso de paquetes de node en mi alpicacion
// si quiero una version especifica es npm i colors@1.0.0
// yargs paquete muy popular
