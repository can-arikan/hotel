// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import '../css/App.css';
import '../css/slider.scss';
import { hideTextIfOverflown } from '../utils/functions';
import { PageContainer, TransitionPage } from '../components/PageContainer/PageContainer';
import { Menu } from '../components/Menu/Menu';
import { Slider } from '../components/Slider/Slider';
import { MovingCards } from '../components/MovingCards/MovingCards';
import { images } from '../utils/images';
import { MenuContainer } from '../components/Menu/MenuContainer';

function App() {
  useEffect(()=>{
    window.addEventListener("resize", hideTextIfOverflown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    hideTextIfOverflown()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {}
  }, [])

  return (
    <div className="App">
      <MenuContainer>
        <Menu/>
      </MenuContainer>
      <div style={{
        minHeight: "14vh",
        backgroundColor: "var(--primary_color)",
        width: "100%",
        zIndex: "-2"
      }}/>
      <PageContainer id="Page1">
        <Slider/>
      </PageContainer>
      <TransitionPage>
        <img alt='TransitionImage' src={images.transitionImage}/>
      </TransitionPage>
      <PageContainer marginTop='33vh' minWidth='110vh'>
        <MovingCards/>
      </PageContainer>
      <PageContainer>

      </PageContainer>
    </div>
  );
}

export default App;
