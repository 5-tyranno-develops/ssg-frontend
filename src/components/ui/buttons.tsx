import './common.css'
export default function Buttons({ title, color }: { title: string; color?: string }) {
    return (
        <div>
            <button className="button-groups" style={{ backgroundColor: color || '#ff5452' }}>
                {title}
            </button>
        </div>
    )
}
