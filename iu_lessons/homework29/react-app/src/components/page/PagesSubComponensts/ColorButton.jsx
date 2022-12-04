import color_1 from "../img/color-1.png";
import color_2 from "../img/color-2.png";
import color_3 from "../img/color-3.png";
import color_4 from "../img/color-4.png";
import color_5 from "../img/color-5.png";
import color_6 from "../img/color-6.png";

export const ColorButton = (props) => {
    console.log(props.color)
    let colors = {
        "Красный": color_1,
        "Зеленый": color_2,
        "Розовый": color_3,
        "Синий": color_4,
        "Белый": color_5,
        "Черный": color_6,
    }
    let classes_name = "colors__button"
    if(props.color === "Синий"){
        classes_name = "colors__button_maket colors__button "
    }
    return (
        <button className={classes_name}><img src={colors[props.color]} alt={props.color}/></button>
    )
}
