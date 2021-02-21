import React, { useCallback } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useHistory } from 'react-router-native'
import constants from '../constants'

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 40,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1000,
        backgroundColor: constants.blue
    },
    icon: {
        color: constants.white,
        fontSize: 42,
        fontWeight: "500"
    }
})

const FloatingBtn = ({
    style
}) => {
    const history = useHistory()
    
    const directToCreateRecord = useCallback(() => {
        history.push('/createRecord')
    }, [history])

    return (
        <TouchableOpacity 
            onPress={directToCreateRecord} 
            style={[styles.button, style]}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}

export default FloatingBtn