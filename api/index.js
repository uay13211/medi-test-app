import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http:/localhost:3001/api',
    timeout: 3000,
})

const call = (
    method,
    url,
    data,
    headers
) => {
    return axiosInstance({
        method,
        url,
        headers,
        ...(method.toLowerCase() === 'get' ? { params: data } : { data })
    })
        .catch((err) => {
            return Promise.reject(err?.response ?? err)
        })
        .then((res) => {
            const apiData = res.data

            if (!apiData.success && apiData.success !== undefined) {
                return Promise.reject({ 
                    errorCode: apiData.reason
                })
            }

            return res.data.data
        })
        // .catch((err) => {
        //     console.log(err)
        // })
}

export default call