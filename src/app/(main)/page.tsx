import Image from 'next/image'
import MainEventSection from './MainEventSection'

export default function Home() {
    return (
        <main>
            <h1>SSG FRONT-END</h1>

            <div className="z-[900]">
                <MainEventSection />
            </div>
        </main>
    )
}
