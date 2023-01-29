import { useEffect } from 'react'
import '../../css/Menu/menuContainer.scss'

export const MenuContainer = (props: { children: React.ReactNode }) => {
    useEffect(()=>{
        const scrollHandler = (e: any) => {
            const { pageYOffset, scrollY } = window;
            console.log('yOffset', pageYOffset, 'scrollY', scrollY)
            var position = pageYOffset ? pageYOffset : scrollY
            var menu = document.getElementsByClassName("MenuContainer").item(0)!
            var hiddenMenu = document.getElementsByClassName("hidden-menu").item(0)!
            if (position === 0) {
                if (!menu.classList.contains("ReverseMenuAnimation")) menu.classList.add("ReverseMenuAnimation")
                if (menu.classList.contains("MenuAnimation")) menu.classList.remove("MenuAnimation")
                if (hiddenMenu.classList.contains("ReverseHiddenMenuAnimation")) hiddenMenu.classList.remove("ReverseHiddenMenuAnimation")
            }
            else {
                if (menu.classList.contains("ReverseMenuAnimation")) menu.classList.remove("ReverseMenuAnimation")
                if (!menu.classList.contains("MenuAnimation")) menu.classList.add("MenuAnimation")
                if (!hiddenMenu.classList.contains("ReverseHiddenMenuAnimation")) hiddenMenu.classList.add("ReverseHiddenMenuAnimation")
            }
        }
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true)
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className='Container'>
            <div className="MenuContainer">
                {props.children}
            </div>
        </div>
    )
}