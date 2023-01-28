import { MovingCardData } from "../../data-classes/MovingCardData";
import "../../css/MovingCard/movingCard.scss"
import { isOverflownSlider } from "../../utils/functions";
import { useEffect, useState } from "react";

export const MovingCard = (props: {
    movingCardData: MovingCardData,
    leftAnimation?: boolean,
    rightAnimation?: boolean,
    index: number,
    isFirst?: boolean,
    isLast?: boolean
}) => {
    const [style, setStyle] = useState({})
    useEffect(()=>{
        const marginHandler = () => {
            var style: React.CSSProperties = {}
            var arrowHolder = document.getElementsByClassName("arrow-holder").item(0)
            if (!arrowHolder) {
                if (window.innerWidth >= 700) {
                    if (props.isFirst) style["marginTop"] = "-5vh"
                    if (props.isLast) style["marginBottom"] = "0vh"
                }
                else {
                    if (props.isFirst) style["marginTop"] = "0vh"
                    if (props.isLast) style["marginBottom"] = "0vh"
                }
            }
            else if (isOverflownSlider(arrowHolder)) {
                if (props.isFirst) style["marginTop"] = "0vh"
                if (props.isLast) style["marginBottom"] = "0vh"
            }
            else {
                if (!isOverflownSlider(arrowHolder)) {
                    if (props.isFirst) style["marginTop"] = "-5vh"
                    if (props.isLast) style["marginBottom"] = "0vh"
                }
            }
            setStyle(style)
        }
        marginHandler()
        window.addEventListener("resize", marginHandler)
        return () => {
            window.removeEventListener("resize", marginHandler)
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {
                props.leftAnimation === true ?
                    <LeftMovingCard movingCardData={props.movingCardData} index={props.index} isFirst={props.isFirst} isLast={props.isLast} style={style}/> : 
                props.rightAnimation === true ?
                    <RightMovingCard movingCardData={props.movingCardData} index={props.index} isFirst={props.isFirst} isLast={props.isLast} style={style}/> : 
                
                <DefaultMovingCard movingCardData={props.movingCardData} index={props.index}/>
            }
        </>
    )
}

const LeftMovingCard = (props: {movingCardData: MovingCardData, index: number, isFirst?: boolean, isLast?: boolean, style: React.CSSProperties}) => {
    return (
        <div className="LeftMovingCard" style={props.style}>
            <div className="MovingCardText">
                {props.movingCardData.decription}
            </div>
            <div className="MovingCardImageDiv">
                <img alt={"Moving Card " + props.index.toString()} className="MovingCardImage" src={props.movingCardData.img}/>
            </div>
        </div>
    )
}

const RightMovingCard = (props: {movingCardData: MovingCardData, index: number, isFirst?: boolean, isLast?: boolean, style: React.CSSProperties}) => {
    return (
        <div className="RightMovingCard" style={props.style}>
            <div className="MovingCardImageDiv">
                <img alt={"Moving Card " + props.index.toString()} className="MovingCardImage" src={props.movingCardData.img}/>
            </div>
            <div className="MovingCardText">
                {props.movingCardData.decription}
            </div>
        </div>
    )
}

const DefaultMovingCard = (props: {movingCardData: MovingCardData, index: number}) => {
    return (
        <div className="DefaultMovingCard">
            <div className="MovingCardImageDiv">
                <img alt={"Moving Card " + props.index.toString()} className="MovingCardImage" src={props.movingCardData.img}/>
            </div>
            <div className="MovingCardText">
                {props.movingCardData.decription}
            </div>
        </div>
    )
}