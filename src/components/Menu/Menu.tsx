import { openHiddenMenu } from "../../utils/functions"
import { images } from "../../utils/images"
import { textsLibrary } from "../../utils/texts"

export const Menu = () => {
    return (
      <div className='menu'>
        <div className="hidden-menu-container">
          <div className='hidden-menu'/>
        </div>
        <div className='left-menu'>
          <div className='menu-item-box' onClick={(elem) => openHiddenMenu(elem)}>
            <div className='menu-lines'>
              <div className='menu-item-line-long'/>
              <div className='menu-item-line-medium'/>
              <div className='menu-item-line-long'/>
            </div>
          </div>
        </div>
        <div className='menu-logo'>
          <img alt='LogoImage' src={images.logo}/>
        </div>
        <div className='action-buttons'>
          <div className='reservation-button'>
            <div className='reservation-icon'>
              <img id="reservation-icon" alt='reservation-icon' src={images.reservationIcon}/>
            </div>
            <div className='reservation-text'>
              <h1>{textsLibrary.ENG.Booking}</h1>
            </div>
          </div>
        </div>
      </div>
    )
}