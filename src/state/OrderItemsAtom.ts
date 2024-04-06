import { OrderItemsAtomDataType } from '@/types/OrderItemsDataType'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const OrderItemsAtom = atom({
    key: 'OrderItemsAtom',
    default: [] as OrderItemsAtomDataType[],
    effects_UNSTABLE: [persistAtom],
})
