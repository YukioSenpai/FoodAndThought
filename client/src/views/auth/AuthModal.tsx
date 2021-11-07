import { Divider, Modal, Space } from 'antd'
import React from 'react'
import { css } from './authModal.styles'
import LoginForm from './login/LoginForm'
import { AuthSocialMedia } from './media/AuthSocialMedia'
import SignupForm from './signup/SignupForm'

interface Props {
  visible: boolean
  setVisible: (value: React.SetStateAction<boolean>) => void
  isConnect: boolean
  setIsConnect: (value: React.SetStateAction<boolean>) => void
}

export const AuthModal: React.FC<Props> = ({ visible, setVisible, isConnect, setIsConnect }) => {
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
          <div className={css.title}>{isConnect ? 'Login' : 'Join the community of '}</div>
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
            {isConnect ? 'Want to join us ?' : 'Already an account ? '}
            <span onClick={() => setIsConnect(!isConnect)} className={css.link}>
              {isConnect ? 'Create an account' : 'Login'}
            </span>
          </Space>
        </div>
      </Modal>
    </div>
  )
}
