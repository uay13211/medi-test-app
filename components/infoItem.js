import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import constants from '../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: constants.grey,
        justifyContent: 'center'
    },
    title: {
        fontSize: 12,
        color: constants.lightBlue
    },
    content: {
        fontSize: constants.fontSize,
        color: constants.deepGrey
    }
});

const InfoItem = ({
    title,
    content
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

export default InfoItem