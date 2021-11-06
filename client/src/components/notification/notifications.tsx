import { notification as notifications } from 'antd'
import { ErrorResponse } from '@apollo/client/link/error'
import { ServerError } from '@apollo/client/link/utils'
import { isString } from 'fp-ts/string'
import { ServerParseError } from '@apollo/client/link/http'
import { GraphQLError } from 'graphql'
import { Divider } from '../divider/Divider'

interface ApiSuccess {
  message: string
}

type GraphQLErrorResponse = Pick<ErrorResponse, 'graphQLErrors' | 'networkError'>

export const notifySuccess = (success: ApiSuccess) =>
  notifications.success({
    message: success.message,
  })

export const notifyError = (error: Error | string | unknown) => {
  if (error instanceof Error) {
    notifications.error({
      message: error.message,
    })
  } else if (isString(error)) {
    notifications.error({
      message: error,
    })
  }
}

export const notifyGraphQLErrors = ({ networkError, graphQLErrors = [] }: GraphQLErrorResponse) => {
  notifyNetworkError(networkError)
  notifyServerError(graphQLErrors)
}

function notifyNetworkError(networkError?: Error | ServerError | ServerParseError) {
  if (!networkError) {
    return
  }
  const statusCode = (networkError as ServerError).statusCode
  notifications.error({
    duration: 0,
    message: networkError.message,
    description: statusCode && (
      <small>
        <Divider margin={false} />
        Network Status Code: {statusCode}
      </small>
    ),
  })
}

function notifyServerError(graphQLErrors: ReadonlyArray<GraphQLError>) {
  const [firstError] = graphQLErrors
  if (firstError) {
    notifications.error({
      duration: 0,
      message: firstError.message,
      description: firstError.extensions?.code && (
        <small>
          <Divider margin={false} />
          Code: {firstError.extensions?.code}
        </small>
      ),
    })
  }
}
