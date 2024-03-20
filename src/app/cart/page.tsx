'use client'
import { useState } from 'react'
import Buttons from '@/components/ui/buttons'
import AddressModal from './_component/AddressModal'

function Cart() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <main>
            <button
                onClick={() => {
                    setModalOpen(true)
                }}
            >
                버튼
            </button>
            <AddressModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </main>
    )
}
export default Cart
