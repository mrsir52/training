import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="container">
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <h2>Training App</h2>
                        </Navbar.Brand>
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.goTo.bind(this, 'home')}
                        >
                            Home
                        </Button>
                        {
                            !isAuthenticated() && (
                                <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.login.bind(this)}
                                >
                                    Log In
                                </Button>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.goTo.bind(this, 'profile')}
                                >
                                    Profile
                                </Button>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.logout.bind(this)}
                                >
                                    Log Out
                                </Button>
                            )
                        }
                    </Navbar.Header>
                </Navbar>
                {/*<div className="container">*/}
                    {/*<div>*/}
                        {/*<h2>test</h2>*/}
                        {/*/!*{this.props.children}*!/*/}

                    {/*</div>*/}

                {/*</div>*/}

            </div>
        );
    }
}

export default App;
