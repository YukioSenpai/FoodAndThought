import { Layout } from 'layout/Layout'
import { FC } from 'react'
import 'styles/antd-theme.css'
import { Home } from 'views/home/Home'

export const App: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
