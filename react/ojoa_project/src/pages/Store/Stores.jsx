<<<<<<< HEAD
import "./Store.css";
import { Link } from 'react-router-dom';

const Stores = () => {

    return (
        <div className="container">
            <div className="stores">
                <div className="storeInfo">
                    <p className="storeTlt">Ojoa Company</p>
                    <p className="add">경기도 성남시 분당구 돌마로 46, 5층 (구미동 7-2)</p>
                    <p className="addEn">46, Dolma-ro, Bundang-gu, Seongnam-si, Gyeonggi-do</p>
                    <p className="time">11:00 - 20:00</p>
                    <p className="tel">02-4321-9876</p>
                    <p>&nbsp;</p>
                    <Link to="https://goo.gl/maps/Kbu6K2VW3Z2yHZcr6" target="_blank">
                        <img className="map"
                            src="../images/store1_576x400.png" alt="store1" /></Link>
                </div>
                <div className="storeInfo">
                    <p className="storeTlt">Ojoa Boontheshop</p>
                    <p className="add">경기도 용인시 수지구 포은대로 536 (죽전동 1285)</p>
                    <p className="addEn">536, Poeun-daero, Suji-gu, Yongin-si, Gyeonggi-do</p>
                    <p className="time">11:00 - 20:00</p>
                    <p className="tel">070-1234-2345</p>
                    <p>&nbsp;</p>
                    <Link to="https://goo.gl/maps/DharShHD54BFkgsU9" target="_blank">
                        <img className="map"
                            src="../images/store2_576x400.png" alt="store2" /></Link>
                </div>
            </div>
        </div>
    );
};
=======
import "../Store/Store.css";
import { Link } from 'react-router-dom';

const Stores = () => {

    return (
        <div className="container">
            <div className="stores">
                <div className="storeInfo">
                    <p className="storeTlt">Ojoa Company</p>
                    <p className="add">경기도 성남시 분당구 돌마로 46, 5층 (구미동 7-2)</p>
                    <p className="addEn">46, Dolma-ro, Bundang-gu, Seongnam-si, Gyeonggi-do</p>
                    <p className="time">11:00 - 20:00</p>
                    <p className="tel">02-4321-9876</p>
                    <p>&nbsp;</p>
                    <Link to="https://goo.gl/maps/Kbu6K2VW3Z2yHZcr6" target="_blank">
                        <img className="map"
                            src="../images/store1_576x400.png" alt="store1" /></Link>
                </div>
                <div className="storeInfo">
                    <p className="storeTlt">Ojoa Boontheshop</p>
                    <p className="add">경기도 용인시 수지구 포은대로 536 (죽전동 1285)</p>
                    <p className="addEn">536, Poeun-daero, Suji-gu, Yongin-si, Gyeonggi-do</p>
                    <p className="time">11:00 - 20:00</p>
                    <p className="tel">070-1234-2345</p>
                    <p>&nbsp;</p>
                    <Link to="https://goo.gl/maps/DharShHD54BFkgsU9" target="_blank">
                        <img className="map"
                            src="../images/store2_576x400.png" alt="store2" /></Link>
                </div>
            </div>
        </div>
    );
};
>>>>>>> main
export default Stores;