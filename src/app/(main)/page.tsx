import Image from 'next/image'
import MainEventSection from '../../components/pages/Main/MainEventSection'
import MainHeader from '@/components/ui/MainHeader'
import MainShortcutSection from '@/components/pages/Main/MainShortcutSection'

export default function Home() {
    return (
        <main className="">
            {/* <div > */}
            <MainEventSection />
            <MainShortcutSection />
            {/* </div> */}
        </main>
    )
}
