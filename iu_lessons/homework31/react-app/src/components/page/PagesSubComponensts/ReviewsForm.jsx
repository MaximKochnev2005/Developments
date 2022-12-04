import {useReviewsContext} from "../../../hooks/useReviewsContext";
import {useState} from "react";

export const  ReviewsForm = () => {
    const {reviews, dispatch} = useReviewsContext()
    const [user, setUser] = useState()
    const [rate, setRate] = useState()
    const [advantage, setAdvantage] = useState()
    const handleSubmit = () => {
        let review = {"user": user, "rate": rate, "advantage": advantage}
        dispatch({type: "SET", payload: review})
    }
    return (
        <section className="review-form-enter">
            <h2 className="review-form__title">Добавить свой отзыв</h2>
            <form action="form" className="form" id="review-form" name="review_form">
                <div className="form__row">
                    <div className="form__input_wrap">
                        <input className="form__item form__name" type="text" name="name"
                               placeholder="Имя и Фамилия" onChange={(e) => {setUser(e.target.value)}}/>
                    </div>
                    <div className="form__input_wrap">
                        <input className="form__item form__rating" type="number" min="1" max="5"
                               name="rating" placeholder="Оценка" onChange={(e) => {setRate(e.target.value)}}/>
                    </div>
                </div>
                <div className="review-text">
                                    <textarea className="form__item form__review" placeholder="Текст отзыва"
                                              name="text" onChange={(e) => {setAdvantage(e.target.value)}}></textarea>
                    <button type="button" onClick={() => handleSubmit()} className="review-text__basket_buttom">Отправить отзыв
                    </button>
                </div>
            </form>
        </section>
    )
}
