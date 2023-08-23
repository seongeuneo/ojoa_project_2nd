import React from "react";
import "./Store.css";
import { Link } from 'react-router-dom';

const storeList = [
    {
        id: 1,
        imgNo: 1,
        num: 1,
        storeTlt: 'Ojoa Company',
        add: '경기도 성남시 분당구 돌마로 46, 5층 (구미동 7-2)',
        addEn: '46, Dolma-ro, Bundang-gu, Seongnam-si, Gyeonggi-do',
        time: '11:00 - 20:00',
        tel: '02-4321-9876',
        link: 'https://goo.gl/maps/Kbu6K2VW3Z2yHZcr6',
        imgsrc: '../images/store1_576x400.png'
    },
    {
        id: 2,
        imgNo: 2,
        num: 2,
        storeTlt: 'Ojoa Boontheshop',
        add: '경기도 용인시 수지구 포은대로 536 (죽전동 1285)',
        addEn: '536, Poeun-daero, Suji-gu, Yongin-si, Gyeonggi-do',
        time: '11:00 - 20:00',
        tel: '070-1234-2345',
        link: 'https://goo.gl/maps/DharShHD54BFkgsU9',
        imgsrc: '../images/store2_576x400.png'
    },
]; // storeList

const Stores = () => {

    return (

        <div className="store_container">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;Store</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>STORES</h2>
                <div className="txt_01">찾아 오시는 길</div>
            </div>
            <div className="stores">
                {storeList.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="storeInfo">
                            <p className="storeTlt">{item.storeTlt}</p>
                            <p className="add">{item.add}</p>
                            <p className="addEn">{item.addEn}</p>
                            <p className="time">{item.time}</p>
                            <p className="tel">{item.tel}</p>
                            <p>&nbsp;</p>
                            <Link to="https://goo.gl/maps/Kbu6K2VW3Z2yHZcr6" target="_blank">
                                <img className="map"
                                    src="../images/store1_576x400.png" alt="store1" /></Link>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
export default Stores;