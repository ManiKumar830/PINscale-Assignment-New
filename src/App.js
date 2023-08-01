import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import AdminDashboard from './components/AdminPage/AdminDashBoard'
import AdminAllTransactions from './components/AdminPage/AdminAllTransactions'

import UserDashBoard from './components/UserPage/UserDashBoard'
import UserAllTransactions from './components/UserPage/UserAllTransactions'
import ProfilePage from './components/ProfilePage'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute
        exact
        path="/admin/dashboard"
        component={AdminDashboard}
      />
      <ProtectedRoute
        exact
        path="/admin/transactions"
        component={AdminAllTransactions}
      />

      <ProtectedRoute exact path="/user/dashboard" component={UserDashBoard} />
      <ProtectedRoute
        exact
        path="/user/transactions"
        component={UserAllTransactions}
      />
      <ProtectedRoute exact path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
