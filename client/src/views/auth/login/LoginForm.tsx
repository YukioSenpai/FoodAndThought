import { Button } from 'components/button/Button'
import { Form } from 'components/form/Form'
import { FormItem } from 'components/form/FormItem'
import { Input } from 'components/input/Input'
import { useLoginMutation } from 'generate/graphql-frontend'
import { useTranslator } from 'hooks/use-translator'
import { useHistory } from 'react-router-dom'
import { translate } from 'typed-intl'

type LoginFormProps = {
  onSuccess?: () => void
  style?: string
}

const LoginMsg = translate({
  login: 'Se connecter',
}).supporting('en', {
  login: 'Login',
})

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, style }) => {
  const history = useHistory()
  const msg = useTranslator(LoginMsg)

  const [loginMutation] = useLoginMutation()

  return (
    <div>
      <Form
        onFinish={async values => {
          try {
            const res = await loginMutation({
              variables: { email: values.email, password: values.password },
            })
            localStorage.setItem('token', res.data?.login?.token || '')
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
            {msg.login}
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default LoginForm
