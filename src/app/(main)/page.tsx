import Image from 'next/image'
import MainEventSection from './MainEventSection'
import MainHeader from '@/components/ui/MainHeader'

export default function Home() {
    return (
        <main>
            <h1>SSG FRONT-END</h1>
            <MainHeader />
            <div className="z-[900]">{/* <MainEventSection /> */}</div>
        </main>
    )
}
