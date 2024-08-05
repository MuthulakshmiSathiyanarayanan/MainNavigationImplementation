'use client';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';
import React, { ReactNode } from 'react';
const client = new ApolloClient({
    // uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
interface ProviderProps {
    children: ReactNode;
}
const Provider: React.FC<ProviderProps> = ({ children }) => {
       return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;