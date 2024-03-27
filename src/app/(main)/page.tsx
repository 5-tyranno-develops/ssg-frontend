import MainEventSection from './MainEventSection'
import MainShortcutSection from '@/components/pages/Main/MainShortcutSection'
import MainSecondNav from '@/components/pages/Main/MainSecondNav'

export default function Home() {
    return (
        <main className="">
            <MainSecondNav />
            <MainEventSection />
            <MainShortcutSection />
        </main>
    )
}
