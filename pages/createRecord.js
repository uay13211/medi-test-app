import React, { useState, useMemo, useCallback } from 'react';
import Input from '../components/input'
import { useHistory } from 'react-router-native'
import RatioButton from '../components/ratioButton'
import Button from '../components/button'
import { StyleSheet, Text, View } from 'react-native';
import constants from '../constants'
import call from '../api'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: constants.white,
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    title: {
      fontSize: constants.titleFontSize,
      marginTop: 100,
      marginBottom: 32
    },
    followUpTitle: {
        fontSize: constants.fontSize,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        paddingHorizontal: 12
    },
    button: {
      marginTop: 30,
    }
});

const CreateRecordPage = () => {
    const [doctorName, setDoctorName] = useState('')
    const [medication, setMedication] = useState('')
    const [consultationFee, setConsultationFee] = useState('')
    const [followUp, setfollowUp] = useState(null) 
    const history = useHistory()

    const disableBtn = useMemo(() => {
       return !doctorName || !medication || !consultationFee || followUp === null
    }, [doctorName, medication, consultationFee, followUp])

    const onSubmit = useCallback(async () => {
        try {
            const data = await call('post', '/record', {
                doctorName, 
                medication, 
                consultationFee: parseInt(consultationFee), 
                followUp
            })
    
            history.push('/consultationRecord')
        } catch(e) {    
            console.log(e)
        }
    }, [doctorName, medication, consultationFee, followUp])

    const onRatioBtnPress = useCallback((value) => {
        setfollowUp(value)
    }, [followUp])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SUBMIT RECORD</Text>
            <Input placeholder="Doctor Name" value={doctorName} onChange={setDoctorName}/>
            <Input placeholder="Medication" value={medication} onChange={setMedication} />
            <Input placeholder="Consultation Fee" value={consultationFee} onChange={setConsultationFee} keyboardType='number-pad'/>
            <View style={styles.row}>
                <Text style={styles.followUpTitle}>Follow Up :</Text>
                <RatioButton title='Yes' selected={followUp} onPress={() => onRatioBtnPress(true)} />
                <RatioButton title='No' selected={followUp === false} onPress={() => onRatioBtnPress(false)} />
            </View>
            <Button 
              style={styles.button}
              title="Submit"
              onPress={onSubmit}
              disabled={disableBtn}
            />
        </View>
    )
}

export default CreateRecordPage