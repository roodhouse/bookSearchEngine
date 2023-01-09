import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser()
`

export const ADD_USER = gql`
    mutation addUser()
`

export const SAVE_BOOK = gql`
    mutation saveBook()
`

export const REMOVE_BOOK = gql`
    mutation removeBook()
`


// * `mutations.js`:

// 	* `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.

// 	* `ADD_USER` will execute the `addUser` mutation.

// 	* `SAVE_BOOK` will execute the `saveBook` mutation.

// 	* `REMOVE_BOOK` will execute the `removeBook` mutation.