export const AddToCart = () => {
    return (
        <div className="grid__column grit__column_sidbar">
            <aside>
                <div className="price-tag">
                    <div className="price-tag__old-prise">75 990₽</div>
                    <span className="price-tag__discont">-8</span>
                    <button className="price-tag__like"><span className="mask">добавить в избранное</span>
                    </button>
                    <div className="price-tag__new-prise"> 67 990₽</div>
                    <p>Самовывоз в четверг, 1 сентября—<strong>бесплатно</strong></p>
                    <p>Курьером в четверг, 1 сентября—<strong>бесплатно</strong></p>
                    <button className="price-tag__basket_buttom" data-product="1">Добaвить в кoрзину
                    </button>
                </div>
                <h3 className="advertising">
                    Реклама
                </h3>
                <iframe className="advertising__select-iframe" ></iframe>
                <iframe className="advertising__select-iframe" ></iframe>
            </aside>
        </div>
    )
}
