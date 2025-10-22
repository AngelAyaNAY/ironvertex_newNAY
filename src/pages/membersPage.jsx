import BackFXLeaf from "../components/membersPage/backFXLeaf"
import ImgsContainerBanner from "../components/membersPage/imgsContainerBanner";
import TextBanner from "../components/membersPage/textBanner";
import "../styles/membersStyles/membersPageStyles.css"
import LeftBottomImg from "/public/assets/StarsLine_LeftBottom.webp"
import LogoRightBG from "/public/assets/LogoRightBG.webp"

const MembersPage = () => {
    return (
        <div className='mainMembersPage'>
            <div className="topItems">
                <div className="lineWidth" />
                <div className="fxContainer">
                    <BackFXLeaf />
                </div>
                <div className="square_top_3" />
                <div className="square_top_2" />
                <div className="square_top" />
            </div>
            <div className="contentMembersPage">
                <div className="contentText_Imgs">
                    <TextBanner />
                    <ImgsContainerBanner />
                </div>
                <div className="bgMembersPage">
                    <div className="bottomRightImg">
                        <img src={LeftBottomImg} alt="LeftBottomImg.webp" className="imgLeftBG" />
                        <div className="contentLeftBG">
                            <img src={LogoRightBG} alt="LogoRightBG.webp" className="logoRightBG" />
                            <div className="colorBGRight" />
                            <div className="colorBGRight_2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersPage;