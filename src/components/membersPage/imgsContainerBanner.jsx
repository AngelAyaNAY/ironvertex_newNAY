import { useState } from 'react';

import '../../styles/membersStyles/imgsContainerBannerStyles.css'
import Img_1 from "/banners/BrianTsuii_03-2.webp";
import Img_2 from "/banners/Soy_01-2.webp";
import Img_3 from "/banners/Canain_01-2.webp";
import Img_4 from "/banners/Enma_01-2.webp";
import Img_5 from "/banners/Cetra_01-2.webp";
import Img_6 from "/banners/Zensei_01-2.webp";
import Img_7 from "/banners/Katloumi_01-2.webp";
import Star_01 from "/assets/Select_star_ss.webp";

import DataFULL from "../../data/jsonDataPage.json";
const ImgsContainerBanner = () => {
    const [selectedId, setSelectedId] = useState(1);
    const { dataEnglish } = DataFULL;
    const images = [Img_1, Img_2, Img_3, Img_4, Img_5, Img_6, Img_7];

    const handleSelect = (id) => {
        setSelectedId(id);
    }

    return (
        <div className='mainImagesMembers'>
            <div className="textTitle">
                <h1>Members</h1>
                <div className="lineTitle" />
            </div>
            <div className="contentIMGs_generated">
                {dataEnglish.map((member, idx) => (
                    <div
                        key={idx}
                        className={`imgContainerMemb ${selectedId === member.id_member ? 'activeImg' : ''}`}
                        onClick={() => handleSelect(member.id_member)}
                    >
                        <div className="upImgMemb">
                            <div className="selectedImg">
                                <img className='imgSelect_star01' src={Star_01} alt="" />
                                <span>{member.name_member}</span>
                            </div>
                            <div className="bgHideMemb" />
                        </div>
                        <img className={`imgSc_${idx + 1}`} src={images[idx]} alt="img_1.webp" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImgsContainerBanner
