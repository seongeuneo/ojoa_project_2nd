import '../../pages/Main/Main.css';

const FlipRoom = () => {

    return (

        // hover_total -> FlipRoom
        <div className="FlipRoom">

            <div className="hover_wrap">
                <div className="hover_leftright">
                    <figure className="front">
                        <img className="colimg" src={"./images/livingroom.jpg"} alt="마우스 올리면 to Right" />
                        <figcaption>
                            <h3>LIVING ROOM</h3>
                            <p>Design your Life</p>
                        </figcaption>
                    </figure>
                    <figure className="back">
                        <img className="colimg" src={"./images/l_bg.png"} alt="마우스 내리면 to Left" />
                        <figcaption>
                            <h3><a href="./product_list/product_list.html">지금 보러가기 &rarr;</a></h3>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="hover_wrap">
                <div className="hover_leftright">
                    <figure className="front">
                        <img className="colimg" src={"./images/bedroom.jpg"} alt="마우스 올리면 to Right" />
                        <figcaption>
                            <h3>BED ROOM</h3>
                            <p>Design your Relax</p>

                        </figcaption>
                    </figure>
                    <figure className="back">
                        <img className="colimg" src={"./images/b_bg.png"} alt="마우스 내리면 to Left" />
                        <figcaption>
                            <h3><a href="./product_list/product_list.html">지금 보러가기 &rarr;</a></h3>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="hover_wrap">
                <div className="hover_leftright">
                    <figure className="front">
                        <img className="colimg" src={"./images/kitchen.jpg"} alt="마우스 올리면 to Right" />
                        <figcaption>
                            <h3>KITCHEN</h3>
                            <p>Design your Health</p>

                        </figcaption>
                    </figure>
                    <figure className="back">
                        <img className="colimg" src={"./images/k_bg.png"} alt="마우스 내리면 to Left" />
                        <figcaption>
                            <h3><a href="./product_list/product_list.html">지금 보러가기 &rarr;</a></h3>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </div>
    );
};

export default FlipRoom;