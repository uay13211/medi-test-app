const initState = {
    isLoggedIn: false,
    clinicName: '',
    email: '',
    phoneNo: '',
    address: '',
}

const UserProfileReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...action.payload,
                isLoggedIn: true
            }
        case 'LOGOUT':
            return {
                ...initState
            }
        default:
            return state
    }
}

export default UserProfileReducer