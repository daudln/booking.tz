import {  createSchema, createYoga } from "graphql-yoga";
import userSchema from "./schema/user";

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