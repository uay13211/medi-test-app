import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/button'
import NavItem from '../../components/navItem'
import constants from '../../constants'
import InfoItem from '../../components/infoItem'
import FloatingBtn from '../../components/floatingBtn'
import { logout } from '../../redux/actions'

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
    text: {
      marginTop: constants.margin,
      fontSize: constants.fontSize
    },
    linkText: {
        fontSize: 20,
        color: constants.blue,
        marginTop: constants.margin
    },
    logoutBtn: {
        marginTop: 30,
    }
});

const UserProfile = () => {
    const { clinicName, email, phoneNo, address } = useSelector(state => state.userProfile)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PROFILE</Text>
            <InfoItem title='Clinic Name' content={clinicName} />
            <InfoItem title='Email' content={email} />
            <InfoItem title='Phone' content={phoneNo} />
            <InfoItem title='Address' content={address} />
            <NavItem to="/consultationRecord">
                <Text style={styles.linkText}>My Consultation Records</Text>
            </NavItem>
            <Button 
              style={styles.logoutBtn}
              title="Logout"
              onPress={onLogout}
            />
            <FloatingBtn />
        </View>
    )
}

export default UserProfile