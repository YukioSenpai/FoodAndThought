import { Layout } from 'antd'
import { FC } from 'react'
import { css } from './header.styles'

const { Header: Head } = Layout

//TODO: link

export const Header: FC = () => (
  <Head className={css.header}>
    {/* <Link href={Routes.Home()}> */}
    <img alt="logo" src="/logo.png" className={css.logo} />
    {/* </Link> */}
    {/* <AvatarDropDown /> */}
  </Head>
)
