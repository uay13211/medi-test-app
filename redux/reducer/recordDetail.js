const initState = {
    cId: null,
    consultationDate: null,
    doctorName: null,
    medication: null,
    consultationFee: null,
    followUp: null
}

const RecordDetailReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_RECORD_DETAIL':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default RecordDetailReducer