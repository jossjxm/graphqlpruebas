const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

const Empresa = require("./orm/Empresa");
const Api = require("./api");

const EmpresaType = new GraphQLObjectType({
  name: "Empresa",
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    nombre: {
      type: GraphQLString
    },
    fechaFundacion: {
      type: GraphQLString
    },
    site: {
      type: GraphQLString
    },
    productos: {
      type: GraphQLList(ProductoType),
      resolve(parentValue, args) {
        // console.log("parentValue ", parentValue);
        // console.log("args", args);
        return Api.findProductosByEmpresaId(parentValue.id);
      }
    }
  })
});

const ProductoType = new GraphQLObjectType({
  name: "Producto",
  fields: {
    id: {
      type: GraphQLInt
    },
    nombre: {
      type: GraphQLString
    },
    fechaLanzamiento: {
      type: GraphQLString
    },
    imagen: {
      type: GraphQLString
    },
    empresaId: {
      type: GraphQLInt
    },
    empresa: {
      type: EmpresaType,
      resolve(parentValue) {
        return Empresa.find(parentValue.empresaId);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      empresas: {
        type: new GraphQLList(EmpresaType),
        resolve() {
          return Empresa.findAll();
        }
      },
      empresa: {
        type: EmpresaType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(parentValue, args) {
          return Empresa.find(args.id);
        }
      },
      productos: {
        type: new GraphQLList(ProductoType),
        resolve() {
          return Api.findProductos();
        }
      },
      producto: {
        type: ProductoType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(parentValue, args) {
          return Api.findProducto(args.id);
        }
      }
    }
  })
});
