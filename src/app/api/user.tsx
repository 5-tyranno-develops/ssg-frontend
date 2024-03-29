import { UserDataType } from '@/types/UserDataType'
import ServerUrl from './ServerUrl'
async function signupAPI(requestData: UserDataType) {
    try {
        console.log('Request to server:', requestData)
        const response = await fetch(`${ServerUrl}/api/v1/users/signup`, {
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
