import {ColorButton} from "./ColorButton";

export const Colors = () => {
    let colors = ["Красный", "Зеленый", "Розовый", "Синий", "Белый", "Черный"]
    return (
        <section className="colors">
            <h2 className="colors__title">Цвет товара: cиний</h2>
            <div className="colors__wrapper">
                {colors.map((el) => {
                    return <ColorButton color={el}/>
                })}
            </div>
        </section>
    )
}
