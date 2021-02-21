import React from 'react'
import useInit from './hooks/useInit'
import { BackButton } from 'react-router-native'

const Container = ({
    children
}) => {
    const isReady = useInit()

    if(!isReady) return null

    return (
        <>
            <BackButton />
            {children}
        </>
    )
}

export default Container