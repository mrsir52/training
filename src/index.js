import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './routes'
import Client from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider as Provider } from 'react-apollo';
import config from './appsync'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';



const client = new Client({
    url: config.graphqlEndpoint,
    region: config.region,
    auth: {
        type: config.authenticationType,
        apiKey: config.apiKey
    }
})

const WithProvider = () => (
    <Provider client={client}>
        <Rehydrated>
            <Routes />
        </Rehydrated>
    </Provider>

)

ReactDOM.render(<WithProvider/>,
    document.getElementById('root')
);
