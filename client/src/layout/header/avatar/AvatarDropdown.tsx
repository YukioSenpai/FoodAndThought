import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import { AuthModal } from 'views/auth/AuthModal'
import { css } from './avatarDropdown.styles'

export const AvatarDropDown: React.FC = () => {
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
              {/* <Link href={Routes.Home()}>{msg.home}</Link> */}
              Home
            </Menu.Item>
            <Menu.Divider />
            {/* {!currentUserQuery.data ? (
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
                onClick={async () => {
                  await logoutMutation()
                }}
              >
                {msg.logout}
              </Menu.Item>
            )} */}
          </Menu>
        }
      >
        {/* {currentUserQuery.data && currentUserQuery.data.avatar ? (
          <Avatar src={currentUserQuery.data.avatar} className={css.avatar} size="default" />
        ) : ( */}
        <Avatar icon={<UserOutlined />} className={css.avatar} size="default" />
        {/* )} */}
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
