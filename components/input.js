import React, { useState, useCallback, useEffect } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import constants from '../constants'

const styles = (onUsed) => StyleSheet.create({
    input: {
        width: '100%',
        borderRadius: constants.borderRadius,
        padding: 12,
        fontSize: constants.fontSize,
        backgroundColor: onUsed ? constants.lightGrey : constants.grey,
        marginTop: constants.margin,
    }
})

const Input = ({
    value,
    onChange,
    placeholder = '',
    secure = false,
    keyboardType = 'default',
    style
}) => {
    const [onUsed, setOnUsed] = useState(false)

    const onChangeText = useCallback((text) => {
        onChange(text)
    }, [onChange])

    const onFocus = () => {
        setOnUsed(true)
    }

    const onBlur = () => {
        setOnUsed(false)
    }

    useEffect(() => {
        if(value && !onUsed) {
            setOnUsed(true)
        }
    }, [onUsed, value])

    return (
        <TextInput
            style={[styles(onUsed).input, style]}
            placeholder={placeholder}
            secureTextEntry={secure}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            onFocus={onFocus}
            onBlur={onBlur}
            editable
        />
    )
}

export default Input