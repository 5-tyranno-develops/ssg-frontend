"use client"

import { useState } from "react"
import ItemCard from "../ui/ItemCard"
import Checkbox from "../ui/Checkbox"
import ClipCancleButton from "./ClipCancleButton"
import ClipEditButton from "./ClipEditButton"
import EditBar from "./EditBar"
import ClipInfoButton from "./ClipInfoButton"
import { deleteManyClips } from "@/actions/clip"
import Link from "next/link"

//itemIds는 서버에서 받아와야함
type ClipMainPropsType = {
  itemIds: number[]
}

export default function ClipMain({ itemIds }: ClipMainPropsType) {
  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState(
    itemIds.reduce((acc, itemId) => {
      acc[itemId] = false
      return acc
    }, {} as { [key: number]: boolean }),
  )
  const [allCheck, setAllCheck] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  //개별 체크박스 클릭
  const handleClick = (itemId: number) => {
    const updatedClicks = { ...clicks, [itemId]: !clicks[itemId] }

    const newCount = Object.values(updatedClicks).filter(
      (click) => click,
    ).length
    setCount(newCount)

    const isAllChecked = Object.values(updatedClicks).every((click) => click)
    setAllCheck(isAllChecked)

    setClicks(updatedClicks)
  }

  //전체 체크박스 클릭
  const handleAllClicks = () => {
    const newAllCheck = !allCheck // 현재 allCheck의 반대 값
    const updatedClicks = Object.keys(clicks).reduce((acc, key) => {
      acc[parseInt(key)] = newAllCheck
      return acc
    }, {} as { [key: number]: boolean })
    setAllCheck(newAllCheck)
    setClicks(updatedClicks)
    setCount(newAllCheck ? itemIds.length : 0)
  }

  //편집 클릭
  const handleEditMode = () => {
    const updatedMode = !isEditMode
    setCount(0)
    const iniClicks = Object.keys(clicks).reduce((acc, key) => {
      acc[parseInt(key)] = false
      return acc
    }, {} as { [key: number]: boolean })
    setClicks(iniClicks)
    setIsEditMode(updatedMode)
  }

  const clickItemIds = Object.keys(clicks)
    .filter((itemId) => clicks[parseInt(itemId)] === true)
    .map((itemId) => parseInt(itemId))

  return (
    <section className="relative">
      <div className="mt-3 px-4 text-sm">
        {isEditMode ? (
          <div className="flex flex-row justify-between items-center">
            <Checkbox
              id="editClip"
              text={count.toString() + "/" + itemIds.length.toString()}
              onChange={() => handleAllClicks()}
              checked={allCheck}
              isDisabled={false}
              checkboxShape="squre w-[19px] h-[19px]"
            />
            <ClipCancleButton onEditMode={() => handleEditMode()} />
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center">
            <ClipInfoButton />
            <ClipEditButton onEditMode={() => handleEditMode()} />
          </div>
        )}
        {isEditMode && <EditBar clickItemIds={clickItemIds} />}
        {itemIds.length === 0 ? (
          <div className="flex justify-center items-center h-40 text-sm text-[#959595]">
            <p>아직 좋아요한 상품이 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-between">
            {itemIds.map((itemId) => (
              <div key={itemId} className="w-full h-full">
                {isEditMode && (
                  <Checkbox
                    id={"item" + itemId.toString()}
                    text=""
                    onChange={() => handleClick(itemId)}
                    checked={allCheck || clicks[itemId]}
                    isDisabled={false}
                    checkboxShape="square absolute mt-2 w-[19px] h-[19px]"
                  />
                )}
                <Link href={"#"}>
                  <ItemCard itemId={itemId} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
