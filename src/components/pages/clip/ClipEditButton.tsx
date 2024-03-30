import Image from "next/image"
// import controlBar from "@/public/asset/images/control-bar.png"

type ClipEditButtonProps = {
  onEditMode: () => void
}

export default function ClipEditButton({ onEditMode }: ClipEditButtonProps) {
  return (
    <button
      className="border border-zinc-200 rounded bg-white flex flex-row px-2 py-1 items-center"
      onClick={onEditMode}
    >
      {/* <Image
        src={controlBar}
        alt={"관심상품 편집"}
        width={15}
        className="mr-1"
      /> */}
      편집
    </button>
  )
}
