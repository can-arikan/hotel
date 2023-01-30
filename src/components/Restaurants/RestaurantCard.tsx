import { Restaurant } from "./Restaurants";

const toggleRestaurant = (idx: number) => {
    var hiddenRestaurant = document.getElementById("HiddenRestaurant " + idx.toString())!
    if (!hiddenRestaurant.classList.contains("OpenHiddenRestaurant")) hiddenRestaurant.classList.add("OpenHiddenRestaurant")
    else if (hiddenRestaurant.classList.contains("OpenHiddenRestaurant")) hiddenRestaurant.classList.remove("OpenHiddenRestaurant")
}

const openRestaurant = (idx: number) => {
    var hiddenRestaurant = document.getElementById("HiddenRestaurant " + idx.toString())!
    if (!hiddenRestaurant.classList.contains("OpenHiddenRestaurant")) hiddenRestaurant.classList.add("OpenHiddenRestaurant")
}

const closeRestaurant = (idx: number) => {
    var hiddenRestaurant = document.getElementById("HiddenRestaurant " + idx.toString())!
    if (hiddenRestaurant.classList.contains("OpenHiddenRestaurant")) hiddenRestaurant.classList.remove("OpenHiddenRestaurant")
}

export const RestaurantCard = (props: {informations: Restaurant, idx: number}) => {

    return (
        <div 
            className="RestaurantCard"
            onClick={() => toggleRestaurant(props.idx)}
            onMouseEnter={() => openRestaurant(props.idx)}
            onMouseLeave={() => closeRestaurant(props.idx)}
        >
            <div id={"HiddenRestaurant " + props.idx.toString()} className="HiddenRestaurant">
                <h1 className="RestaurantTitle">{props.informations.title}</h1>
                <div className="RestaurantIngredients">{props.informations.ingredient}</div>
            </div>
            <img 
                className="RestaurantImage"
                alt={"Restaurant " + (props.idx + 1).toString()}
                src={props.informations.image}
            />
        </div>
    )
}