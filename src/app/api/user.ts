import { UserDataType } from '@/types/UserDataType'
import Server_Url from './constraints'
import constraints from './constraints'
async function signupAPI(requestData: UserDataType) {
    try {
        console.log('Request to server:', requestData)
        const response = await fetch(`${constraints.Server_Url}/api/v1/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })

        const data = await response.json()
        console.log('Response from server:', data)
        return data // Optionally return data if needed
    } catch (error) {
        console.error('Error:', error)
        // Rethrow the error for handling in the caller function
    }
}

export default signupAPI
