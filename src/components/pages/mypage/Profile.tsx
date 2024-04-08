'use client'
import { getMynameAPI } from '@/actions/mypage'
import { use, useEffect, useState } from 'react'

function Profile() {
    // const name = getMynameAPI()
    // console.log(name)
    const [name, setName] = useState('')
    const fetchData = async () => {
        try {
            const res = await getMynameAPI()
            setName(res as string)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <section className="p-4">
            <div>
                <h1 className="text-2xl">{name} 님</h1>
                <h2 className="font-extrabold text-2xl mt-4">SSG에서 즐거운 쇼핑 되세요!</h2>
            </div>
        </section>
    )
}
export default Profile
