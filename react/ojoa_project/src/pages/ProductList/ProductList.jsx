import React from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";
import Pagination from "../../components/Pagination/Pagination";

function ProductList() {
    return (
        <div className="ProductList">
            <ul className="pl_items">
                <li><ProductListItem imgNo={"0"} productName={"빈티지페브릭 의자"} productPriceFormatted={"199,000"} productInfo={"상세페이지 있음"} productReview={"999"} productGrade={"4.8"}/></li>
                <li><ProductListItem imgNo={"1"} productName={"보송보송 의자"} productPriceFormatted={"390,000"} productInfo={"무릉도원"} productReview={"2"} productGrade={"4.5"}/></li>
                <li><ProductListItem imgNo={"2"} productName={"노란 의자"} productPriceFormatted={"1,200,000"} productInfo={"머슥터드"} productReview={"6"} productGrade={"3.8"}/></li>
                <li><ProductListItem imgNo={"3"} productName={"입술 의자"} productPriceFormatted={"120,000"} productInfo={"썰면 두접시"} productReview={"1"} productGrade={"3.5"}/></li>
                <li><ProductListItem imgNo={"4"} productName={"이끼 의자"} productPriceFormatted={"690,000"} productInfo={"녹즙 녹즙"} productReview={"3"} productGrade={"3.4"}/></li>
                <li><ProductListItem imgNo={"5"} productName={"브라운 의자"} productPriceFormatted={"1,200,000"} productInfo={"구름 위에 앉은 듯한 착석감"} productReview={"9"} productGrade={"4.6"}/></li>
                <li><ProductListItem imgNo={"6"} productName={"핑크 의자"} productPriceFormatted={"90,000"} productInfo={"마감세일 합니다"} productReview={"99"} productGrade={"3.8"}/></li>
                <li><ProductListItem imgNo={"7"} productName={"편한 의자"} productPriceFormatted={"120,000"} productInfo={"인체공학적으로 편한 의자"} productReview={"129"} productGrade={"4.2"}/></li>
                <li><ProductListItem imgNo={"8"} productName={"오 의자"} productPriceFormatted={"20,000"} productInfo={"MD 강추"} productReview={"19"} productGrade={"3.8"}/></li>
                <li><ProductListItem imgNo={"9"} productName={"조 의자"} productPriceFormatted={"389,000"} productInfo={"오조아 베스트셀러"} productReview={"9999"} productGrade={"4.4"}/></li>
                <li><ProductListItem imgNo={"10"} productName={"아 의자"} productPriceFormatted={"99,000"} productInfo={"50차 재입고"} productReview={"3"} productGrade={"4.6"}/></li>
                <li><ProductListItem imgNo={"11"} productName={"푸바오 의자"} productPriceFormatted={"90,000"} productInfo={"판다가 오백마리"} productReview={"10"} productGrade={"4.9"}/></li>
                <li><ProductListItem imgNo={"12"} productName={"진기의 철의 왕좌"} productPriceFormatted={"999,999,999"} productInfo={"MD 소장품"} productReview={"1"} productGrade={"3.6"}/></li>
                <li><ProductListItem imgNo={"13"} productName={"희상 의자"} productPriceFormatted={"550,000"} productInfo={"미니멀한 디자인"} productReview={"12"} productGrade={"4.1"}/></li>
                <li><ProductListItem imgNo={"14"} productName={"원희 의자"} productPriceFormatted={"120,000"} productInfo={"마미손"} productReview={"29"} productGrade={"2.8"}/></li>
                <li><ProductListItem imgNo={"15"} productName={"성은 의자"} productPriceFormatted={"120,000"} productInfo={"바게트 함냐함냐함"} productReview={"19"} productGrade={"3.9"}/></li>
            </ul>
            <Pagination/>
        </div>
    )
};

export default ProductList;