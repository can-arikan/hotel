import React, { useRef } from 'react';
import { Slide, SlideshowRef } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const BackgroundSlider = (props={className: `string` || null, imgClass: `string` || null, images: []}) => {
    const slideRef = useRef<SlideshowRef>(null)
    var imageElements: JSX.Element[] = []
    props.images.forEach((element, index) => {
        imageElements.push(<img alt={"element " + index} src={element}></img>)
    })
    return (
        <div className={props.className}>
            <Slide indicators={true} ref={slideRef}>
                {imageElements}
            </Slide>
            <div style={{display: 'flex', justifyContent: 'center', margin: '50px 0'}}>
                <button type="button" style={{marginRight: '20px'}} onClick={() => slideRef.current!.goBack()}>Back</button>
                <button type="button" style={{marginRight: '20px'}} onClick={() => slideRef.current!.goNext()}>Next</button>
                <select onChange={(event) => slideRef.current!.goTo(parseInt(event.currentTarget.value))}>
                    <option>--Select--</option>
                    <option value="0">First</option>
                    <option value="1">Second</option>
                    <option value="2">Third</option>
                    <option value="3">Fourth</option>
                </select>
            </div>
        </div>
    );
};

export default BackgroundSlider;