import { Button } from 'components/button/Button'
import { Form } from 'components/form/Form'
import { Input } from 'components/input/Input'

type LoginFormProps = {
  onSuccess?: () => void
  style?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, style }) => {
  // const [loginMutation] = useMutation(login)
  return (
    <div>
      <Form
        // schema={Login}
        initialValues={{ email: '', password: '' }}
        // onSubmit={async (values) => {
        //   try {
        //     await loginMutation(values)
        //     onSuccess?.()
        //   } catch (error) {
        //     if (error instanceof AuthenticationError) {
        //       return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
        //     } else {
        //       return {
        //         [FORM_ERROR]:
        //           "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        //       }
        //     }
        //   }
        // }}
      >
        <Input name="email" placeholder="Email" />
        <Input name="password" placeholder="Password" type="password" />
        <Button className={style} htmlType="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
