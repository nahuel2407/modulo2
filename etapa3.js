let autosImportados = require("./autos");
let concesionaria = {
  autos: autosImportados,
  buscarAuto: function(patente) {
    return this.autos.find(function(auto) {
      return auto.patente == patente;
    }) || null;
  }
};

console
