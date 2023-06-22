const ApiExterna = require("./05-usoExtremo");

const Controller = {
  getAllInformation: async () => {
    const codigos = await ApiExterna.ApiEndpoindAllCountries();
    const informacion = await codigos.map(function (codigo) {
      return ApiExterna.ApiEndpoindOneInfoCountry(codigo);
    });
    const result = await Promise.all(informacion);
    return result.filter((item) => item.length > 0);
  },
};

Controller.getAllInformation().then(console.log);
