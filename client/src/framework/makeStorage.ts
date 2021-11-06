import { fold } from 'fp-ts/lib/Either'
import { flow } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import * as TE from 'fp-ts/lib/TaskEither'
import * as t from 'io-ts'
import { optionFromNullable } from 'io-ts-types/lib/optionFromNullable'
import { failure } from 'io-ts/PathReporter'
import LocalForage from 'localforage'
import { nanoid } from 'nanoid'

export interface StorageReadError {
  type: 'StorageReadError'
  reason: unknown
}

export interface StorageWriteError {
  type: 'StorageWriteError'
  reason: unknown
}

const LOCAL_DB_NAME = '__kvdb'
const localdb = LocalForage.createInstance({
  name: LOCAL_DB_NAME,
})

const LOCAL_STORAGE_NAME = '__kvls'
const localstorage = LocalForage.createInstance({
  name: LOCAL_STORAGE_NAME,
  driver: LocalForage.LOCALSTORAGE,
})

const tabStorageKey = (): string => {
  if (!window.name) window.name = nanoid(10)
  return window.name
}

interface StorageOps<T> {
  set: (value: T) => TE.TaskEither<StorageWriteError, unknown>
  get: TE.TaskEither<StorageReadError, O.Option<T>>
  clear: TE.TaskEither<StorageWriteError, unknown>

  // observable: Lazy<Observable<T>> => replaced with SWR
}

const decodedPromise = <A>(p: Promise<unknown>, codec: t.Type<A, unknown>): Promise<A> =>
  p.then(
    flow(
      value => codec.decode(value),
      fold(
        errors => Promise.reject(failure(errors)),
        value => Promise.resolve(value)
      )
    )
  )

export const makeStorage = <T>(
  key: string,
  codec: t.Type<T, unknown>,
  crossTab: boolean
): StorageOps<T> => {
  const keyId = () => (crossTab ? key : `${tabStorageKey()}/${key}`)

  const storage = crossTab ? localdb : localstorage

  const get: TE.TaskEither<StorageReadError, O.Option<T>> = TE.tryCatch(
    () => decodedPromise(storage.getItem(keyId()), optionFromNullable(codec)),
    err => ({ reason: err, type: 'StorageReadError' })
  )

  const clear: TE.TaskEither<StorageWriteError, unknown> = TE.tryCatch(
    () => storage.removeItem(keyId()),
    err => ({ reason: err, type: 'StorageWriteError' })
  )

  const set: (value: T) => TE.TaskEither<StorageWriteError, unknown> = (value: T) =>
    TE.tryCatch(
      () => storage.setItem(keyId(), codec.encode(value)),
      err => ({ reason: err, type: 'StorageWriteError' })
    )

  return {
    get,
    set,
    clear,
  }
}
