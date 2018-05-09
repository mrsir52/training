import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import Findplayer from '../queries/Findplayer'





class Getplayer extends Component {


    render() {
    console.log("Get Player:", this.props)
        return (
            <div>
                <h1>This is from Get Player</h1>


            </div>

        )

    }

}

export default graphql(Findplayer, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            players: props.data.getPlayer ? props.data.getPlayer : []

        })
    }
)(Getplayer)