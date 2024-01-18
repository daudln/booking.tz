 const userSchema =/* GraphQL */ `
    type User {
        id: String
        name: String
    }

    type Query {
        users: [User]
    }
`

export default userSchema