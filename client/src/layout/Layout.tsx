import { Layout as Layouts } from 'antd'
import type { ReactNode } from 'react'
import { Header } from './header/Header'
import { css } from './layout.styles'

const { Content } = Layouts

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Layouts className={css.layout}>
      <Content>{children}</Content>
    </Layouts>
  </>
)
