import { Space } from 'antd'
import { Button } from 'components/button/Button'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { css } from './authSocialMedia.styles'

interface Props {
  isNew: boolean
}

export const AuthSocialMedia: React.FC<Props> = ({ isNew }) => {
  // const [googleMutation] = useGoogleMutation()

  return (
    <Space direction="vertical" className={css.space}>
      <Button className={css.button}>
        <Space>
          <FcGoogle className={css.logo} />
          <span>{isNew ? 'Signup with google' : 'Connect with google'}</span>
        </Space>
      </Button>
    </Space>
  )
}
