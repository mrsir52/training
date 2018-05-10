import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'
import { Card, } from 'mdbreact'

// import '../Profile/style.css'

// items.sort(function (a, b) {
//     return a.value - b.value;
// })


class Teamdata extends Component {

    state = {players: [...this.props.players], sortedPlayers: []};


    render() {
        // const sort = this.state.players.sort((a, b) => a.firstName - b.firstName);

        const sortNames = (a, b) => {
            const aCompare = a.position.toLowerCase();
            const bCompare = b.position.toLowerCase();

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const position = () => {
            console.clear()
            let players = [...this.props.players].sort(sortNames)
            this.setState({players, show: true})

            setTimeout(() => {
                console.log("pos:", this.state.players)
            }, 1000)

        }

        // -----------------------------------------------------------------------------------


        const sortNames2 = (a, b) => {
            const aCompare = a.lastName.toLowerCase();
            const bCompare = b.lastName.toLowerCase();

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const lastName = () => {
            console.clear()
            let players = this.state.players.sort(sortNames2)
            this.setState({sortedPlayers: players})
            console.log(players)

        }

        //-------------------------------------------------------------------------------------

        const sortNames3 = (a, b) => {
            const aCompare = a;
            const bCompare = b;

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const graduatingClass = () => {
            console.clear()
            let players = this.state.players.sort(sortNames3)
            this.setState({sortedPlayers: players})
            console.log(players)

        }


        //------------------------------------------------------

        return (
            <div>
                <div className="container text-center">
                    <br/>
                    <div className="row">
                        <div className="col">
                            <Card>
                                <a href="/Teamdata">
                                    <h3>Team Data</h3>
                                </a>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </Card>
                        </div>
                        <br/>
                        <div className="col">
                            <Card>
                                <a href="/Createplayer">
                                    <h3>Create Player</h3>
                                </a>
                                {/*<a href="/Updateplayer">*/}
                                    {/*<h3>Update Player</h3>*/}
                                {/*</a>*/}
                                {/*<a href="/Deleteplayer">*/}
                                    {/*<h3>Delete Player</h3>*/}
                                {/*</a>*/}

                            </Card>
                        </div>
                        <br/>
                        <div className="col">
                            <Card>
                                <h3>Graduating Class Data</h3>
                                <br/>
                                <br/>
                                <br/>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <h3>Workouts</h3>
                                <br/>
                                <br/>
                                <br/>
                            </Card>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <Card>
                        <div className="container text-center align-content-center">
                            <div className="row">
                                <div className="col-lg-8">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th onClick={() => {lastName()}}>Last Name</th>
                                            <th onClick={() => {position()}}>Position</th>
                                            <th onClick={() => {graduatingClass()}}>Graduating Class</th>
                                            <th>Max Squat</th>
                                            <th>Max Bench</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.players.map((player, index) => (
                                                    <tr key={player.id}>
                                                        <td>{player.firstName}</td>
                                                        <td>{player.lastName}</td>
                                                        <td>{player.position}</td>
                                                        <td>{player.gradClass}</td>
                                                        <td>{player.maxSquat}</td>
                                                        <td>{player.maxBench}</td>
                                                    </tr>
                                                )
                                            )
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )

    }

}

export default graphql(ListPlayers, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            players: props.data.listPlayers ? props.data.listPlayers.items : []
        })
    }
)(Teamdata)