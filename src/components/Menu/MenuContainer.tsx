import { useEffect } from 'react'
import '../../css/Menu/menuContainer.scss'

export const MenuContainer = (props: { children: React.ReactNode }) => {
    useEffect(()=>{
        const scrollHandler = (e: any) => {
            const { pageYOffset, scrollY } = window;
            var position = pageYOffset ? pageYOffset : scrollY
            var menu = document.getElementsByClassName("MenuContainer").item(0)!
            var hiddenMenuContainer = document.getElementsByClassName("hidden-menu-container").item(0)!
            if (position === 0) {
                if (!menu.classList.contains("ReverseMenuAnimation")) menu.classList.add("ReverseMenuAnimation")
                if (menu.classList.contains("MenuAnimation")) menu.classList.remove("MenuAnimation")
                if (!hiddenMenuContainer.classList.contains("hidden-menu-container-animation")) hiddenMenuContainer.classList.add("hidden-menu-container-animation")
                if (hiddenMenuContainer.classList.contains("hidden-menu-container-reverse-animation")) hiddenMenuContainer.classList.remove("hidden-menu-container-reverse-animation")
            }
            else {
                if (menu.classList.contains("ReverseMenuAnimation")) menu.classList.remove("ReverseMenuAnimation")
                if (!menu.classList.contains("MenuAnimation")) menu.classList.add("MenuAnimation")
                if (hiddenMenuContainer.classList.contains("hidden-menu-container-animation")) hiddenMenuContainer.classList.remove("hidden-menu-container-animation")
                if (!hiddenMenuContainer.classList.contains("hidden-menu-container-reverse-animation")) hiddenMenuContainer.classList.add("hidden-menu-container-reverse-animation")
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