import { combineReducers } from 'redux' 
import RecordDetailReducer from './recordDetail'
import UserProfileReducer from './userProfile'

const CombinedReducer = combineReducers({
    userProfile: UserProfileReducer,
    recordDetail: RecordDetailReducer
})

export default CombinedReducer