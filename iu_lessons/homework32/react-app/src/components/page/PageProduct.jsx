import "./PageProduct.css"
import {Breadcrumbs} from "./PagesSubComponensts/Breadcrumbs";
import {Gallery} from "./PagesSubComponensts/Gallery";
import {Colors} from "./PagesSubComponensts/Colors";
import {Configs} from "./PagesSubComponensts/Configs";
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
                        <Configs/>
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
