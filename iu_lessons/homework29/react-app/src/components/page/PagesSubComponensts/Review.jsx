import review_1 from "../img/review-1.jpeg";
import review_2 from "../img/review-2.jpeg";

let photos = {
    "Марк Г.": review_1,
    "Валерий Кваленко": review_2,
}
export const Review = (props) => {
    return (
        <div className="reviews-box">
            <div className="reviews-text">
                <div className="reviews-text__head">
                    <div className="reviews-text__name">{props.review.user}</div>
                    <div className="reviews-text__stars">
                        <i className="fa fa-star reviews-text__stars_plus"
                           aria-hidden="true"></i>
                        <i className="fa fa-star reviews-text__stars_plus"
                           aria-hidden="true"></i>
                        <i className="fa fa-star reviews-text__stars_plus"
                           aria-hidden="true"></i>
                        <i className="fa fa-star reviews-text__stars_plus"
                           aria-hidden="true"></i>
                        <i className="fa fa-star reviews-text__stars_plus"
                           aria-hidden="true"></i>
                    </div>
                </div>

                <div className="info">
                    <div className="info__user"><b>Опыт использования:</b>
                        {props.review.experience}
                    </div>
                    <div className="info__worth"><b>Достоинства:</b>
                        <br/>{props.review.advantage}
                    </div>
                    <div className="info__user"><b>Недостатки:</b>
                        <br/>{props.review.disadvantage}
                    </div>
                </div>

            </div>
            <div className="review__img "><img className="img__border"
                                               src={photos[props.review.user]}
                                               alt={"Фто пользователя "+props.review.user}/></div>
        </div>
    )
}
