const countries = ["US", "UK", "JP", "CA", "CN"];

const infoCountries = [
  {
    id: 1,
    name: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_United_States.svg/1200px-Flag_of_United_States.svg.png",
    capital: "Washington, DC",
    code: "US",
  },
  {
    id: 2,
    name: "UK",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_United_Kingdom.svg/1200px-Flag_of_United_Kingdom.svg.png",
    capital: "London",
    code: "GB",
  },
  {
    id: 3,
    name: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_Canada.svg/1200px-Flag_of_Canada.svg.png",
    capital: "Ottawa",
    code: "CA",
  },
  {
    id: 4,
    name: "China",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_China.svg/1200px-Flag_of_China.svg.png",
    capital: "Beijing",
    code: "CN",
  },
  {
    id: 5,
    name: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    capital: "Tokyo",
    code: "JP",
  },
];

const ApiEndpoindAllCountries = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(countries);
    }, 1000);
  });
};

const ApiEndpoindOneInfoCountry = (code) => {
  return new Promise((resolve) => {
    const infoCountry = infoCountries.filter(
      (country) => country.code === code
    );
    setTimeout(() => {
      resolve(infoCountry);
    }, 1000);
  });
};

module.exports = { ApiEndpoindAllCountries, ApiEndpoindOneInfoCountry };
