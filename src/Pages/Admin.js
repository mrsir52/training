import React, {Component} from 'react';
import {graphql, Mutation} from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'
import { Card } from 'mdbreact'
import Modal from './ModalPage'


import MutateDelete from "../Mutations/MutateDelete";


// import '../Profile/style.css'

// items.sort(function (a, b) {
//     return a.value - b.value;
// })


class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [...this.props.players],
            sortedPlayers: [],
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
        // state = {players: [...this.props.players], sortedPlayers: []};


    render() {
        // const sort = this.state.players.sort((a, b) => a.firstName - b.firstName);

        // MyLocalStorage.add('players', this.props.players)

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
            const aCompare = a.gradClass;
            const bCompare = b.gradClass;

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

        const sortSquat = (a, b) => {
            const aCompare = a.maxSquat;
            const bCompare = b.maxSquat;

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const maxSquat = () => {
            console.clear()
            let players = this.state.players.sort(sortSquat)
            this.setState({sortedPlayers: players})
            console.log(players)

        }


        //------------------------------------------------------

        const sortBench = (a, b) => {
            const aCompare = a.maxBench;
            const bCompare = b.maxBench;

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const maxBench = () => {
            console.clear()
            let players = this.state.players.sort(sortBench)
            this.setState({sortedPlayers: players})
            console.log(players)

        }


        //------------------------------------------------------

        return (
            <div>
                <div className="container">
                    <Card>
                        <div className="container text-center align-content-center">
                            <div className="row">
                                <div className="col-lg-8">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th onClick={() => {
                                                lastName()
                                            }}>Last Name
                                            </th>
                                            <th onClick={() => {
                                                position()
                                            }}>Position
                                            </th>
                                            <th onClick={() => {
                                                graduatingClass()
                                            }}>Graduating Class
                                            </th>
                                            <th onClick={() => {
                                                maxSquat()
                                            }}>Max Squat
                                            </th>
                                            <th onClick={() => {
                                                maxSquat()
                                            }}>Max Bench
                                            </th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                            <th>
                                                <a href="/Createplayer">
                                                    <button>Create</button>
                                                </a>
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {

                                            this.state.players.map((player, index) => (
                                                    <Mutation mutation={MutateDelete}
                                                              update={(cache, {data: {deletePlayer}}) => {

                                                              }}
                                                    >
                                                        {(deletePlayer, {data}) => (
                                                            <tr key={player.id}>
                                                                <td>{player.firstName}</td>
                                                                <td>{player.lastName}</td>
                                                                <td>{player.position}</td>
                                                                <td>{player.gradClass}</td>
                                                                <td>{player.maxSquat}</td>
                                                                <td>{player.maxBench}</td>
                                                                <td>
                                                                    {/*<a href={`/Updateplayer/${id}`}></a>*/}
                                                                    <i className="fas fa-pen-square m-1"></i>
                                                                </td>
                                                                <td onClick={e => deletePlayer({variables: {id: player.id}})}>

                                                                    <i className=" fas fa-times-circle m-1"></i>
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </Mutation>
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

                <Modal />

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
)(Admin)