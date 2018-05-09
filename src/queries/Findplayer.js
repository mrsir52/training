import graphql from 'graphql-tag'

export default graphql`
    query getPlayer1 ($id: ID!){
        getPlayer(id: $id) {
            position
            maxBench
            maxSquat
        }
    }
  `



//     query getPlayer {
//     getPlayer(id: "1"){
//         id
//         firstName
//         lastName
//         position
//         gradClass
//     }
//
// }`


//
//
// Use this query when ready to import sub into query
//     `
//     query getPlayer1 ($id: ID!){
//         getPlayer(id: $id) {
//             position
//             maxBench
//             maxSquat
//         }
//     }
// `
//
