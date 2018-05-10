import gql from 'graphql-tag'

export default gql`
    mutation createPlayer(
    $id: ID!
    $firstName: String!
    $lastName: String!
   

    ) {
        createPlayer(input: {
            id: $id, firstName: $firstName, lastName: $lastName
        }) {
            id
            firstName
            lastName
            
        }
    }
`