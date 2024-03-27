import { mainFookterDataType } from '@/types/MainFooterNavDataType'

export const MainFooterNavData: mainFookterDataType[] = [
    { id: 1, title: '카테고리', icon_url: 'https://img.icons8.com/metro/26/menu.png', url: '/category' },
    { id: 2, title: '선물하기', icon_url: 'https://img.icons8.com/ios/50/packaging.png', url: '/' },
    { id: 3, title: '홈', icon_url: 'https://img.icons8.com/ios/50/home--v1.png', url: '/' },
    { id: 4, title: 'MY', icon_url: 'https://img.icons8.com/material-outlined/24/user--v1.png', url: '/mypage' },
    {
        id: 5,
        title: '최근본 상품',
        icon_url: 'https://img.icons8.com/material-outlined/24/visible--v1.png',
        url: '/recentproduct',
    },
]
