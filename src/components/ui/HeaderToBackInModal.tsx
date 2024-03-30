import Image from "next/image"

interface Props{
    title : string
    setModalOpen: (value: boolean) => void
}

export default function HeaderToBackInModal({title, setModalOpen} : Props){
    return(
        <>
            <header
                className="h-[45px] flex items-center border-b-[1px] border-[rgba(0, 0, 0, 0.07)] sticky top-0 bg-white z-50"
            >
                <button
                    className="w-[50px] h-full"
                    onClick={() => {
                        setModalOpen(false)
                    }}
                >
                    <Image width="24" height="22" className='mx-auto' src="https://img.icons8.com/ios/50/left--v1.png" alt="backButton"/>
                </button>
                <h3 className="text-[14px] w-[calc(100vw-44px)] text-center mx-auto relative right-[25px]">{title}</h3>
            </header>
        </>
    )
}