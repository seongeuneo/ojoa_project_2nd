import { createContext } from "react";


const mockList = [
    {
        id: 1,
        imgNo: 0,
        productName: "빈티지페브릭 의자",
        productPriceFormatted: "199000",
        productPromotion: "24",
        productInfo: "상세페이지 있음",
        productReview: "999",
        productGrade: "4.8"

    },
    {
        id: 2,
        imgNo: 1,
        productName: "보송보송 의자",
        productPriceFormatted: "399000",
        productPromotion: "24",
        productInfo: "무릉도원",
        productReview: "2",
        productGrade: "4.5"

    },
    {
        id: 3,
        imgNo: 2,
        productName: "노란 의자",
        productPriceFormatted: "1200000",
        productPromotion: "11",
        productInfo: "머슥터드",
        productReview: "6",
        productGrade: "3.8"

    },
    {
        id: 4,
        imgNo: 3,
        productName: "입술 의자",
        productPriceFormatted: "120000",
        productPromotion: "8",
        productInfo: "썰면 두접시",
        productReview: "1",
        productGrade: "3.5"

    },
    {
        id: 5,
        imgNo: 4,
        productName: "이끼 의자",
        productPriceFormatted: "690000",
        productPromotion: "13",
        productInfo: "녹즙 녹즙",
        productReview: "3",
        productGrade: "3.4"

    },
    {
        id: 6,
        imgNo: 5,
        productName: "브라운 의자",
        productPriceFormatted: "1200000",
        productPromotion: "26",
        productInfo: "구름 위에 앉은 듯한 착석감",
        productReview: "9",
        productGrade: "4.6"

    },
    {
        id: 7,
        imgNo: 6,
        productName: "핑크 의자",
        productPriceFormatted: "90000",
        productPromotion: "95",
        productInfo: "마감세일 합니다",
        productReview: "99",
        productGrade: "3.8"

    },
    {
        id: 8,
        imgNo: 7,
        productName: "편한 의자",
        productPriceFormatted: "120000",
        productPromotion: "5",
        productInfo: "인체공학적으로 편한 의자",
        productReview: "129",
        productGrade: "4.2"

    },
    {
        id: 9,
        imgNo: 8,
        productName: "오 의자",
        productPriceFormatted: "20000",
        productPromotion: "95",
        productInfo: "MD 강추",
        productReview: "19",
        productGrade: "3.8"

    },
    {
        id: 10,
        imgNo: 9,
        productName: "조 의자",
        productPriceFormatted: "389000",
        productPromotion: "12",
        productInfo: "오조아 베스트셀러",
        productReview: "9999",
        productGrade: "4.4"

    },
    {
        id: 11,
        imgNo: 10,
        productName: "아 의자",
        productPriceFormatted: "99000",
        productPromotion: "11",
        productInfo: "50차 재입고",
        productReview: "3",
        productGrade: "4.6"

    },
    {
        id: 12,
        imgNo: 11,
        productName: "푸바오 의자",
        productPriceFormatted: "90000",
        productPromotion: "14",
        productInfo: "판다가 오백마리",
        productReview: "10",
        productGrade: "4.9"

    },
    {
        id: 13,
        imgNo: 12,
        productName: "진기의 철의 왕좌",
        productPriceFormatted: "999999999",
        productPromotion: "",
        productInfo: "MD 소장품",
        productReview: "1",
        productGrade: "3.6"

    },
    {
        id: 14,
        imgNo: 13,
        productName: "희상 의자",
        productPriceFormatted: "550000",
        productPromotion: "3",
        productInfo: "미니멀한 디자인",
        productReview: "12",
        productGrade: "4.1"

    },
    {
        id: 15,
        imgNo: 14,
        productName: "원희 의자",
        productPriceFormatted: "120000",
        productPromotion: "",
        productInfo: "마미손",
        productReview: "29",
        productGrade: "2.8"
    },
    {
        id: 16,
        imgNo: 15,
        productName: "성은 의자",
        productPriceFormatted: "139000",
        productPromotion: "",
        productInfo: "바게트 함냐함냐함",
        productReview: "19",
        productGrade: "3.9"

    },

]; //mockList

export default mockList;