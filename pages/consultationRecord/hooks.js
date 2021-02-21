import { useState, useEffect } from 'react'
import call from '../../api'

export default (timeInterval) => {
    const [ isReady, setIsReady ] = useState(false)
    const [ records, setRecords ] = useState([])

    useEffect(() => {
        if(timeInterval){
            (async() => {
                setIsReady(false)
                try {
                    const data = await call('get', `/record?dt=${timeInterval}`)
                    setRecords(data)
                } catch(e) {}
                setIsReady(true)
            })()
        }
    }, [timeInterval])

    return {
        isReady,
        records
    }
}