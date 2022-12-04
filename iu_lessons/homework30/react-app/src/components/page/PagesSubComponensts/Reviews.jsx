import {Review} from "./Review";
import {useReviewsContext} from "../../../hooks/useReviewsContext";
export const Reviews = () => {
    const {reviews, dispatch} = useReviewsContext()
    console.log(reviews)
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
