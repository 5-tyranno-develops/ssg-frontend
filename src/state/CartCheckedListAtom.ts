import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const CartCheckedListAtom = atom({
    key: 'CartCheckedListAtom',
    default: [] as number[],
    effects_UNSTABLE: [persistAtom],
})
