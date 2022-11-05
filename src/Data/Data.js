import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
} from '@iconscout/react-unicons';

import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'


//sidebar data
export const SidebarData =[
    {
        icon: UilEstate,
        heading: 'Dashboard'
    },
    {
        icon: UilClipboardAlt,
        heading: 'Orders'
    },
    {
        icon: UilUsersAlt,
        heading: 'Customers'
    },
    {
        icon: UilPackage,
        heading: 'Products'
    },
    {
        icon: UilChart,
        heading: 'Analytics'
    }
]
export const CardData =[
    {
        titles: 'Sales',
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #5ffae0 100%)',
            boxShadow:'0px 10px 20px 0px #e0c6f5'
        },
        barValue: 70,
        value: '25,970',
        png: UilUsdSquare,
        series: [
            {
                name: 'Sales',
                data: [31,40,28,51,42,109,100],
            },
        ],
    }, {
        titles: 'Revenue',
        color: {
            backGround: 'linear-gradient(200deg, #f2994a 0%, #ef96c5 100%)',
            boxShadow:'0px 10px 20px 0px #fdc0c7'
        },
        barValue: 80,
        value: '14,270',
        png: UilMoneyWithdrawal,
        series: [
            {
                name: 'Revenue',
                data: [10,100,50,70,80,30,40],
            },
        ],
    },
    {
        titles: 'Expenses',
        color: {
            backGround: 'linear-gradient(142deg,#DFEC51 0%,#73aada 100%)',
            //linear-gradient (rgb(248,212,154) -146.425%, rgb(255, 202, 113) -46.42%)',
            boxShadow:'0px 10px 20px 0px #f9d598b'
        },
        barValue: 60,
        value: '4,270',
        png: UilClipboardAlt,
        series: [
            {
                name: 'Expenses',
                data: [10,25,15,30,12,15,20],
            },
        ],
    },
]

export const UpdatesData = [
    {
        img: img1,
        name: 'Adebayo Mujaheed',
        not1: 'has ordered Apple smart watch 2500mAh battery',
        time: '20 seconds ago',
    },
    {
        img: img2,
        name: 'Olatoke AbdulQoyyum',
        not1: 'has received Samsung gadget for charging battery ',
        time: '25 minutes ago',
    },
    {
        img: img3,
        name: 'Aleem Wadudah',
        not1: 'has ordered Apple smart watch, samsung Gear 2500mAh battery',
        time: '1 hour ago',
    },
];