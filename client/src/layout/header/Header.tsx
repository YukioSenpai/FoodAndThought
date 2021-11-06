import { Layout } from 'antd'
import { FC } from 'react'
import { AvatarDropDown } from './avatar/AvatarDropdown'
import { css } from './header.styles'

const { Header: Head } = Layout

//TODO: link

export const Header: FC = () => (
  <Head className={css.header}>
    {/* <Link href={Routes.Home()}> */}
    <img alt="logo" src="/logo2.png" className={css.logo} />
    {/* </Link> */}
    <AvatarDropDown />
  </Head>
)
