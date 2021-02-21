import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import constants from '../../constants'

const baseTabStyle = {
    flex: 1,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: constants.white,
    },
    tab: (isActive) => ({
        ...baseTabStyle,
        backgroundColor: isActive ? constants.blue : constants.white,
    }),
    text: (isActive) => ({
        color: isActive ? constants.white : constants.deepGrey
    })
})

const Tabs = ({
    items,
    style
}) => {
    return (
        <View style={[styles.container, style]}>
            {items.map((item) => {
                return (
                    <TouchableOpacity onPress={item.onPress} key={item.title} style={styles.tab(item.isActive)}>
                        <Text style={styles.text(item.isActive)}>{item.title}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default Tabs