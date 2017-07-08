import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/home/HomePage'
import AboutPage from '../components/about/AboutPage'
import LoginPage from '../components/user/LoginPage'
import LogoutPage from '../components/user/LogoutPage'
import ContactsPage from '../components/contacts/ContactsPage'
import RegisterPage from '../components/user/RegisterPage'
import PageNotFound from '../components/error/PageNotFound'
import ProfilePage from '../components/profile/ProfilePage'
import NotesPage from '../components/notes/NotesPage'
import ModesPage from '../components/modes/ModesPage'
import ModePage from '../components/modes/ModePage'
import PrivateRoute from './PrivateRoute'
import PrivateRouteForLogin from './PrivateRouteForLogin'
 
export default () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contacts' component={ContactsPage} />
        <PrivateRouteForLogin path='/user/register' component={RegisterPage} />
        <PrivateRouteForLogin path='/user/login' component={LoginPage} />
        <Route path='/modes' component={ModesPage} />
        <Route path='/modepage/:id' component={ModePage} />
        <PrivateRoute path='/user/profile' component={ProfilePage} />
        <PrivateRoute path='/user/logout' component={LogoutPage} />
        <PrivateRoute path='/user/notes' component={NotesPage} />
        <Route component={PageNotFound} />
    </Switch>
)
