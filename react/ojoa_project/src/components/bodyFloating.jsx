import "../../styles/bodyFloating.css";

const bodyFloating = () => {

    return (
        <div>
            {/*---------------------------------------------------------*/}
            {/* bodyFloating */}
            <div className="right_quick1">
                <div className="btn_top"><Link to="#mheader"><img src="/images/btn_top.gif" /></Link></div>
                <div className="btn_bottom"><Link to="#mfooter"><img src="/images/btn_bottom.gif" /></Link></div>
            </div>
            <div className="right_quick2">
                <div className="btn_recent1"><Link to="#"><img src="/images/mtalk_icon.png" /></Link></div>
                <div className="btn_recent2"><Link to="#"><img src="/images/mchannel_icon.png" /></Link></div>
            </div>
            <br /><br />
        </div>
    );
};
export default bodyFloating;