import { cartMoneyDataType, cartToOrderDataType } from '@/types/CartDataType'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const CartCheckedListAtom = atom({
    key: 'CartCheckedListAtom',
    default: [] as number[],
    effects_UNSTABLE: [persistAtom],
})

export const CartItemsAtom = atom({
    key: 'CartItemsAtom',
    default: [] as cartToOrderDataType[],
    effects_UNSTABLE: [persistAtom],
})

export const CartMoneyAtom = atom({
    key: 'CartMoneyAtom',
    default: [] as cartMoneyDataType[],
    effects_UNSTABLE: [persistAtom],
})
export const ProductItemsAtom = atom({
    key: 'ProductItemsAtom',
    default: [] as cartToOrderDataType[],
    effects_UNSTABLE: [persistAtom],
})
