// Banco de datos simulado
let empresas = [
  {
    id: 1,
    nombre: "Apple",
    fechaFundacion: "1976-04-01",
    site: "https://www.apple.com"
  },
  {
    id: 2,
    nombre: "Google",
    fechaFundacion: "1988-09-04",
    site: "https://www.google.com"
  },
  {
    id: 3,
    nombre: "Microsoft",
    fechaFundacion: "1975-04-04",
    site: "https://www.microsoft.com"
  }
];

module.exports = {
  findAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(empresas);
      }, 300);
    });
  },
  find(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const uEmpresa = empresas.find(empresa => empresa.id === id);
        if (uEmpresa) {
          resolve(uEmpresa);
        }
      }, 300);
    });
  }
};
