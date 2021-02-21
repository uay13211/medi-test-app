import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-native'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import constants from '../../constants'
import { setRecordDetail } from '../../redux/actions'

const styles = StyleSheet.create({
    container: {
      width: "76%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: constants.grey
    },
    text: {
      fontSize: constants.fontSize,
    }
});

const timeLocale = 'en-US'
const timeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

const RecordItem = ({
    item
}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const date = new Date(item.consultationDate).toLocaleDateString(timeLocale, timeFormatOptions)

    const onPress = useCallback(() => {
        dispatch(
            setRecordDetail(item)
        )

        history.push('/recordDetail')
    }, [dispatch])

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{item.doctorName}</Text>
        </TouchableOpacity>
    )
}

export default RecordItem