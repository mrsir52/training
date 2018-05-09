import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  login() {
    this.props.auth.login();
  }
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
                console.log("home", this.state)
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
  render() {

    const { isAuthenticated } = this.props.auth;
      console.log(this.props)
    return (

      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in! You can now view your{' '}
                <Link to="NewProfile">profile area</Link>
                .
              </h4>

            )

        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
