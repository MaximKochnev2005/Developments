import "./PageProduct.css"
import img_1 from "./img/image-1.webp"
import img_2 from "./img/image-2.webp"
import img_3 from "./img/image-3.webp"
import img_4 from "./img/image-4.webp"
import img_5 from "./img/image-5.webp"
import color_1 from "./img/color-1.png"
import color_2 from "./img/color-2.png"
import color_3 from "./img/color-3.png"
import color_4 from "./img/color-4.png"
import color_5 from "./img/color-5.png"
import color_6 from "./img/color-6.png"
import review_1 from "./img/review-1.jpeg"
import review_2 from "./img/review-2.jpeg"
import {Breadcrumbs} from "./PagesSubComponensts/Breadcrumbs";
import {Gallery} from "./PagesSubComponensts/Gallery";
import {Colors} from "./PagesSubComponensts/Colors";
import {Memory} from "./PagesSubComponensts/Memory";
import {Properties} from "./PagesSubComponensts/Properties";
import {Description} from "./PagesSubComponensts/Description";
import {ModelComparison} from "./PagesSubComponensts/ModelComparison";
import {Reviews} from "./PagesSubComponensts/Reviews";
import {ReviewsForm} from "./PagesSubComponensts/ReviewsForm";
import {AddToCart} from "./PagesSubComponensts/AddToCart";

export const PageProduct = () => {
    return (
        <main>
            <div className="box">
                <Breadcrumbs/>
                <h1 className="box__main-name main-name">Смартфон Apple iPhone</h1>
                <Gallery/>
                <div className="grid">
                    <div className="grid__column grid__column_rate">
                        <Colors/>
                        <Memory/>
                        <Properties/>
                        <Description/>
                        <ModelComparison/>
                        <Reviews/>
                        <ReviewsForm/>
                    </div>
                    <AddToCart/>
                </div>
            </div>
        </main>
    )
}
