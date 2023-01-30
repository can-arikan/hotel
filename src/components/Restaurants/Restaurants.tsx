import { RestaurantCard } from "./RestaurantCard";
import { images } from "../../utils/images";
import '../../css/Restaurants/restaurant.scss'

export class Restaurant {
    "title": string;
    "image": string;
    "ingredient": string;
}

export const Restaurants = () => {
    var res1 = new Restaurant()
    res1.image = images.cokertme
    res1.title = "Çökertme"
    res1.ingredient = "Kuzu eti ile 4 saat pişirilmiştir, beğendi yatağında servis edilir. Tavsiye ederim."
    const restaurants: Restaurant[] = [res1, res1, res1, res1, res1, res1, res1, res1, res1, res1, res1, res1]
    return (
        <>
            <h1 className="titles">Restaurants</h1>
            <div className="RestaurantsGrid">
            {
                restaurants.flatMap((restaurant, idx) => {
                    return <RestaurantCard key={idx} informations={restaurant} idx={idx}/>
                })
            }
            </div>
        </>
    )
}