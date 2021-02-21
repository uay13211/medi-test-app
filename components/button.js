import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import constants from '../constants'

const buttonBaseStyle = {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: constants.borderRadius
}

const styles = (disabled) => StyleSheet.create({
    button: {
        ...buttonBaseStyle,
        backgroundColor: disabled ? constants.grey : constants.blue
    },
    title: {
        color: disabled ? constants.deepGrey : constants.white,
        fontSize: 16,
        fontWeight: "500"
    }
})

const Button = ({
    style,
    title,
    onPress,
    disabled = false
}) => {
    return (
        <TouchableOpacity 
            disabled={disabled} 
            onPress={onPress} 
            style={[styles(disabled).button, style]}>
            <Text style={styles(disabled).title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button