import { Layout } from 'layout/Layout'
import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'styles/antd-theme.css'
import { IsAuthenticated } from 'views/auth/authenticated/IsAuthenticated'
import { Find } from 'views/find/Find'
import { Home } from 'views/home/Home'
import { User } from 'views/User'

export const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <IsAuthenticated>
            <Route path="/find" exact component={Find} />
          </IsAuthenticated>
        </Switch>
      </Layout>
    </Router>
  )
}
