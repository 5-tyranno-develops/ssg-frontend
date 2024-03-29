'use client'

import Link from 'next/link'
import React from 'react'

export default function SubCategoryTable() {
  return (
    <div className="col-start-2 col-end-auto ms-1 me-1">
      <div className="grid-cols-3 grid border-t-[1px] border-gray-200 ">
        <Link
          href={'#'}
          className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]">
          <div className="overflow-hidden text-ellipsis">
            소/세부분류 데이터
          </div>
        </Link>
        <Link
          href={'#'}
          className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]">
          <div className="overflow-hidden text-ellipsis">
            소/세부분류 데이터
          </div>
        </Link>
        <Link
          href={'#'}
          className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]">
          <div className="overflow-hidden text-ellipsis">
            소/세부분류 데이터
          </div>
        </Link>
        <Link
          href={'#'}
          className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]">
          <div className="overflow-hidden text-ellipsis">
            소/세부분류 데이터
          </div>
        </Link>
        <Link
          href={'#'}
          className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]">
          <div className="overflow-hidden text-ellipsis">
            소/세부분류 데이터
          </div>
        </Link>
        {/* {
          소/세부분류 데이터.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={'#'}
                className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]">
                <div className="overflow-hidden text-ellipsis">
                  {item.title}
                </div>
              </Link>
            )
          })
        } */}
      </div>
    </div>
  )
}