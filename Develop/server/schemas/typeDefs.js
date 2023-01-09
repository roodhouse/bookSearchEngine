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
`
