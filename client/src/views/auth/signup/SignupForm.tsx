import { Button } from 'components/button/Button'
import { Form } from 'components/form/Form'
import { Input } from 'components/input/Input'

type SignupFormProps = {
  onSuccess?: () => void
  style?: string
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSuccess, style }) => {
  // const [signupMutation] = useMutation(signup)

  return (
    <div>
      <Form
        // schema={Signup}
        initialValues={{ email: '', password: '' }}
        // onSubmit={async (values) => {
        //   try {
        //     await signupMutation(values)
        //     onSuccess?.()
        //   } catch (error) {
        //     if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        //       // This error comes from Prisma
        //       return { email: "This email is already being used" }
        //     } else {
        //       return { [FORM_ERROR]: error.toString() }
        //     }
        //   }
        // }}
      >
        <Input name="email" placeholder="Email" />
        <Input name="password" placeholder="Password" type="password" />
        <Button className={style} htmlType="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default SignupForm
