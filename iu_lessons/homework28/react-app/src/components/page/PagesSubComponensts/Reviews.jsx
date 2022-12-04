import review_2 from "../img/review-2.jpeg";
import {Review} from "./Review";

export const Reviews = () => {
    return (
        <div className="reviews">
            <div className="reviews__title">
                <div className="reviews__line">
                    <h2 className="reviews__name">Отзывы</h2>
                    <span className="reviews__line_color_gray">425</span>
                </div>

            </div>
            <div className="reviews-list">
                <Review/>

                <div className="reviews-box_border_none reviews-box ">
                    <div className="reviews-text">
                        <div className="reviews-text__head">
                            <div className="reviews-text__name">Валерий Коваленко</div>
                            <div className="reviews-text__stars">
                                <i className="fa fa-star reviews-text__stars_plus"
                                   aria-hidden="true"></i>
                                <i className="fa fa-star reviews-text__stars_plus"
                                   aria-hidden="true"></i>
                                <i className="fa fa-star reviews-text__stars_plus"
                                   aria-hidden="true"></i>
                                <i className="fa fa-star reviews-text__stars_plus"
                                   aria-hidden="true"></i>
                                <i className="fa fa-star reviews-text__stars_null"
                                   aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="info">
                            <div className="info__user"><b>Опыт использования:</b>
                                менее месяца
                            </div>
                            <div className="info__worth"><b>Достоинства:</b>
                                <br/>OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго
                            </div>
                            <div className="info__user"><b>Недостатки:</b>
                                <br/>Плохая ремонтопригодность</div>
                        </div>
                    </div>
                    <div className="review__img"><img className="img__border"
                                                      src={review_2}
                                                      alt="Фто пользователя Валерий Кваленко"/></div>
                </div>
            </div>
        </div>
    )
}
