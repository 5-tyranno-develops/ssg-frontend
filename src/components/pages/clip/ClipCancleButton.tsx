type ClipCancleButtonProps = {
  onEditMode: () => void
}

export default function ClipCancleButton({
  onEditMode,
}: ClipCancleButtonProps) {
  return (
    <button
      className="border border-zinc-200 rounded bg-white flex flex-row px-2 py-1"
      onClick={onEditMode}
    >
      취소
    </button>
  )
}
