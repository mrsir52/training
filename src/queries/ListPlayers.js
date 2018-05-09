import graphql from 'graphql-tag'

export default graphql`
    query listPlayers {
        listPlayers {
            items{
                firstName
                lastName
                position
                gradClass
                maxBench
                maxSquat
            }
        }
    }
`
