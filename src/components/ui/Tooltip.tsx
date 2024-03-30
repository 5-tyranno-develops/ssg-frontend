type TootipPropsType = {
  text: string
  className?: string
  children?: React.ReactNode
}

export default function Tooltip({
  text,
  className,
  children,
}: TootipPropsType) {
  return (
    <div className={`${className}`}>
      <span className="absolute right-2 text-lg">X</span>
      <div className="absolute top-6 px-2.5 mt-1">• {text}</div>
      {children}
    </div>
  )
}
