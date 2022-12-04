export const  ReviewsForm = () => {
    return (
        <section className="review-form-enter">
            <h2 className="review-form__title">Добавить свой отзыв</h2>
            <form action="form" className="form" id="review-form" name="review_form">
                <div className="form__row">
                    <div className="form__input_wrap">
                        <input className="form__item form__name" type="text" name="name"
                               placeholder="Имя и Фамилия"/>
                    </div>
                    <div className="form__input_wrap">
                        <input className="form__item form__rating" type="number" min="1" max="5"
                               name="rating" placeholder="Оценка"/>
                    </div>
                </div>
                <div className="review-text">
                                    <textarea className="form__item form__review" placeholder="Текст отзыва"
                                              name="text"></textarea>
                    <button type="submit" className="review-text__basket_buttom">Отправить отзыв
                    </button>
                </div>

            </form>
        </section>
    )
}
