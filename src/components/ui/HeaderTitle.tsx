import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '@/components/ui/common.css'

export default function HeaderTitle({ title }: { title: string }) {
    return (
        <div className="signup_header_menu">
            <FontAwesomeIcon icon={faArrowLeft} style={{ width: '20px', height: '20px' }} />
            <p style={{ fontSize: '20px', textAlign: 'center', flex: 1 }}>{title}</p>
        </div>
    )
}
