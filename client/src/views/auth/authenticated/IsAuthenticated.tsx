import { useIsAuthenticatedQuery } from 'generate/graphql-frontend'
import { FC } from 'react'
import { Redirect } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

export const IsAuthenticated: FC<Props> = ({ children }) => {
  const { loading, error, data } = useIsAuthenticatedQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  if (data?.me) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return <>{children}</>
}
