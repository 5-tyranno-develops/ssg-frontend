import MainEventSection from '../../components/pages/Main/MainEventSection'
import MainShortcutSection from '@/components/pages/Main/MainShortcutSection'
import MainSecondNav from '@/components/pages/Main/MainSecondNav'
import MainBanner from '@/components/pages/Main/MainBanner'

export default function Home() {
    return (
        <main>
            <MainSecondNav />
            <MainEventSection />
            <MainShortcutSection />
            <MainBanner />
        </main>
    )
}
