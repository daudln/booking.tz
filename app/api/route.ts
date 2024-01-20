import {  createSchema, createYoga } from "graphql-yoga";

const schema = createSchema({
    typeDefs: /* GraphQL */ `
        type Query {
            hello: String
        }
    `,
    resolvers: {
        Query: {
            hello: () => "world",
        },
    },
});

const {handleRequest} = createYoga({
    graphqlEndpoint: "/api",
    schema,
    fetchAPI:{
        Request:Request,
        Response:Response
    }
})

export {handleRequest as GET, handleRequest as POST}