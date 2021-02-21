import React from 'react'
import { NativeRouter, Route, Switch } from 'react-router-native'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import UserProfilePage from './pages/userProfile'
import ConsultationRecordPage from './pages/consultationRecord'
import CreateRecordPage from './pages/createRecord'
import RecordDetailPage from './pages/recordDetail'
import RequireAuth from './components/requireAuth'
import NotRequireAuth from './components/notRequireAuth'
import Container from './container'

const Routes = () => {
    return (
        <NativeRouter>
            <Switch>
                <Container>
                    <NotRequireAuth>
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register" component={RegisterPage} />
                    </NotRequireAuth>
                    <RequireAuth>
                        <Route exact path="/userProfile" component={UserProfilePage} />
                        <Route path="/consultationRecord/:timeInterval?" component={ConsultationRecordPage} />
                        <Route exact path="/createRecord" component={CreateRecordPage} />
                        <Route exact path="/recordDetail" component={RecordDetailPage} />
                    </RequireAuth>
                </Container>
            </Switch>
        </NativeRouter>
    )
}

export default Routes