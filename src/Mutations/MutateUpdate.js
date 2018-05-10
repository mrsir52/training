import gql from 'graphql-tag'


export default gql`
mutation updatePlayer ($id: ID!){
 deletePlayer(input: {
  id: $id}){
   id
 }
}
`