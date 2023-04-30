import { ApolloClient, InMemoryCache } from "@apollo/client";
import {REACT_APP_HASURA_ADMIN_SECRET, REACT_APP_HASURA_ENDPOINT} from '@env'
export const client = new ApolloClient({
    uri: `${process.env.REACT_APP_HASURA_ENDPOINT as String}`,
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": `${process.env.REACT_APP_HASURA_ADMIN_SECRET as String}`
        }

})

console.log(REACT_APP_HASURA_ADMIN_SECRET);
console.log(REACT_APP_HASURA_ENDPOINT)