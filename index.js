const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();
const PORT = 3000;

// console.log(require('./orm/Empresa').findAll().then(res => {
//   console.log(res);
// }));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puero ${PORT}`);
});
