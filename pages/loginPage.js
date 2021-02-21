import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux'
import Input from '../components/input'
import Button from '../components/button'
import NavItem from '../components/navItem'
import constants from '../constants'
import { login } from '../redux/actions'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: constants.white,
      alignItems: 'center',
      paddingHorizontal: 30
    },
    title: {
      fontSize: constants.titleFontSize,
      marginTop: 150,
      marginBottom: 32
    },
    button: {
      marginTop: 24,
    },
});

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const disableBtn = useMemo(() => !email || !password, [email, password])

    const onSubmit = useCallback(() => {
      dispatch(
        login({
          email,
          password
        })
      )
    }, [email, password, dispatch])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <Input placeholder="Email" value={email} onChange={setEmail} keyboardType="email-address" />
            <Input placeholder="Password" value={password} onChange={setPassword} secure/>
              <Button 
                style={styles.button}
                title="Login"
                onPress={onSubmit}
                disabled={disableBtn}
              />
             <NavItem to="/register" title="Don't have an account? Sign up here" />
        </View>
    )
}

export default LoginPage