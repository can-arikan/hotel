import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Slide, SlideshowRef } from 'react-slideshow-image';
import styled, { css, keyframes } from "styled-components";
import "../../css/Slider/slider.scss";
import 'react-slideshow-image/dist/styles.css';

interface PageProps {
    className?: String,
    imgClass?: String, 
    images?: String[],
    indicatorClass?: String,
    indicatorFillerClass?: String,
    duration?: Number
}

const BackgroundSlider: FunctionComponent<PageProps> = (props) => {
    const [innerFiller, setFiller] = useState([<></>])
    const [refresh, setRefresh] = useState(0)
    const [refreshMs, setRefreshMS] = useState(props.duration!.valueOf() + 1500)
    const [firstTime, setFirstTime] = useState(true)
    const slideRef = useRef<SlideshowRef>(null)
    useEffect(()=>{
        var r = document.querySelector(':root');
        r!.setAttribute('style', `--indicator-width: ${((100 / props.images?.length!) - 1).toString() + "%;"}`);
    },[props.images?.length])
    useEffect(()=> {
        var indicatorAnimationKeyFrames = keyframes`
            0% {
                width: 0%;
            }
            100% {
                width: 100%;
            }
        `
        var indicatorAnimation = css`${indicatorAnimationKeyFrames} ${(props.duration!.valueOf() + 1500).toString()+"ms"} 1 linear both`
        var AnimatedFiller = styled.div`
            animation: ${indicatorAnimation}
        `
        var reverseIndicatorAnimationKeyFrames = keyframes`
            0% {
                background-color: var(--button-hover-color);
                width: 100%;
            }
            100% {
                background-color: #a89db9;
                width: 100%;
            }
        `
        var reverseIndicatorAnimation = css`${reverseIndicatorAnimationKeyFrames} ${500+"ms"} 1 linear`
        var ReverseAnimatedFiller = styled.div`
            animation: ${reverseIndicatorAnimation}
        `
        var parent = document.getElementsByClassName(props.indicatorClass ? props.indicatorClass.toString(): "indicator")
        var newFillers = []
        var active = -1
        for (var i = 0; i < parent.length; i++) {
            if (parent.item(i)!.classList.contains("active")) {
                active = i
                newFillers.push(<AnimatedFiller className={props.indicatorFillerClass ? props.indicatorFillerClass.toString(): "inner-indicator"}/>)
                if (i === parent.length - 1) {
                    newFillers[i - 1] = <ReverseAnimatedFiller className={props.indicatorFillerClass ? props.indicatorFillerClass.toString(): "inner-indicator"}/>
                }
            }
            else {
                if (active >= 0) {
                    if (active - 1 >= 0) {
                        newFillers[active - 1] = <ReverseAnimatedFiller className={props.indicatorFillerClass ? props.indicatorFillerClass.toString(): "inner-indicator"}/>
                        newFillers.push(<div className={props.indicatorFillerClass ? props.indicatorFillerClass.toString(): "inner-indicator"}/>)
                    } else {
                        if (active - 1 + parent.length !== i) {
                            newFillers.push(<div className={props.indicatorFillerClass ? props.indicatorFillerClass.toString(): "inner-indicator"}/>)
                        } else {
                            newFillers.push(<ReverseAnimatedFiller className={props.indicatorFillerClass ? props.indicatorFillerClass.toString(): "inner-indicator"}/>)
                        }
                    }
                } else {
                    newFillers.push(<div className={props.indicatorFillerClass ? props.indicatorFillerClass.toString(): "inner-indicator"}/>)
                }
            }
        }
        if (firstTime) {
            setFirstTime(false)
            var arrangedNewFillers: any[] = []
            for (var j = 0; j < newFillers.length; j++) {
                arrangedNewFillers[(j - 1 + newFillers.length) % newFillers.length] = newFillers[j]
            }
            newFillers = arrangedNewFillers
        }
        setFiller(newFillers)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])
    setTimeout(()=>{
        setRefreshMS((props.duration!.valueOf() + 1500))
        setRefresh(refresh + 1)
    }, refreshMs)
    var imageElements: JSX.Element[] = []
    props.images?.forEach((element, index) => {
        imageElements.push(<img key={"element " + index} alt={"element " + index} src={element.toString()} className={props.imgClass ? props.imgClass.toString(): "mock-slider"}/>)
    })
    var indicatorElement = (index?: number) => {
        return (
            <div className={props.indicatorClass?.toString()}>
                {innerFiller[index ? index: 0]}
            </div>
        )
    }
    return (
        <div className={props.className ? props.className.toString(): "mock-slider"}>
            <Slide nextArrow={<button style={{display: "none"}}></button>} prevArrow={<button style={{display: "none"}}></button>} transitionDuration={1500} indicators={(index) => indicatorElement(index)} ref={slideRef} duration={props.duration?.valueOf()!}>
                {imageElements}
            </Slide>
        </div>
    );
};

export default BackgroundSlider;