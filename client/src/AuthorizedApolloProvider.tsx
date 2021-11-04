import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const AuthorizedApolloProvider: React.FC<Props> = ({ children }) => {
  //   const errorLink = onError(response => {
  //     notifyGraphQLErrors(response)

  //     const { graphQLErrors, networkError } = response
  //     networkError && console.log(`[Network error]: ${networkError}`)
  //     graphQLErrors?.forEach?.(({ message, locations, path }) =>
  //       console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
  //     )
  //   })

  const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
