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
        # authors: []
        description: String
        title: String
        # image: 
        link: String
    }

    type Auth {
        token: String
        user: [User]
    }

    type Mutation {
        loginUser(email: String, password: String): [Auth]
        addUser(username: String, password: String): [Auth]
        saveBook(bookAuthor: [], description: String, title: String, bookId: ID, image: , link: String): [User]
        removeBook(bookId: ID): [User] 
    }

    type Query {
        me: [User]
    }
`
