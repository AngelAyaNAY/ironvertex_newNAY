import '../../styles/membersStyles/textBannerStyles.css'

import StarAsset from "/assets/star_01.webp"
import Icon_01 from "/iconsPP/BrianTsuii_01.webp"
import Icon_02 from "/iconsPP/Soy_02.webp"
import Icon_03 from "/iconsPP/Canain_03.webp"
import Icon_04 from "/iconsPP/Enma_03.webp"
import Icon_05 from "/iconsPP/Cetra_03.webp"
import Icon_06 from "/iconsPP/Zensei_02.webp"
import Icon_07 from "/iconsPP/Katloumi_04.webp"

const TextBanner = () => {
    return (
        <div className='mainTextBanner'>
            <div className="leftTextContent">
                <div className="iconPP">
                    <img className='imgPP_01' src={Icon_01} alt="Icon_01.webp" />
                </div>
                <div className="lineContainer">
                    <div className="lineVertical" />
                    <img src={StarAsset} alt="StarAsset.webp" className="starIcon" />
                </div>
            </div>
            <div className="rightTextContent">
                <div className="topText">
                    <span>CEO</span>
                    <h1>Brian Tsui</h1>
                </div>
                <p className="paragraph">
                    Brian Tsui self taught Live2D in 2015, and was the first to create English tutorials on Youtube. In 2016, as learners gathered, he created and managed the Live2D user Discord community, which became the official Discord. <br /> <br />
                    As the community become popular, a freelance marketplace was established. Brian's own inquires quickly filled his schedule, which lead him to found Iron Vertex by 2017, a team to scale up the production. <br /> <br />
                    Iron Vertex's tutorials are endorsed by the official Live2D. Following years, IV has worked with VTubers in EN, CN, and JP, and also enterprises like Hololive, HYBE, Yostar, Riot Games, Crunchyroll, Netflix. <br /> <br />
                    Brian started his career with no prior art training, no fund, no social media presence. He learned first hand how to go grow a studio team from grounds up to become a stable business. IV is a proof of concept, which is for him to fulfill his true mission: to solve the 2D modeler industry problem. He believes that with the abundant skills, creativity, and drive, artists in this field deserve a sustainable career path that leads them to a lot more opportunities than what there is now.
                </p>
            </div>
        </div>
    )
}

export default TextBanner