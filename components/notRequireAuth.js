import React, { useEffect } from 'react'
import { useHistory } from 'react-router-native'
import { useSelector } from 'react-redux'

const RequireAuth = ({
    children
}) => {
    const isLoggedIn = useSelector(state => state.userProfile.isLoggedIn)
    const history = useHistory()

    useEffect(() => {
        if(isLoggedIn) {
            history.push('/userProfile')
        }
    }, [isLoggedIn])

    if(isLoggedIn) return null

    return (
        <>
            {children}
        </>
    )
}

export default RequireAuth