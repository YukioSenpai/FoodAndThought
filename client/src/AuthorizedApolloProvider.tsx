import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from 'apollo-link-context'
import { notifyGraphQLErrors } from 'components/notification/notifications'
import { env } from 'core/env'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const AuthorizedApolloProvider: React.FC<Props> = ({ children }) => {
  const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
      ...headers,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    }
  })

  const errorLink = onError(response => {
    notifyGraphQLErrors(response)

    const { graphQLErrors, networkError } = response
    networkError && console.log(`[Network error]: ${networkError}`)
    graphQLErrors?.forEach?.(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  })

  const httpLink = createHttpLink({
    uri: env.serverEndpoint,
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink.concat(errorLink) as any) as any,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
