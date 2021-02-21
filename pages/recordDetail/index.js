import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux'
import constants from '../../constants'
import InfoItem from '../../components/infoItem'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: constants.white,
      alignItems: 'center',
      paddingHorizontal: 30
    },
    title: {
        fontSize: constants.titleFontSize,
        marginTop: 100,
        marginBottom: 32
    },
});

const timeLocale = 'en-US'
const dateFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
const RecordDetail = () => {
    const recordDetail = useSelector(state => state.recordDetail)

    const formatedDate = (date) => {
        return new Date(date).toLocaleDateString(timeLocale, dateFormatOptions)
    }

    const formatedTime = (date) => {
        return new Date(date).toLocaleTimeString(timeLocale)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Record Detail</Text>
            <InfoItem title='Consultation Date' content={formatedDate(recordDetail.consultationDate)} />
            <InfoItem title='Consultation Time' content={formatedTime(recordDetail.consultationDate)} />
            <InfoItem title='Doctor Name' content={recordDetail.doctorName} />
            <InfoItem title='Medication' content={recordDetail.medication} />
            <InfoItem title='Consultation Fee' content={recordDetail.consultationFee} />
            <InfoItem title='Follow Up Consultation' content={recordDetail.followUp ? 'Yes' : 'No'} />
        </View>
    )
}

export default RecordDetail