import {ColorButton} from "./ColorButton";
import {useState} from "react";

export const Colors = () => {
    let [color, setColor] = useState("Синий");
    let colors = ["Красный", "Зеленый", "Розовый", "Синий", "Белый", "Черный"]
    return (
        <section className="colors">
            <h2 className="colors__title" id={'color_title'}>Цвет товара: {color}</h2>
            <div className="colors__wrapper">
                {colors.map((el) => {
                    return <span onClick={() =>{setColor(el)} }><ColorButton color={el}/></span>
                })}
            </div>
        </section>
    )
}
