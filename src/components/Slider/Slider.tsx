import { images } from "../../utils/images"
import BackgroundSlider from "../BackgroundSlider/BackgroundSlider"

export const Slider = () => {
    return (
        <div className='slider'>
            <div className='arrow-holder'>
                <img className='arrow' alt='arrow' src={images.arrow} />
            </div>
            <div className='front-label'>
                <div className='background-slider'>
                    <BackgroundSlider
                        className="mock-slider"
                        imgClass="mock-slider"
                        images={[images.mockOtel, images.mockOtel, images.mockOtel, images.mockOtel]}
                        indicatorClass="indicator"
                        indicatorFillerClass="inner-indicator"
                        duration={6000}
                    />
                </div>
                <img className='slider-label' alt="slider-label" src={images.sliderLabel} />
            </div>
        </div>
    )
}