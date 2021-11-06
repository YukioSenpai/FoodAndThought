import { pipe } from 'fp-ts/lib/function'
import * as t from 'io-ts'
import { failure } from 'io-ts/lib/PathReporter'
import { orThrow } from '../framework/fp/either'

const envCodec = t.interface({
  VITE_DOMAIN: t.string,
  VITE_SERVER_ENDPOINT: t.string,
})

/*
    Typecheck env on app start, or crash
*/
export const env = pipe(
  envCodec.decode(import.meta.env),
  orThrow((errors: t.Errors) => {
    throw new Error(`Failed to start application, missing env vars: ${failure(errors).join('\n')}`)
  }),
  a => ({
    auth0Domain: a.VITE_DOMAIN,
    serverEndpoint: a.VITE_SERVER_ENDPOINT,
  })
)
