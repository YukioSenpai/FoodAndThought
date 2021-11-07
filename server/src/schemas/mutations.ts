import { compare, hash } from "bcryptjs"
import { OAuth2Client } from "google-auth-library"
import { sign } from 'jsonwebtoken'
import { arg, intArg, nonNull, objectType, stringArg } from "nexus"
import { Context } from "../context"
import { APP_SECRET, getUserId } from "../utils"

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
      t.field('signup', {
        type: 'AuthPayload',
        args: {
          name: stringArg(),
          email: nonNull(stringArg()),
          password: nonNull(stringArg()),
        },
        resolve: async (_parent, args, context: Context) => {
          const hashedPassword = await hash(args.password, 10)
          const user = await context.prisma.user.create({
            data: {
              name: args.name,
              email: args.email,
              password: hashedPassword,
            },
          })
          return {
            token: sign({ userId: user.id }, APP_SECRET),
            user,
          }
        },
      })
  
      t.field('login', {
        type: 'AuthPayload',
        args: {
          email: nonNull(stringArg()),
          password: nonNull(stringArg()),
        },
        resolve: async (_parent, { email, password }, context: Context) => {
          const user = await context.prisma.user.findUnique({
            where: {
              email,
            },
          })
          if (!user) {
            throw new Error(`No user found for email: ${email}`)
          }
          const passwordValid = await compare(password, user.password)
          if (!passwordValid) {
            throw new Error('Invalid password')
          }
          return {
            token: sign({ userId: user.id }, APP_SECRET),
            user,
          }
        },
      })

    //   t.field("googleLogin", {
    //     type: "AuthPayload",
    //     args: {
    //       googleLoginInput: arg({ type: "googleLoginInput" }),
    //     },
    //     resolve: async (_, { googleLoginInput}, ctx: Context) => {
    //       try {
    //         const { email_verified, email, name }: any = (await client.verifyIdToken({
    //           idToken: googleLoginInput?.idToken || '',
    //           audience: process.env.GOOGLE_CLIENT_ID,
    //         })).getPayload()
    //         if (email_verified) {
    //           const user = await ctx.prisma.user.findUnique({
    //             where: {
    //               email,
    //             },
    //           })
    //           if (!user) {
    //             const hashedPassword = await hash('test', 10)
    //             const newUser = await ctx.prisma.user.create({
    //               data: {
    //               name,
    //               email,
    //               password: hashedPassword
    //             }
    //             })
    //             return {
    //               user: newUser,
    //               token: sign({ userId: newUser.id }, APP_SECRET),
    //             } || undefined
    //           }
    //           return {
    //             user,
    //             token: sign({ userId: user.id }, APP_SECRET),
    //           }
    //         }
    //       } catch (error) {
    //         throw new Error(error.message);
    //       }
    //     },
    //   })
  
      t.field('createDraft', {
        type: 'Post',
        args: {
          data: nonNull(
            arg({
              type: 'PostCreateInput',
            }),
          ),
        },
        resolve: (_, args, context: Context) => {
          const userId = getUserId(context)
          return context.prisma.post.create({
            data: {
              title: args.data.title,
              content: args.data.content,
              authorId: userId,
            },
          })
        },
      })
  
      t.field('togglePublishPost', {
        type: 'Post',
        args: {
          id: nonNull(intArg()),
        },
        resolve: async (_, args, context: Context) => {
          try {
            const post = await context.prisma.post.findUnique({
              where: { id: args.id || undefined },
              select: {
                published: true,
              },
            })
            return context.prisma.post.update({
              where: { id: args.id || undefined },
              data: { published: !post?.published },
            })
          } catch (e) {
            throw new Error(
              `Post with ID ${args.id} does not exist in the database.`,
            )
          }
        },
      })
  
      t.field('incrementPostViewCount', {
        type: 'Post',
        args: {
          id: nonNull(intArg()),
        },
        resolve: (_, args, context: Context) => {
          return context.prisma.post.update({
            where: { id: args.id || undefined },
            data: {
              viewCount: {
                increment: 1,
              },
            },
          })
        },
      })
  
      t.field('deletePost', {
        type: 'Post',
        args: {
          id: nonNull(intArg()),
        },
        resolve: (_, args, context: Context) => {
          return context.prisma.post.delete({
            where: { id: args.id },
          })
        },
      })
    },
  })