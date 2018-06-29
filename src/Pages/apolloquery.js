import gql from "graphql-tag";

client
.query({
    query: gql`
        {
            rates(currency: "USD") {
                currency
            }
        }
    `
})
.then(result => console.log(result));