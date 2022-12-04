import color_1 from "../img/color-1.png";
import color_2 from "../img/color-2.png";
import color_3 from "../img/color-3.png";
import color_4 from "../img/color-4.png";
import color_5 from "../img/color-5.png";
import color_6 from "../img/color-6.png";

export const Colors = () => {
    return (
        <section className="colors">
            <h2 className="colors__title">Цвет товара: cиний</h2>
            <div className="colors__wrapper">
                <button className="colors__button"><img src={color_1} alt="Красный"/></button>
                <button className="colors__button"><img src={color_2} alt="Зеленый"/></button>
                <button className="colors__button"><img src={color_3} alt="Розовый"/></button>
                <button className="colors__button_maket colors__button "><img src={color_4} alt="Синий"/></button>
                <button className="colors__button"><img src={color_5} alt="Белый"/></button>
                <button className="colors__button"><img src={color_6} alt="Черный"/></button>
            </div>
        </section>
    )
}
