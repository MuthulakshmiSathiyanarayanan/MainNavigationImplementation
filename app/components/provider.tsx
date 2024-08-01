'use client';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';
import React, { ReactNode } from 'react';
const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
});
interface ProviderProps {
    children: ReactNode;
}
const Provider: React.FC<ProviderProps> = ({ children }) => {
       return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;