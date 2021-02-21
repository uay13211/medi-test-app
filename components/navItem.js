import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native'
import constants from '../constants'

const styles = StyleSheet.create({
    link: {
        marginTop: constants.margin 
    },
    linkText: {
        fontSize: constants.fontSize,
        fontWeight: '600',
        color: constants.blue
    }
})

const NavItem = ({
    to = '/',
    underlayColor = constants.white,
    title,
    style,
    children
}) => {
    return (
        <Link style={[styles.link, style]} underlayColor={underlayColor} to={to}>
            {children ? children : <Text style={styles.linkText}>{title}</Text>}
        </Link>
    )
}

export default NavItem