import { images } from "./images";


// UTILITIES

function isInViewport(element?: Element | null, offset: number = 50): Boolean {
	if (!element) return false;
	const top = element.getBoundingClientRect().top;
	const bottom = element.getBoundingClientRect().bottom;
	return ((top + offset) >= 0 && (top - offset) <= window.innerHeight) ||
	(bottom - offset) <= window.innerHeight;
}

// Export Functions

export function isOverflownSlider(element: Element): Boolean {
	var sliderRect = document.getElementsByClassName("background-slider").item(0)!.getBoundingClientRect()
	var elemRect = element.getBoundingClientRect()
	if (elemRect.right >= sliderRect.left) return true;
	return false;
}

export const movingCardAnimations = () => {
	var leftCards = document.getElementsByClassName("LeftMovingCard")
	var rightCards = document.getElementsByClassName("RightMovingCard")

	var arrowHolder = document.getElementsByClassName("arrow-holder").item(0)!
	if (isOverflownSlider(arrowHolder)) {
		for (var i = 0; i < leftCards.length; i++) {
			var leftCard = leftCards.item(i)
			if (isInViewport(leftCard) && !leftCard?.classList.contains("slideLeftMobil") && !leftCard?.classList.contains("slideLeft")) {
				leftCard?.classList.add("slideLeftMobil")
			}
		}
		for (i = 0; i < rightCards.length; i++) {
			var rightCard = rightCards.item(i)
			if (isInViewport(rightCard) && !rightCard?.classList.contains("slideRightMobil") && !rightCard?.classList.contains("slideRight")) {
				rightCard?.classList.add("slideRightMobil")
			}
		}
	} else {
		if (!isOverflownSlider(arrowHolder)) {
			for (i = 0; i < leftCards.length; i++) {
				leftCard = leftCards.item(i)
				if (isInViewport(leftCard) && !leftCard?.classList.contains("slideLeft") && !leftCard?.classList.contains("slideLeftMobil")) {
					leftCard?.classList.add("slideLeft")
				}
			}
			for (i = 0; i < rightCards.length; i++) {
				rightCard = rightCards.item(i)
				if (isInViewport(rightCard) && !rightCard?.classList.contains("slideRight") && !rightCard?.classList.contains("slideRightMobil")) {
					rightCard?.classList.add("slideRight")
				}
			}
		}
	}
}

export var openHiddenMenu = (div: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	var lines = div.currentTarget.getElementsByClassName("menu-lines").item(0)!
	var hiddenMenu = document.getElementsByClassName("hidden-menu").item(0)!
	var hiddenMenuContainer = document.getElementsByClassName("hidden-menu-container").item(0)!

	if (hiddenMenu.classList.contains("open-hidden-menu")) {
		lines.classList.add("menu-line-rotation")
		lines.classList.remove("reverse-menu-line-rotation")
		hiddenMenu.classList.remove("open-hidden-menu")
		hiddenMenu.classList.add("close-hidden-menu")
		setTimeout(()=>{
			hiddenMenuContainer.setAttribute("style", "display: none")
		}, 800)
	}
	else {
		lines.classList.add("reverse-menu-line-rotation")
		lines.classList.remove("menu-line-rotation")
		hiddenMenu.classList.add("open-hidden-menu")
		hiddenMenu.classList.remove("close-hidden-menu")
		hiddenMenuContainer.setAttribute("style", "")
		setTimeout(()=>{
			hiddenMenuContainer.setAttribute("style", "display: unset")
		}, 300)
	}
}

export function hideTextIfOverflown() {
	var arrowHolder = document.getElementsByClassName("arrow-holder").item(0)!
	var reservationButton = document.getElementsByClassName("reservation-button").item(0)!
	var text = document.getElementsByClassName("reservation-text").item(0)!
	var indicator = document.getElementsByClassName("indicators").item(0)!
	var menuItemBox = document.getElementsByClassName("menu-item-box").item(0)!
	var longLines = document.getElementsByClassName("menu-item-line-long")!
	var mediumLine = document.getElementsByClassName("menu-item-line-medium").item(0)!
	var reservationIcon = document.getElementById("reservation-icon")!
	var leftImageCards = document.getElementsByClassName("LeftMovingCard")
	var rightImageCards = document.getElementsByClassName("RightMovingCard")
	var rootSettings = document.getElementById("root")

	if (isOverflownSlider(arrowHolder)) {
		arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("src", images.miniArrow)
		arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("style", "margin-bottom: 2em; margin-left: 10%; height: 12em;")

		reservationIcon.setAttribute("style", "width: calc(var(--menu-button-width-height) - 2.7em); height: calc(var(--menu-button-width-height) - 2.7em);")
		reservationButton.setAttribute("style", "width: calc(var(--menu-button-width-height) - 0.7em); height: calc(var(--menu-button-width-height) - 0.7em); right: -0.5em;")

		indicator.setAttribute("style", "width: 24% !important; position: relative; left: -1.1em; margin-top: -1em !important; z-index: 1;")

		text.setAttribute("style", "display: none;")

		menuItemBox.setAttribute("style", "width: calc(var(--menu-button-width-height) - 0.9em); height: calc(var(--menu-button-width-height) - 0.9em); left: -0.5em;")
		mediumLine.setAttribute("style", "width: calc(var(--border-width-medium) - 0.9em)")
		for (var idx = 0; idx < longLines.length; idx++) {
			var longLine = longLines.item(idx)!
			longLine.setAttribute("style", "width: calc(var(--border-width-long) - 0.9em)")
		}

		for (idx = 0; idx < leftImageCards.length; idx++) {
			var leftImageCard = leftImageCards.item(idx)
			leftImageCard?.classList.add("Mobil")
			if (leftImageCard?.classList.contains("slideLeft")) {
				leftImageCard?.classList.remove("slideLeft")
				leftImageCard?.classList.add("slideLeftMobil")
			}
		}

		for (idx = 0; idx < rightImageCards.length; idx++) {
			var rightImageCard = rightImageCards.item(idx)
			rightImageCard?.classList.add("Mobil")
			if (rightImageCard?.classList.contains("slideRight")) {
				rightImageCard?.classList.remove("slideRight")
				rightImageCard?.classList.add("slideRightMobil")
			}
		}

		rootSettings?.setAttribute("style", "overflow-x: clip")
	}
	else {
		if (!isOverflownSlider(arrowHolder)) {
			arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("src", images.arrow)
			arrowHolder.getElementsByClassName("arrow").item(0)!.setAttribute("style", "margin-bottom: 0em; margin-left: 25%; height: 5em;")

			reservationIcon.setAttribute("style", "")
			reservationButton.setAttribute("style", "")

			text.setAttribute("style", "display: flex;")

			indicator.setAttribute("style", "")

			menuItemBox.setAttribute("style", "")
			mediumLine.setAttribute("style", "")
			for (idx = 0; idx < longLines.length; idx++) {
				longLine = longLines.item(idx)!
				longLine.setAttribute("style", "")
			}

			for (idx = 0; idx < leftImageCards.length; idx++) {
				leftImageCard = leftImageCards.item(idx)
				leftImageCard?.classList.remove("Mobil")
				if (leftImageCard?.classList.contains("slideLeftMobil")) {
					leftImageCard?.classList.add("slideLeft")
					leftImageCard?.classList.remove("slideLeftMobil")
				}
			}

			for (idx = 0; idx < rightImageCards.length; idx++) {
				rightImageCard = rightImageCards.item(idx)
				rightImageCard?.classList.remove("Mobil")
				if (rightImageCard?.classList.contains("slideRightMobil")) {
					rightImageCard?.classList.add("slideRight")
					rightImageCard?.classList.remove("slideRightMobil")
				}
			}

			rootSettings?.setAttribute("style", "overflow-x: unset")
		}
	}
}