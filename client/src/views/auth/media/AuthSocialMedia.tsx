import { Space } from 'antd'
import { Button } from 'components/button/Button'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { css } from './authSocialMedia.styles'

interface Props {
  isNew: boolean
}

export const AuthSocialMedia: React.FC<Props> = ({ isNew }) => (
  <Space direction="vertical" className={css.space}>
    {/* <Link href="/api/auth/google"> */}
    <Button className={css.button}>
      <Space>
        <FcGoogle className={css.logo} />
        <span>{isNew ? 'Signup with google' : 'Connect with google'}</span>
      </Space>
    </Button>
    {/* </Link> */}
    {/* <Link href="/api/auth/facebook">
        <Button className={css.button}>
          <Space>
            <FaFacebook className={css.logo} color="#3c5a99" />
            <span>{isNew ? msg.newFb : msg.fb}</span>
          </Space>
        </Button>
      </Link> */}
  </Space>
)
