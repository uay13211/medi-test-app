import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-native'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../redux/actions'

export default () => {
    const [isReady, setIsReady] = useState(false)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.userProfile.isLoggedIn)
    const history = useHistory()

    useEffect(() => {
        (async () => {
            await dispatch(getCurrentUser())
            setIsReady(true)
        })()
    }, [])

    useEffect(() => {
        if(isReady) {
            if(isLoggedIn) {
                history.push('/userProfile')
            } else {
                history.push('/login')
            }
        }
    }, [isReady, isLoggedIn])

    return isReady
}