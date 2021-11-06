import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { env } from 'core/env'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const AuthorizedApolloProvider: React.FC<Props> = ({ children }) => {
  const httpLink = createHttpLink({
    uri: env.serverEndpoint,
  })

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
