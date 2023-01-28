import { MovingCardData } from '../../data-classes/MovingCardData';
import '../../fonts/January Shine.ttf';
import { MovingCard } from './MovingCard';
import { images } from '../../utils/images';
import { useEffect } from 'react';
import { movingCardAnimations } from '../../utils/functions';

var mcd1 = new MovingCardData()
mcd1.img = images.shezlong
mcd1.decription = "Menekşeler Mordur\nGüller Kırmızı\nTeletabi sevenlerse toptur"

export const MovingCards = () => {
    var movingCards: MovingCardData[] = [mcd1, mcd1, mcd1]

    useEffect(() => {
        window.addEventListener("scroll", movingCardAnimations, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {}
    }, [])

    return (
        <>
            <h1 style={{ "fontFamily": "JanuaryShine", "textAlign": "center", "fontSize": "6em" }}>
                Aden
            </h1>
            {
                movingCards.map(
                    (item, i) => {
                        var isFirst = i === 0
                        var isLast = i === (movingCards.length - 1)
                        if (i % 2 === 0) return (
                            <MovingCard
                                key={i}
                                movingCardData={item}
                                rightAnimation={true}
                                index={i}
                                isFirst={isFirst}
                                isLast={isLast}
                            />
                        )
                        else {
                            return (
                                <MovingCard
                                    key={i}
                                    movingCardData={item}
                                    leftAnimation={true}
                                    index={i}
                                    isFirst={isFirst}
                                    isLast={isLast}
                                />
                            )
                        }
                    }
                )
            }
        </>
    )
}