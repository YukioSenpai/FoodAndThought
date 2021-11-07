import { Divider, Modal, Space } from 'antd'
import { useTranslator } from 'hooks/use-translator'
import React from 'react'
import { translate } from 'typed-intl'
import { css } from './authModal.styles'
import LoginForm from './login/LoginForm'
import { AuthSocialMedia } from './media/AuthSocialMedia'
import { SignupForm } from './signup/SignupForm'

interface Props {
  visible: boolean
  setVisible: (value: React.SetStateAction<boolean>) => void
  isConnect: boolean
  setIsConnect: (value: React.SetStateAction<boolean>) => void
}

const AuthMsg = translate({
  signIn: 'Connexion',
  signUp: 'Rejoignez la communauté de ',
  swapLogIn: 'Envie de nous rejoindre ?',
  create: 'Créer un compte',
  swapLogOut: 'Déjà un compte ? ',
  connect: 'Me connecter',
}).supporting('en', {
  signIn: 'Login',
  signUp: 'Join the community of ',
  swapLogIn: 'Want to join us ?',
  create: 'Create an account',
  swapLogOut: 'Already an account ? ',
  connect: 'Login',
})

export const AuthModal: React.FC<Props> = ({ visible, setVisible, isConnect, setIsConnect }) => {
  const msg = useTranslator(AuthMsg)

  const isValid = () => {
    setVisible(false)
  }

  return (
    <div>
      <Modal
        visible={visible}
        destroyOnClose={true}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        footer={null}
      >
        <div className={css.container}>
          <div className={css.title}>{isConnect ? msg.signIn : msg.signUp}</div>
          <div className={css.box}>
            {isConnect ? (
              <LoginForm onSuccess={isValid} style={css.button} />
            ) : (
              <SignupForm onSuccess={isValid} style={css.button} />
            )}
          </div>
          <div className={css.divider}>ou</div>
          <AuthSocialMedia isNew={!isConnect} />
          <Divider />
          <Space className={css.footer}>
            {isConnect ? msg.swapLogIn : msg.swapLogOut}
            <span onClick={() => setIsConnect(!isConnect)} className={css.link}>
              {isConnect ? msg.create : msg.connect}
            </span>
          </Space>
        </div>
      </Modal>
    </div>
  )
}
