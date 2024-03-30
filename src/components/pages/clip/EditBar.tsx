import { deleteManyClips } from "@/actions/clip"

type EditBarProps = {
  clickItemIds: number[]
}

export default function EditBar({ clickItemIds }: EditBarProps) {
  //체크박스 클릭한 상품들 삭제 요청
  const handleDeleteButton = async () => {
    await deleteManyClips(1, clickItemIds)
    //모달로 바꿀 예정
    let confirm = window.confirm("정말 삭제하시겠습니까?")
    confirm && alert("삭제되었습니다.")
  }
  return (
    <div className="z-10 right-0 fixed bottom-0 w-full grid grid-cols-2 h-12 text-white tracking-tighter">
      <button className="bg-[#222222]">폴더에 추가</button>
      <button className="bg-[#FF5452]" onClick={handleDeleteButton}>
        삭제
      </button>
    </div>
  )
}
