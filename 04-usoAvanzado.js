const personas = [
  { name: "fran", email: "fran@gmail", password: "password" },
//   { name: "juan", email: "juan@gmail", password: "password" },
//   { name: "pedro", email: "pedro@gmail", password: "password" },
  { name: "peter", email: "peter@gmail", password: "password" },
//   { name: "juan", email: "juan@gmail", password: "password" },
];

// entrega un texto plano que entregue los datos en text
const texto = function (accumulador, currentItem) {
  return (
    accumulador +
    currentItem.name +
    "|" +
    currentItem.email +
    "|" +
    currentItem.password +
    "\n"
  );
};

const otraFuncion = (valor1, valor2) => {
  return valor2;
};

const data = personas.reduce(otraFuncion, "nombre | email | password \n");

console.log(data);
