import { makeExecutableSchema } from '@graphql-tools/schema'
import { graphql } from 'graphql'

import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/schema';

import dotenv from 'dotenv';
dotenv.config()

import { dbConnection } from "../../database/config";

const getUsuarios = {
    id: 'Consultar todos los usuarios de la db',
    query: `
       {
        usuarios {
            id
            nombre
            apellido
            email
            password
        }
      }
    `,
    variables: {},

    // injecting the mock movie service with canned responses
    context: {
        user: {
            auth: true
        }
    },

    // expected result 
    esperado: {
        data: {
            usuarios: [
                {
                    id: "61bda66fbe9a905267a57b9a",
                    nombre: "Jhonny",
                    apellido: "Zapata",
                    email: "jhonny.z1022@gmail.com",
                    password: "$2b$10$Hsu638qbze2RvZYOub3UtuEXG5rGtRhR1RhcJXMB4dZdLyXgqEZpG"
                }
            ]
        }
    }
}

// reading the actual schema
// const typeDefs = fs.readFileSync('./src/schemas/Movie.graphql', 'utf8')
// make the actual schema and resolvers executable
const schema = makeExecutableSchema({ typeDefs, resolvers });

// console.log('typeDefs', typeDefs);
// console.log('resolvers', resolvers);

const { id, query, variables, context, esperado } = getUsuarios;

// console.log(getUsuarios);

test('traer todos los usuarios', async () => {
    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);
    // console.log(JSON.stringify(result));
    expect(result).toEqual(esperado);
    // done();
});

