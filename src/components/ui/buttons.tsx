import Link from 'next/link'
import './common.css'
export default function Buttons({
    title,
    color,
    href,
    ftcolor,
    click,
}: {
    title: string
    color?: string
    href: string
    ftcolor?: string
    click?: any
}) {
    return (
        <div>
            <Link href={href}>
                <button
                    className="button-groups"
                    style={{ backgroundColor: color || '#ff5452', color: ftcolor || '#fff' }}
                    onClick={click}
                >
                    {title}
                </button>
            </Link>
        </div>
    )
}
