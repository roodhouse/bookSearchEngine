const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID!
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        loginUser(email: String, password: String): Auth
        addUser(username: String, password: String, email: String): Auth
        saveBook(bookAuthor: [String], description: String, title: String, bookId: ID, image: , link: String): User
        removeBook(bookId: ID): User 
    }

    type Query {
        me: User
    }
`
module.exports = typeDefs;