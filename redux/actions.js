import call from '../api'

export const login = ({
    email, 
    password
}) => async (dispatch) => {
    if(!email || !password) {
        return
    }

    try {
        const data = await call('post', '/auth/login', {
            email, 
            password,
        })  
        
        if(data) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: data.email, 
                    password: data.password, 
                    clinicName: data.clinicName, 
                    phoneNo: data.phoneNo, 
                    address: data.address
                }
            })
        }
    } catch (e) {
        alert(e.data?.reason)
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export const register = ({ 
    email, 
    password, 
    clinicName, 
    phoneNo, 
    address 
}) => async (dispatch) => {
    if(!email || !password || !clinicName|| !phoneNo|| !address) {
        return
    }

    try {
        const data = await call('post', '/auth/register', {
            email, 
            password, 
            clinicName, 
            phoneNo, 
            address
        })  
        if(data) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: data.email, 
                    password: data.password, 
                    clinicName: data.clinicName, 
                    phoneNo: data.phoneNo, 
                    address: data.address
                }
            })
        }
    } catch (e) {
        alert(e.data?.reason)
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export const getCurrentUser = () => async (dispatch) => {
    try {
        const data = await call('post', '/auth/currentUser') 

        if(data) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: data.email, 
                    password: data.password, 
                    clinicName: data.clinicName, 
                    phoneNo: data.phoneNo, 
                    address: data.address
                }
            })
        }
    } catch (e) {
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
         await call('post', '/auth/logout')
         dispatch({
            type: 'LOGOUT'
        })
    } catch (e) { }
}

export const setRecordDetail = (payload) => ({
    type: 'UPDATE_RECORD_DETAIL',
    payload
})