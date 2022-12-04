import img_1 from "../img/image-1.webp";
import img_2 from "../img/image-2.webp";
import img_3 from "../img/image-3.webp";
import img_4 from "../img/image-4.webp";
import img_5 from "../img/image-5.webp";

export const Gallery = () => {
    return (
        <section className="box__gallery gallery">
            <img className="box__gallery-img" src={img_1}
                 alt="Вид спереди(приорететный) и сзади"/>
            <img className="box__gallery-img" src={img_2} alt="Вид экрана"/>
            <img className="box__gallery-img" src={img_3} alt="Вид с полубока"/>
            <img className="box__gallery-img" src={img_4}
                 alt="Крупный план трех камер"/>
            <img className="box__gallery-img" src={img_5}
                 alt="Вид спереди и сзади (приоритетный)"/>
        </section>
    )
}
