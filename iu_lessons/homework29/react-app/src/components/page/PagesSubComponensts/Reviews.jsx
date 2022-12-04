import review_2 from "../img/review-2.jpeg";
import {Review} from "./Review";

export const Reviews = () => {
    let reviews = [{"experience": "менее месяца", "advantage": "Это мой первый айфон после после огромного количества телефонов на андроиде. всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.", "disadvantage": "к самому устройству мало имеет отношение, но перенос данных с андроида - адскаявещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное", "user": "Марк Г."},{"experience": "менее месяца", "advantage": "OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго", "disadvantage": "Плохая ремонтопригодность", "user": "Валерий Кваленко"}]
    return (
        <div className="reviews">
            <div className="reviews__title">
                <div className="reviews__line">
                    <h2 className="reviews__name">Отзывы</h2>
                    <span className="reviews__line_color_gray">425</span>
                </div>

            </div>
            <div className="reviews-list">
                {reviews?.map((el) => {
                    return <Review review={el}/>
                })}
            </div>
        </div>
    )
}
