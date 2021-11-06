import { useAllUsersQuery, useSignUpMutation } from 'generate/graphql-frontend'
import { FC } from 'react'

export const User: FC = () => {
  const { data } = useAllUsersQuery()
  const [signup, { data: test }] = useSignUpMutation({
    variables: { email: 'yo2@yo.com', password: 'coucou' },
  })
  console.log(test)
  return (
    <>
      <button onClick={() => signup()}>signup</button>
      <div>
        {data?.allUsers.map((a, i) => (
          <div key={i}>{a.email}</div>
        ))}
      </div>
    </>
  )
}
