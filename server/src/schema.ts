import { applyMiddleware } from 'graphql-middleware'
import { DateTimeResolver } from 'graphql-scalars'
import {
  asNexusMethod, makeSchema
} from 'nexus'
import { permissions } from './permissions'
import { SortOrder } from './schemas/enums'
import { AuthPayload, googleLoginInput, PostCreateInput, PostOrderByUpdatedAtInput, User, UserCreateInput, UserUniqueInput } from './schemas/inputObject'
import { Mutation } from './schemas/mutations'
import { Post } from './schemas/post'
import { Query } from './schemas/queries'

export const DateTime = asNexusMethod(DateTimeResolver, 'date')

const schemaWithoutPermissions = makeSchema({
  types: [
    Query,
    Mutation,
    Post,
    User,
    googleLoginInput,
    AuthPayload,
    UserUniqueInput,
    UserCreateInput,
    PostCreateInput,
    SortOrder,
    PostOrderByUpdatedAtInput,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

export const schema = applyMiddleware(schemaWithoutPermissions, permissions)
