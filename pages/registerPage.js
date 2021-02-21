import React, { useState, useMemo, useCallback } from 'react';
import Input from '../components/input'
import Button from '../components/button'
import NavItem from '../components/navItem'
import { StyleSheet, Text, View } from 'react-native';
import constants from '../constants'
import { useDispatch } from 'react-redux'
import { register } from '../redux/actions'

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
    button: {
      marginTop: 24,
    }
});

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [clinicName, setClinicName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [address, setAddress] = useState('') 
    const dispatch = useDispatch()

    const disableBtn = useMemo(() => !email || !password || !clinicName || !phoneNo || !address, [email, password, clinicName, phoneNo, address])

    const onSubmit = useCallback(() => {
      dispatch(register({
        email, 
        password,
        clinicName,
        phoneNo,
        address
      }))
    }, [email, password, clinicName, phoneNo, address, dispatch])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTER</Text>
            <Input placeholder="Email" value={email} onChange={setEmail} keyboardType="email-address" />
            <Input placeholder="Password" value={password} onChange={setPassword} secure/>
            <Input placeholder="Clinic Name" value={clinicName} onChange={setClinicName}/>
            <Input placeholder="Phone" value={phoneNo} onChange={setPhoneNo} keyboardType="phone-pad" />
            <Input placeholder="Address" value={address} onChange={setAddress}/>
            <Button 
              style={styles.button}
              title="Register"
              onPress={onSubmit}
              disabled={disableBtn}
            />
            <NavItem to="/login" title="Already have an account? Sign in here" />
        </View>
    )
}

export default RegisterPage