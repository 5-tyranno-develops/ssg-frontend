import Link from 'next/link'
import React from 'react'

// import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

export default function CategoryListModal() {
    return (
        <div>
            <div className="absolute bg-gray-700 bg-opacity-70 top-20 left-0 w-full h-dvh z-[1399]"></div>
            <div className="absolute top-12 left-0 w-full z-[1400] bg-white max-h-[(-45px) + 100vh] overflow-y-scroll">
                <div className="grid grid-cols-2">
                    <ul>
                        <li>
                            <Link href={'#'}>
                                <button className="w-full h-[42px] overflow-hidden overflow-ellipsis text-xs pl-4 text-start border-b-[1px]">
                                    대/중/소분류 값
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>
                                <button className="w-full h-[42px] overflow-hidden overflow-ellipsis text-xs pl-4 text-start border-b-[1px]">
                                    대/중/소분류 값
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>
                                <button className="w-full h-[42px] overflow-hidden overflow-ellipsis text-xs pl-4 text-start border-b-[1px]">
                                    대/중/소분류 값
                                </button>
                            </Link>
                        </li>
                        {/* {대/중/소분류데이터.map((category, idx) => {
              return (
                <li>
                  <Link
                    key={idx}
                    href={'#'}
                  >
                    <button
                      className='w-full h-[42px] overflow-hidden overflow-ellipsis text-xs pl-4 text-start border-b-[1px]'
                    >
                      {category.title}
                    </button>
                  </Link>
                </li>
              )
            })} */}
                    </ul>
                    <div className="bg-gray-100 flex-grow-0 flex-shrink-0 basis-1/2">
                        <ul className="bg-gray-100 min-h-full absolute top-0 w-1/2">
                            <li className="flex flex-1 m-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs pl-[15px] items-center h-[42px]">
                                <Link href={'#'}>
                                    <button className="flex items-center w-full h-[42px] overflow-hidden overflow-ellipsis text-xs text-start border-b-[1px]">
                                        전체보기
                                        <div className="w-3">{/* <SmallArrowIcon /> */}</div>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'}>
                                    <button className="items-center w-full h-[42px] overflow-hidden overflow-ellipsis text-xs pl-4 text-start border-b-[1px]">
                                        중/소/세부분류 값
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'}>
                                    <button className="w-full h-[42px] overflow-hidden overflow-ellipsis text-xs pl-4 text-start border-b-[1px]">
                                        중/소/세부분류 값
                                    </button>
                                </Link>
                            </li>
                            {/* {중/소/세부분류데이터.map((category, idx) => (
                <li key={idx}>
                  <Link href={'#'}>
                    <button className='w-full h-[42px] overflow-hidden overflow-ellipsis text-xs pl-4 text-start border-b-[1px]'>
                      {category.title}
                    </button>
                  </Link>
                </li>
              ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
