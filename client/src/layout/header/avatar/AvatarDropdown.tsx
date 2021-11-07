import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import { useIsAuthenticatedQuery } from 'generate/graphql-frontend'
import { useTranslator } from 'hooks/use-translator'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { translate } from 'typed-intl'
import { AuthModal } from 'views/auth/AuthModal'
import { css } from './avatarDropdown.styles'

const AvatarMsg = translate({
  login: 'Connexion',
  create: 'Inscription',
  logout: 'Se déconnecter',
  home: 'Acceuil',
}).supporting('en', {
  login: 'Login',
  create: 'Signup',
  logout: 'Logout',
  home: 'Home',
})

export const AvatarDropDown: React.FC = () => {
  const history = useHistory()
  const msg = useTranslator(AvatarMsg)

  const { data } = useIsAuthenticatedQuery()

  const [visible, setVisible] = useState(false)
  const [isConnect, setIsConnect] = useState(true)

  const login = () => {
    setVisible(true)
    setIsConnect(true)
  }

  const create = () => {
    setVisible(true)
    setIsConnect(false)
  }

  return (
    <>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu>
            <Menu.Item key="catalog">
              <Link to="/">{msg.home}</Link>
            </Menu.Item>
            <Menu.Divider />
            {!data?.me ? (
              <>
                <Menu.Item key="login" onClick={login}>
                  {msg.login}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="create" onClick={create}>
                  {msg.create}
                </Menu.Item>
              </>
            ) : (
              <Menu.Item
                key="logout"
                onClick={() => {
                  localStorage.removeItem('token')
                  location.reload()
                  history.push('/')
                }}
              >
                {msg.logout}
              </Menu.Item>
            )}
          </Menu>
        }
      >
        <div>
          {/* {currentUserQuery.data && currentUserQuery.data.avatar ? (
          <Avatar src={currentUserQuery.data.avatar} className={css.avatar} size="default" />
        ) : ( */}
          <Avatar icon={<UserOutlined />} className={css.avatar} size="default" />
          {/* )} */}
        </div>
      </Dropdown>
      <AuthModal
        visible={visible}
        setVisible={setVisible}
        isConnect={isConnect}
        setIsConnect={setIsConnect}
      />
    </>
  )
}
