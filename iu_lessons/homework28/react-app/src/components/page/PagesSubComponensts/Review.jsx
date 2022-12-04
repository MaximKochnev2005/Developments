import review_1 from "../img/review-1.jpeg";

export const Review = () => {
    return (
        <div className="reviews-box">
            <div className="reviews-text">
                <div className="reviews-text__head">
                    <div className="reviews-text__name">Марк Г.</div>
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
                        менее месяца
                    </div>
                    <div className="info__worth"><b>Достоинства:</b>
                        <br/>Это мой первый айфон после после огромного количества телефонов на
                        андроиде.
                        всёплавно, чётко и красиво. довольно шустрое устройство. камера
                        весьма неплохая,
                        ширик тоже на высоте.
                    </div>
                    <div className="info__user"><b>Недостатки:</b>
                        <br/>к самому устройству мало имеет отношение, но перенос данных с
                        андроида - адскаявещь)
                        а если нужно переносить фото с компа, то это только через itunes,
                        который урезает качество фотографий исходное
                    </div>
                </div>

            </div>
            <div className="review__img "><img className="img__border"
                                               src={review_1}
                                               alt="Фто пользователя Марк Г."/></div>
        </div>
    )
}
