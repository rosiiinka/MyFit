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

export default () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contacts' component={ContactsPage} />
        <Route path='/user/register' component={RegisterPage} />
        <Route path='/user/login' component={LoginPage} />
        <Route path='/user/logout' component={LogoutPage} />
        <Route path='/user/profile' component={ProfilePage} />
        <Route path='/user/notes' component={NotesPage} />
        <Route path='/modes' component={ModesPage} />
        <Route component={PageNotFound} />
    </Switch>
)
