import { Button } from 'components/button/Button'
import { Form } from 'components/form/Form'
import { FormItem } from 'components/form/FormItem'
import { Input } from 'components/input/Input'
import { useSignUpMutation } from 'generate/graphql-frontend'
import { useTranslator } from 'hooks/use-translator'
import { useHistory } from 'react-router-dom'
import { translate } from 'typed-intl'

type SignupFormProps = {
  onSuccess?: () => void
  style?: string
}

const SignupMsg = translate({
  signup: "S'inscrire",
}).supporting('en', {
  signup: 'Signup',
})

export const SignupForm: React.FC<SignupFormProps> = ({ onSuccess, style }) => {
  const history = useHistory()
  const msg = useTranslator(SignupMsg)

  const [signupMutation] = useSignUpMutation()

  return (
    <div>
      <Form
        onFinish={async values => {
          console.log('A')
          try {
            const res = await signupMutation({
              variables: { email: values.email, password: values.password },
            })
            console.log('B')
            localStorage.setItem('token', res.data?.signup?.token || '')
            onSuccess?.()
            location.reload()
            history.push('/')
          } catch (error) {
            console.log(error)
          }
        }}
      >
        <FormItem name="email">
          <Input name="email" placeholder="Email" />
        </FormItem>
        <FormItem name="password">
          <Input name="password" placeholder="Password" type="password" />
        </FormItem>
        <FormItem>
          <Button className={style} htmlType="submit">
            {msg.signup}
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}
