import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'
import revervationIcon from '../images/rezervation-icon.png'
import sliderLabel from '../images/slider-label.png'
import mockOtel from '../images/deneme2.jpeg'
import arrow from '../images/arrow.png'
import miniArrow from '../images/mini-arrow.png'
import '../css/App.css';
import '../css/slider.scss';
import { textsLibrary } from "../utils/texts"
import BackgroundSlider from '../components/BackgroundSlider'; // s???

function App() {
  const [overflow, setOverflow] = useState(false);

  useEffect(()=>{
    window.addEventListener("resize", hideTextIfOverflown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    hideTextIfOverflown()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overflow])
  
  setTimeout(()=>{
    setOverflow(true);
  }, 1)

  function isOverflown(element: Element): Boolean {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }

  function isOverflownSlider(element: Element): Boolean {
    var sliderRect = document.getElementsByClassName("background-slider").item(0)!.getBoundingClientRect()
    var elemRect = element.getBoundingClientRect()
    if (elemRect.right >= sliderRect.left) return true;
    return false;
  }

  function hideTextIfOverflown() {
    var arrowHolder = document.getElementsByClassName("arrow-holder").item(0)!
    var actionButton = document.getElementsByClassName("reservation-button").item(0)!
    var text = document.getElementsByClassName("reservation-text").item(0)!
    if (isOverflown(actionButton)) {
      if (text.getAttribute("display") !== "none"){
        text.setAttribute("style", "display: none;")
      }
    }
    else {
      if (text.getAttribute("display") !== "flex") {
        text.setAttribute("style", "display: flex;")
        if (isOverflown(actionButton)) {
          text.setAttribute("style", "display: none;")
        }
      }
    }
    if (isOverflownSlider(arrowHolder)) {
      console.log("arrow overflowed")
      arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("src",miniArrow)
      arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("style", "margin-bottom: 2em;")
    }
    else {
      if (!isOverflownSlider(arrowHolder)) {
        console.log("arrow not overflowed")
        arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("src", arrow)
        arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("style", "margin-bottom: -3em;")
      }
    }
  }

  var openHiddenMenu = (div: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    var lines = div.currentTarget.getElementsByClassName("menu-lines")
    var hiddenMenu = document.getElementsByClassName("hidden-menu")

    if (hiddenMenu.item(0)!.classList.contains("open-hidden-menu")) {
      //menu kapama
      lines.item(0)!.classList.add("menu-line-rotation")
      lines.item(0)!.classList.remove("reverse-menu-line-rotation")
      hiddenMenu.item(0)!.classList.remove("open-hidden-menu")
    }
    else {
      //menu acma
      lines.item(0)!.classList.add("reverse-menu-line-rotation")
      lines.item(0)!.classList.remove("menu-line-rotation")
      hiddenMenu.item(0)!.classList.add("open-hidden-menu")
    }
  }

  return (
    <div className="App">
      <div className='menu'>
        <div className='hidden-menu'>
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
          <img alt='LogoImage' src={logo}/>
        </div>
        <div className='action-buttons'>
          <div className='reservation-button'>
            <div className='reservation-icon'>
              <img alt='reservation-icon' src={revervationIcon}/>
            </div>
            <div className='reservation-text'>
              <h1>{textsLibrary.ENG.Booking}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='slider'>
        <div className='arrow-holder'>
          <img className='arrow' alt='arrow' src={arrow}/>
        </div>
        <div className='front-label'>
          <div className='background-slider'>
            <BackgroundSlider className={"mock-slider"}/>
            {/* <img className="mock-slider" alt="mock-slider" src={mockOtel}/> */}
          </div>
          <img className='slider-label' alt="slider-label" src={sliderLabel}/>
        </div>
      </div>
    </div>
  );
}

export default App;
